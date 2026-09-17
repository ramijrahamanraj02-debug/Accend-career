import subprocess
import os
import urllib.request
import math
import struct
import wave

OUTPUT_DIR = "public/videos"
os.makedirs(OUTPUT_DIR, exist_ok=True)
os.makedirs("/tmp/campus_shots", exist_ok=True)

hero_video_path = os.path.join(OUTPUT_DIR, "ascend-campus-hero.mp4")
hero_poster_path = os.path.join(OUTPUT_DIR, "ascend-campus-hero-poster.jpg")
wav_path = "/tmp/campus_hero_soundtrack.wav"

shots = [
    ("/tmp/campus_shots/shot1.jpg", "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1920&h=1080&q=95"),
    ("/tmp/campus_shots/shot2.jpg", "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1920&h=1080&q=95"),
    ("/tmp/campus_shots/shot3.jpg", "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1920&h=1080&q=95"),
    ("/tmp/campus_shots/shot4.jpg", "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1920&h=1080&q=95"),
    ("/tmp/campus_shots/shot5.jpg", "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1920&h=1080&q=95"),
]

print("Downloading photography shots...")
for path, url in shots:
    if not os.path.exists(path) or os.path.getsize(path) < 10000:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with open(path, 'wb') as f:
            f.write(urllib.request.urlopen(req, timeout=15).read())
        print(f"Downloaded {path} ({os.path.getsize(path)} bytes)")

# Generate Poster image from shot 1 without any burnt text
subprocess.run([
    "ffmpeg", "-y", "-i", "/tmp/campus_shots/shot1.jpg",
    "-vf", "scale=1920:1080,eq=contrast=1.05:saturation=1.12", "-q:v", "2", hero_poster_path
], check=True)

# Generate audio soundtrack
sample_rate = 44100
duration = 12.0
total_samples = int(sample_rate * duration)

def clamp(v, low=-32768, high=32767):
    return max(low, min(high, int(v)))

with wave.open(wav_path, 'w') as wf:
    wf.setnchannels(2)
    wf.setsampwidth(2)
    wf.setframerate(sample_rate)
    frames = bytearray()
    for i in range(total_samples):
        t = i / sample_rate
        if t < 4.0:
            root1, root2 = 146.83, 220.00
        elif t < 8.0:
            root1, root2 = 196.00, 246.94
        else:
            root1, root2 = 220.00, 277.18

        chord = (
            0.08 * math.sin(2 * math.pi * root1 * t) +
            0.06 * math.sin(2 * math.pi * root2 * t) +
            0.04 * math.sin(2 * math.pi * (root1 * 2) * t) * (0.8 + 0.2 * math.sin(2 * math.pi * 0.5 * t)) +
            0.02 * math.sin(2 * math.pi * 587.33 * t)
        )
        breeze = 0.015 * math.sin(2 * math.pi * 85 * t) * (0.5 + 0.5 * math.sin(t * 0.4))
        env = 1.0
        if t < 1.0:
            env = t / 1.0
        elif t > 11.0:
            env = (12.0 - t) / 1.0

        val = (chord + breeze) * env * 32767
        s = clamp(val)
        frames.extend(struct.pack('<hh', s, s))
    wf.writeframes(frames)

# Compose video without burnt-in text
filter_complex = (
    # Shot 1: 0 - 2.8s (Entrance walk)
    "[0:v]scale=2100:1180,zoompan=z='min(zoom+0.0008,1.1)':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':d=90:s=1920x1080:fps=30,fade=t=out:st=2.3:d=0.5:alpha=1[s1];"
    
    # Shot 2: 2.3s - 5.0s (walking with backpack along colonnade)
    "[1:v]scale=2100:1180,zoompan=z='min(zoom+0.0008,1.12)':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':d=90:s=1920x1080:fps=30,fade=t=in:st=0:d=0.5:alpha=1,fade=t=out:st=2.2:d=0.5:alpha=1[s2];"

    # Shot 3: 4.5s - 7.6s (two students talking outdoors)
    "[2:v]scale=2100:1180,zoompan=z='min(zoom+0.0006,1.08)':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':d=100:s=1920x1080:fps=30,fade=t=in:st=0:d=0.5:alpha=1,fade=t=out:st=2.6:d=0.5:alpha=1[s3];"

    # Shot 4: 7.1s - 9.8s (glass entrance)
    "[3:v]scale=2100:1180,zoompan=z='min(zoom+0.0007,1.1)':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':d=90:s=1920x1080:fps=30,fade=t=in:st=0:d=0.5:alpha=1,fade=t=out:st=2.2:d=0.5:alpha=1[s4];"

    # Shot 5: 9.3s - 12.0s (students on lawn)
    "[4:v]scale=2100:1180,zoompan=z='min(zoom+0.0005,1.06)':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':d=90:s=1920x1080:fps=30,fade=t=in:st=0:d=0.5:alpha=1[s5];"

    # Sequence layering with crossfades
    "[s1][s2]overlay=enable='between(t,2.3,5.0)'[bg1];"
    "[bg1][s3]overlay=enable='between(t,4.5,7.6)'[bg2];"
    "[bg2][s4]overlay=enable='between(t,7.1,9.8)'[bg3];"
    "[bg3][s5]overlay=enable='gte(t,9.3)'[bg4];"

    # Clean Cinema color grading: pristine footage, no hardcoded burnt text
    "[bg4]eq=contrast=1.05:saturation=1.12:brightness=0.01[vfinal]"
)

cmd = [
    "ffmpeg", "-y",
    "-loop", "1", "-t", "3.0", "-i", "/tmp/campus_shots/shot1.jpg",
    "-loop", "1", "-t", "3.0", "-i", "/tmp/campus_shots/shot2.jpg",
    "-loop", "1", "-t", "3.5", "-i", "/tmp/campus_shots/shot3.jpg",
    "-loop", "1", "-t", "3.0", "-i", "/tmp/campus_shots/shot4.jpg",
    "-loop", "1", "-t", "3.0", "-i", "/tmp/campus_shots/shot5.jpg",
    "-i", wav_path,
    "-filter_complex", filter_complex,
    "-map", "[vfinal]",
    "-map", "5:a",
    "-c:v", "libx264",
    "-pix_fmt", "yuv420p",
    "-preset", "fast",
    "-crf", "20",
    "-c:a", "aac",
    "-b:a", "160k",
    "-t", "12.0",
    hero_video_path
]

print("Rendering clean campus background video without burnt text...")
subprocess.run(cmd, check=True)
subprocess.run(["cp", hero_video_path, "public/videos/ascend-3d-wall-reveal.mp4"], check=True)
subprocess.run(["cp", hero_poster_path, "public/videos/ascend-3d-wall-poster.jpg"], check=True)
subprocess.run(["mkdir", "-p", "dist/videos"], check=True)
subprocess.run(["cp", "-r", "public/videos/.", "dist/videos/"], check=True)
print("Updated clean campus video in public and dist successfully!")
