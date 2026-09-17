import subprocess
import os
import math
import struct
import wave

OUTPUT_DIR = "public/videos"
os.makedirs(OUTPUT_DIR, exist_ok=True)
mp4_path = os.path.join(OUTPUT_DIR, "ascend-mentor-session.mp4")
poster_path = os.path.join(OUTPUT_DIR, "ascend-mentor-poster.jpg")
wav_path = "/tmp/mentor_ambience.wav"

# 1. Download real photography if needed
images = [
    ("/tmp/video_assets/mentor1.jpg", "https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?auto=format&fit=crop&w=1280&h=720&q=85"),
    ("/tmp/video_assets/mentor2.jpg", "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1280&h=720&q=85"),
    ("/tmp/video_assets/mentor3.jpg", "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1280&h=720&q=85")
]

import urllib.request
for local_path, url in images:
    if not os.path.exists(local_path) or os.path.getsize(local_path) < 1000:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with open(local_path, 'wb') as f:
            f.write(urllib.request.urlopen(req).read())

# Generate high-res poster
subprocess.run([
    "ffmpeg", "-y", "-i", "/tmp/video_assets/mentor1.jpg",
    "-vf", "scale=1280:720", "-q:v", "2", poster_path
], check=True)

# Generate warm, peaceful consulting audio WAV
def clamp(v, low=-32768, high=32767):
    return max(low, min(high, int(v)))

sample_rate = 44100
duration = 10.0
total_samples = int(sample_rate * duration)

with wave.open(wav_path, 'w') as wf:
    wf.setnchannels(2)
    wf.setsampwidth(2)
    wf.setframerate(sample_rate)
    frames = bytearray()
    for i in range(total_samples):
        t = i / sample_rate
        # Warm ambient consulting harmony
        # Fade in first 0.8s, fade out last 0.8s
        env = 1.0
        if t < 0.8:
            env = t / 0.8
        elif t > 9.2:
            env = (10.0 - t) / 0.8

        c3 = 0.10 * math.sin(2 * math.pi * 130.81 * t)
        g3 = 0.08 * math.sin(2 * math.pi * 196.00 * t)
        c4 = 0.06 * math.sin(2 * math.pi * 261.63 * t)
        e4 = 0.04 * math.sin(2 * math.pi * 329.63 * t) * (0.8 + 0.2 * math.sin(2 * math.pi * 0.4 * t))
        shimmer = 0.02 * math.sin(2 * math.pi * 523.25 * t)
        val = (c3 + g3 + c4 + e4 + shimmer) * env * 32767
        s = clamp(val)
        frames.extend(struct.pack('<hh', s, s))
    wf.writeframes(frames)

# Real footage compilation with smooth camera transitions and professional broadcast branding
filter_complex = (
    # Image 1 (0 to 3.8s)
    "[0:v]scale=1280:720:force_original_aspect_ratio=increase,crop=1280:720,format=yuva420p,fade=t=out:st=3.2:d=0.6:alpha=1[v0];"
    # Image 2 (3.2 to 7.0s)
    "[1:v]scale=1280:720:force_original_aspect_ratio=increase,crop=1280:720,format=yuva420p,fade=t=in:st=0:d=0.6:alpha=1,fade=t=out:st=3.2:d=0.6:alpha=1[v1];"
    # Image 3 (6.4 to 10.0s)
    "[2:v]scale=1280:720:force_original_aspect_ratio=increase,crop=1280:720,format=yuva420p,fade=t=in:st=0:d=0.6:alpha=1[v2];"
    # Overlays
    "[v0][v1]overlay=enable='between(t,3.2,7.0)'[bg1];"
    "[bg1][v2]overlay=enable='gte(t,6.4)'[bg2];"
    # Contrast and saturation
    "[bg2]eq=contrast=1.04:saturation=1.08,"
    # Top Live Consultation Badge
    "drawbox=x=32:y=28:w=440:h=42:color=0x040814@0.85:t=fill,"
    "drawbox=x=32:y=28:w=4:h=42:color=0x14b8a6@1.0:t=fill,"
    "drawtext=text='ASCEND CAREER • 1-ON-1 ADVISORY SESSION':fontcolor=0x2dd4bf:fontsize=15:x=48:y=35,"
    "drawtext=text='Live Psychometric Debrief & Career Roadmap':fontcolor=0x94a3b8:fontsize=12:x=48:y=52,"
    # Subtitle 1: Mentor (0.5s - 4.2s)
    "drawtext=text='Mentor: \"You have great potential.\"':fontcolor=0xffffff:fontsize=24:x=(w-text_w)/2:y=620:enable='between(t,0.5,4.2)':box=1:boxcolor=0x050914@0.85:boxborderw=10,"
    # Subtitle 2: Student (4.4s - 6.2s)
    "drawtext=text='Student: \"Thank you.\"':fontcolor=0x38bdf8:fontsize=24:x=(w-text_w)/2:y=620:enable='between(t,4.4,6.2)':box=1:boxcolor=0x050914@0.85:boxborderw=10,"
    # Subtitle 3: Mentor (6.4s - 9.5s)
    "drawtext=text='Mentor: \"We will find the way together.\"':fontcolor=0x2dd4bf:fontsize=24:x=(w-text_w)/2:y=620:enable='between(t,6.4,9.5)':box=1:boxcolor=0x050914@0.85:boxborderw=10[vfinal]"
)

cmd = [
    "ffmpeg", "-y",
    "-loop", "1", "-t", "10.0", "-i", "/tmp/video_assets/mentor1.jpg",
    "-loop", "1", "-t", "4.0", "-i", "/tmp/video_assets/mentor2.jpg",
    "-loop", "1", "-t", "4.0", "-i", "/tmp/video_assets/mentor3.jpg",
    "-i", wav_path,
    "-filter_complex", filter_complex,
    "-map", "[vfinal]",
    "-map", "3:a",
    "-c:v", "libx264",
    "-pix_fmt", "yuv420p",
    "-preset", "fast",
    "-crf", "20",
    "-c:a", "aac",
    "-b:a", "160k",
    "-t", "10.0",
    mp4_path
]

print("Executing ffmpeg...")
subprocess.run(cmd, check=True)
if os.path.exists(wav_path):
    os.remove(wav_path)

print(f"Generated {mp4_path}: {os.path.getsize(mp4_path)} bytes")
