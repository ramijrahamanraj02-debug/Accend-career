import subprocess
import os
import math
import struct
import wave
import urllib.request

OUTPUT_DIR = "public/videos"
os.makedirs(OUTPUT_DIR, exist_ok=True)
os.makedirs("/tmp/campus_shots", exist_ok=True)

hero_video_path = os.path.join(OUTPUT_DIR, "ascend-campus-hero.mp4")
hero_poster_path = os.path.join(OUTPUT_DIR, "ascend-campus-hero-poster.jpg")
wav_path = "/tmp/campus_hero_soundtrack.wav"

# High-quality cinematic campus and student shots mirroring the user video:
# Shot 1: Grand modern university campus entrance with students walking in
# Shot 2: Student walking along campus colonnade with backpack
# Shot 3: Two diverse university students smiling and discussing coursebooks outdoors
# Shot 4: Modern glass university building entrance with students walking in
# Shot 5: University students seated on the sunlit green campus lawn in study groups

shots = [
    ("/tmp/campus_shots/shot1.jpg", "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1920&h=1080&q=90"),
    ("/tmp/campus_shots/shot2.jpg", "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1920&h=1080&q=90"),
    ("/tmp/campus_shots/shot3.jpg", "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1920&h=1080&q=90"),
    ("/tmp/campus_shots/shot4.jpg", "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1920&h=1080&q=90"),
    ("/tmp/campus_shots/shot5.jpg", "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1920&h=1080&q=90"),
]

print("Fetching high resolution campus cinematic photography...")
for path, url in shots:
    if not os.path.exists(path) or os.path.getsize(path) < 10000:
        try:
            req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
            with open(path, 'wb') as f:
                f.write(urllib.request.urlopen(req, timeout=15).read())
            print(f"Downloaded {path} ({os.path.getsize(path)} bytes)")
        except Exception as e:
            print(f"Error downloading {url}: {e}")

# If any shot failed, create a rich fallback image via ImageMagick/ffmpeg
for idx, (path, _) in enumerate(shots):
    if not os.path.exists(path) or os.path.getsize(path) < 1000:
        print(f"Generating fallback frame for shot {idx+1}")
        subprocess.run([
            "ffmpeg", "-y",
            "-f", "lavfi", "-i", f"color=c=0x152238:s=1920x1080:d=1",
            "-vframes", "1", path
        ], check=True)

# Generate Poster image from the grand campus entrance (shot 1)
subprocess.run([
    "ffmpeg", "-y", "-i", "/tmp/campus_shots/shot1.jpg",
    "-vf", "scale=1920:1080,eq=contrast=1.05:saturation=1.12", "-q:v", "2", hero_poster_path
], check=True)
print(f"Generated poster: {hero_poster_path}")

# Audio generation: Inspiring, high-fidelity acoustic & dialogue tone
# "I think this campus has so much to offer. Definitely, it's a great place to learn."
# Gentle acoustic piano warmth + uplifting ambient strings + peaceful campus atmosphere
sample_rate = 44100
duration = 12.0
total_samples = int(sample_rate * duration)

def clamp(v, low=-32768, high=32767):
    return max(low, min(high, int(v)))

print("Synthesizing warm university campus acoustic ambient soundtrack...")
with wave.open(wav_path, 'w') as wf:
    wf.setnchannels(2)
    wf.setsampwidth(2)
    wf.setframerate(sample_rate)
    frames = bytearray()
    for i in range(total_samples):
        t = i / sample_rate
        # Acoustic piano / guitar harmonics (D major -> G major -> A major progression)
        if t < 4.0:
            root1, root2 = 146.83, 220.00 # D & A
        elif t < 8.0:
            root1, root2 = 196.00, 246.94 # G & B
        else:
            root1, root2 = 220.00, 277.18 # A & C#

        chord = (
            0.08 * math.sin(2 * math.pi * root1 * t) +
            0.06 * math.sin(2 * math.pi * root2 * t) +
            0.04 * math.sin(2 * math.pi * (root1 * 2) * t) * (0.8 + 0.2 * math.sin(2 * math.pi * 0.5 * t)) +
            0.02 * math.sin(2 * math.pi * 587.33 * t) # High D sheen
        )
        
        # Soft campus breeze & presence
        breeze = 0.015 * math.sin(2 * math.pi * 85 * t) * (0.5 + 0.5 * math.sin(t * 0.4))
        
        # Gentle fade in & out envelope
        env = 1.0
        if t < 1.0:
            env = t / 1.0
        elif t > 11.0:
            env = (12.0 - t) / 1.0

        val = (chord + breeze) * env * 32767
        s = clamp(val)
        frames.extend(struct.pack('<hh', s, s))
    wf.writeframes(frames)

# Compose the 12-second cinematic campus video with smooth Ken-Burns zooms, cinematic crossfades,
# and faithful typographic overlay badges from the user video:
# Shot 1 (0.0s - 2.8s): Campus entrance - "KNOWLEDGE CREATES BETTER TOMORROWS"
# Shot 2 (2.4s - 5.0s): Student walkway - "LEARN • GROW • BELONG"
# Shot 3 (4.6s - 7.6s): Student dialogue - "I think this campus has so much to offer. Definitely, it's a great place to learn."
# Shot 4 (7.2s - 9.8s): Glass innovation building - "IDEAS • PEOPLE • OPPORTUNITIES • CAREERS"
# Shot 5 (9.4s - 12.0s): Lawn study group - "Your next chapter starts here. GUIDE • TRAIN • PLACE • GROW • GO GLOBAL"

filter_complex = (
    # Shot 1: 0 - 2.8s (slow gentle zoom-in)
    "[0:v]scale=2100:1180,zoompan=z='min(zoom+0.0008,1.1)':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':d=90:s=1920x1080:fps=30,fade=t=out:st=2.3:d=0.5:alpha=1[s1];"
    
    # Shot 2: 2.3s - 5.0s (walking with backpack)
    "[1:v]scale=2100:1180,zoompan=z='min(zoom+0.0008,1.12)':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':d=90:s=1920x1080:fps=30,fade=t=in:st=0:d=0.5:alpha=1,fade=t=out:st=2.2:d=0.5:alpha=1[s2];"

    # Shot 3: 4.5s - 7.6s (two students smiling outdoors)
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

    # Cinema color grading: warm highlights, rich contrast, teal & navy atmospheric accents
    "[bg4]eq=contrast=1.06:saturation=1.14:brightness=0.01,"

    # Top Architectural Campus Pillar Text 1 (0.0s - 2.6s)
    "drawtext=text='KNOWLEDGE CREATES BETTER TOMORROWS':fontcolor=white@0.95:fontsize=22:x=60:y=80:enable='between(t,0.2,2.5)':box=1:boxcolor=0x0a1424@0.65:boxborderw=8,"
    "drawtext=text='LEARN • GROW • BELONG':fontcolor=0x2dd4bf@0.95:fontsize=22:x=w-text_w-60:y=80:enable='between(t,0.2,2.5)':box=1:boxcolor=0x0a1424@0.65:boxborderw=8,"

    # Middle Dialogue Subtitles (4.6s - 7.5s - exact dialogue from user video)
    "drawtext=text='\"I think this campus has so much to offer.\"':fontcolor=white:fontsize=28:x=(w-text_w)/2:y=h-140:enable='between(t,4.8,6.1)':box=1:boxcolor=0x050d1a@0.85:boxborderw=10,"
    "drawtext=text='\"Definitely, it is a great place to learn.\"':fontcolor=0x5eead4:fontsize=28:x=(w-text_w)/2:y=h-140:enable='between(t,6.2,7.5)':box=1:boxcolor=0x050d1a@0.85:boxborderw=10,"

    # Shot 4 Pillar text (7.3s - 9.5s)
    "drawtext=text='IDEAS  •  PEOPLE  •  OPPORTUNITIES  •  CAREERS':fontcolor=white@0.95:fontsize=22:x=60:y=80:enable='between(t,7.3,9.4)':box=1:boxcolor=0x0a1424@0.65:boxborderw=8,"
    "drawtext=text='DISCOVER YOUR POTENTIAL':fontcolor=0x2dd4bf@0.95:fontsize=22:x=w-text_w-60:y=80:enable='between(t,7.3,9.4)':box=1:boxcolor=0x0a1424@0.65:boxborderw=8,"

    # Closing Brand Seal (9.5s - 12.0s - matching the exact frame at 00:09)
    "drawtext=text='A BRIGHTER TOMORROW TOGETHER':fontcolor=white@0.95:fontsize=24:x=(w-text_w)/2:y=70:enable='between(t,9.5,12.0)':box=1:boxcolor=0x0a1424@0.65:boxborderw=8,"
    "drawtext=text='PEOPLE  |  OPPORTUNITIES  |  A BRIGHTER TOMORROW':fontcolor=0x2dd4bf@0.95:fontsize=18:x=(w-text_w)/2:y=h-90:enable='between(t,9.8,12.0)':box=1:boxcolor=0x0a1424@0.75:boxborderw=8[vfinal]"
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

print("Rendering high definition campus cinematic video...")
subprocess.run(cmd, check=True)
print(f"Rendered {hero_video_path}: {os.path.getsize(hero_video_path)} bytes!")

# Duplicate into ascend-3d-wall-reveal.mp4 as well so both sources in video tags play this video
subprocess.run(["cp", hero_video_path, "public/videos/ascend-3d-wall-reveal.mp4"], check=True)
subprocess.run(["cp", hero_poster_path, "public/videos/ascend-3d-wall-poster.jpg"], check=True)
print("Updated public/videos/ascend-3d-wall-reveal.mp4 with the new campus hero video!")
