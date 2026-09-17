import subprocess
import os
import math
import struct
import wave

OUTPUT_DIR = "public/videos"
os.makedirs(OUTPUT_DIR, exist_ok=True)

video_path = os.path.join(OUTPUT_DIR, "ascend-consultation-journey.mp4")
poster_path = os.path.join(OUTPUT_DIR, "ascend-consultation-journey-poster.jpg")
wav_path = "/tmp/consultation_audio.wav"

# Generate poster from handshake scene
subprocess.run([
    "ffmpeg", "-y", "-i", "/tmp/shot2_handshake.jpg",
    "-vf", "scale=1920:1080,eq=contrast=1.05:saturation=1.12", "-q:v", "2", poster_path
], check=True)

# Generate warm, professional corporate advisory synth / ambient acoustic audio
sample_rate = 44100
duration = 14.0
total_samples = int(sample_rate * duration)

def clamp(v, low=-32768, high=32767):
    return max(low, min(high, int(v)))

print("Synthesizing warm advisory consultation soundtrack...")
with wave.open(wav_path, 'w') as wf:
    wf.setnchannels(2)
    wf.setsampwidth(2)
    wf.setframerate(sample_rate)
    frames = bytearray()
    for i in range(total_samples):
        t = i / sample_rate
        # Warm confident progression: C major -> F major -> G major -> A minor
        if t < 3.5:
            root1, root2 = 130.81, 196.00 # C & G
        elif t < 7.0:
            root1, root2 = 174.61, 220.00 # F & A
        elif t < 10.5:
            root1, root2 = 196.00, 246.94 # G & B
        else:
            root1, root2 = 220.00, 261.63 # A & C

        chord = (
            0.07 * math.sin(2 * math.pi * root1 * t) +
            0.05 * math.sin(2 * math.pi * root2 * t) +
            0.03 * math.sin(2 * math.pi * (root1 * 2) * t) * (0.85 + 0.15 * math.sin(2 * math.pi * 0.3 * t)) +
            0.015 * math.sin(2 * math.pi * 523.25 * t)
        )
        subtle_room = 0.01 * math.sin(2 * math.pi * 90 * t) * (0.5 + 0.5 * math.sin(t * 0.2))
        env = 1.0
        if t < 1.0:
            env = t / 1.0
        elif t > 13.0:
            env = (14.0 - t) / 1.0

        val = (chord + subtle_room) * env * 32767
        s = clamp(val)
        frames.extend(struct.pack('<hh', s, s))
    wf.writeframes(frames)

# Compose the 14-second consultation sequence matching the uploaded video:
# Shot 1: 0 - 2.5s: Walking into Ascend office
# Shot 2: 2.1s - 5.0s: Counselor greeting & handshake across desk with Ascend Career wall
# Shot 3: 4.6s - 7.5s: Student talking about future questions
# Shot 4: 7.1s - 10.0s: Advisor pointing to "Your Career Roadmap" on laptop
# Shot 5: 9.6s - 12.2s: Smiling advisor explaining endless opportunities
# Shot 6: 11.8s - 14.0s: Confident handshake closing the deal

filter_complex = (
    # Shot 1: 0 - 2.5s
    "[0:v]scale=2100:1180,zoompan=z='min(zoom+0.0008,1.1)':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':d=75:s=1920x1080:fps=30,fade=t=out:st=2.0:d=0.5:alpha=1[s1];"
    
    # Shot 2: 2.0s - 5.0s
    "[1:v]scale=2100:1180,zoompan=z='min(zoom+0.0007,1.1)':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':d=90:s=1920x1080:fps=30,fade=t=in:st=0:d=0.5:alpha=1,fade=t=out:st=2.5:d=0.5:alpha=1[s2];"

    # Shot 3: 4.5s - 7.5s
    "[2:v]scale=2100:1180,zoompan=z='min(zoom+0.0006,1.08)':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':d=90:s=1920x1080:fps=30,fade=t=in:st=0:d=0.5:alpha=1,fade=t=out:st=2.5:d=0.5:alpha=1[s3];"

    # Shot 4: 7.0s - 10.0s
    "[3:v]scale=2100:1180,zoompan=z='min(zoom+0.0008,1.1)':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':d=90:s=1920x1080:fps=30,fade=t=in:st=0:d=0.5:alpha=1,fade=t=out:st=2.5:d=0.5:alpha=1[s4];"

    # Shot 5: 9.5s - 12.2s
    "[4:v]scale=2100:1180,zoompan=z='min(zoom+0.0006,1.08)':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':d=81:s=1920x1080:fps=30,fade=t=in:st=0:d=0.5:alpha=1,fade=t=out:st=2.2:d=0.5:alpha=1[s5];"

    # Shot 6: 11.7s - 14.0s
    "[5:v]scale=2100:1180,zoompan=z='min(zoom+0.0007,1.1)':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':d=70:s=1920x1080:fps=30,fade=t=in:st=0:d=0.5:alpha=1[s6];"

    # Sequence layering with crossfades
    "[s1][s2]overlay=enable='between(t,2.0,5.0)'[bg1];"
    "[bg1][s3]overlay=enable='between(t,4.5,7.5)'[bg2];"
    "[bg2][s4]overlay=enable='between(t,7.0,10.0)'[bg3];"
    "[bg3][s5]overlay=enable='between(t,9.5,12.2)'[bg4];"
    "[bg4][s6]overlay=enable='gte(t,11.7)'[bg5];"

    # Clean cinema color grading (rich warm interior tones)
    "[bg5]eq=contrast=1.06:saturation=1.12:brightness=0.01[vfinal]"
)

cmd = [
    "ffmpeg", "-y",
    "-loop", "1", "-t", "2.6", "-i", "/tmp/shot1_entry.jpg",
    "-loop", "1", "-t", "3.2", "-i", "/tmp/shot2_handshake.jpg",
    "-loop", "1", "-t", "3.2", "-i", "/tmp/shot3_student_speaking.jpg",
    "-loop", "1", "-t", "3.2", "-i", "/tmp/shot4_laptop_roadmap.jpg",
    "-loop", "1", "-t", "2.9", "-i", "/tmp/shot5_counselor_explaining.jpg",
    "-loop", "1", "-t", "2.5", "-i", "/tmp/shot6_handshake_close.jpg",
    "-i", wav_path,
    "-filter_complex", filter_complex,
    "-map", "[vfinal]",
    "-map", "6:a",
    "-c:v", "libx264",
    "-pix_fmt", "yuv420p",
    "-preset", "fast",
    "-crf", "20",
    "-c:a", "aac",
    "-b:a", "160k",
    "-t", "14.0",
    video_path
]

print("Rendering consultation journey background video...")
subprocess.run(cmd, check=True)
subprocess.run(["mkdir", "-p", "dist/videos"], check=True)
subprocess.run(["cp", "-r", "public/videos/.", "dist/videos/"], check=True)
print(f"Rendered {video_path} successfully ({os.path.getsize(video_path)} bytes)!")
