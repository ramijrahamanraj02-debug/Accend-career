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
wav_path = "/tmp/exact_campus_audio.wav"

FONT_BOLD = "/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf"
FONT_REG = "/usr/share/fonts/truetype/liberation/LiberationSans-Regular.ttf"
FONT_SERIF = "/usr/share/fonts/truetype/liberation/LiberationSerif-BoldItalic.ttf"

# Ensure the 5 source frames exist
shots = [
    ("/tmp/campus_shots/shot1.jpg", "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1920&h=1080&q=95"),
    ("/tmp/campus_shots/shot2.jpg", "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1920&h=1080&q=95"),
    ("/tmp/campus_shots/shot3.jpg", "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1920&h=1080&q=95"),
    ("/tmp/campus_shots/shot4.jpg", "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1920&h=1080&q=95"),
    ("/tmp/campus_shots/shot5.jpg", "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1920&h=1080&q=95"),
]

for path, url in shots:
    if not os.path.exists(path) or os.path.getsize(path) < 10000:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with open(path, 'wb') as f:
            f.write(urllib.request.urlopen(req, timeout=15).read())
        print(f"Downloaded {path}")

# Audio soundtrack
sample_rate = 44100
duration = 10.0
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
        if t < 3.0:
            root1, root2 = 146.83, 220.00
        elif t < 7.0:
            root1, root2 = 196.00, 246.94
        else:
            root1, root2 = 220.00, 277.18

        guitar = (
            0.07 * math.sin(2 * math.pi * root1 * t) +
            0.05 * math.sin(2 * math.pi * root2 * t) +
            0.03 * math.sin(2 * math.pi * (root1 * 2) * t) * (0.8 + 0.2 * math.sin(2 * math.pi * 0.5 * t)) +
            0.015 * math.sin(2 * math.pi * 587.33 * t)
        )
        
        speech_hum = 0.0
        if 3.8 <= t <= 5.5:
            speech_hum = 0.04 * math.sin(2 * math.pi * 235 * t) + 0.02 * math.sin(2 * math.pi * 470 * t)
        elif 5.7 <= t <= 7.5:
            speech_hum = 0.04 * math.sin(2 * math.pi * 135 * t) + 0.02 * math.sin(2 * math.pi * 270 * t)

        ambience = 0.012 * math.sin(2 * math.pi * 80 * t) * (0.5 + 0.5 * math.sin(t * 0.4))
        
        env = 1.0
        if t < 0.5:
            env = t / 0.5
        elif t > 9.2:
            env = (10.0 - t) / 0.8

        val = (guitar + speech_hum + ambience) * env * 32767
        s = clamp(val)
        frames.extend(struct.pack('<hh', s, s))
    wf.writeframes(frames)

# Exactly 10.0 seconds total, matching the user's video:
filter_complex = (
    # Shot 1 (0.0s - 2.2s)
    "[0:v]scale=2100:1180,zoompan=z='min(zoom+0.0006,1.08)':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':d=66:s=1920x1080:fps=30,fade=t=out:st=1.8:d=0.4:alpha=1[s1];"
    
    # Shot 2 (1.8s - 3.7s)
    "[1:v]scale=2100:1180,zoompan=z='min(zoom+0.0008,1.1)':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':d=57:s=1920x1080:fps=30,fade=t=in:st=0:d=0.4:alpha=1,fade=t=out:st=1.5:d=0.4:alpha=1[s2];"

    # Shot 3 (3.3s - 6.7s)
    "[2:v]scale=2100:1180,zoompan=z='min(zoom+0.0005,1.06)':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':d=102:s=1920x1080:fps=30,fade=t=in:st=0:d=0.4:alpha=1,fade=t=out:st=3.0:d=0.4:alpha=1[s3];"

    # Shot 4 (6.3s - 8.2s)
    "[3:v]scale=2100:1180,zoompan=z='min(zoom+0.0006,1.08)':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':d=57:s=1920x1080:fps=30,fade=t=in:st=0:d=0.4:alpha=1,fade=t=out:st=1.5:d=0.4:alpha=1[s4];"

    # Shot 5 (7.8s - 10.0s)
    "[4:v]scale=2100:1180,zoompan=z='min(zoom+0.0004,1.05)':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':d=66:s=1920x1080:fps=30,fade=t=in:st=0:d=0.4:alpha=1[s5];"

    # Sequence layering with crossfades
    "[s1][s2]overlay=enable='between(t,1.8,3.7)'[bg1];"
    "[bg1][s3]overlay=enable='between(t,3.3,6.7)'[bg2];"
    "[bg2][s4]overlay=enable='between(t,6.3,8.2)'[bg3];"
    "[bg3][s5]overlay=enable='gte(t,7.8)'[bg4];"

    # Color grading
    "[bg4]eq=contrast=1.06:saturation=1.14:brightness=0.01,"

    # ─────────────────────────────────────────────────────────────
    # EXACT ON-SCREEN TYPOGRAPHY FROM USER VIDEO
    # ─────────────────────────────────────────────────────────────
    # 00:00 - 00:02:
    f"drawtext=fontfile='{FONT_BOLD}':text='KNOWLEDGE CREATES':fontcolor=0x222222:fontsize=32:x=110:y=680:enable='between(t,0,1.9)',"
    f"drawtext=fontfile='{FONT_BOLD}':text='BETTER TOMORROWS':fontcolor=0x222222:fontsize=32:x=110:y=725:enable='between(t,0,1.9)',"
    f"drawtext=fontfile='{FONT_BOLD}':text='LEARN':fontcolor=0x333333:fontsize=28:x=1520:y=240:enable='between(t,0,1.9)',"
    f"drawtext=fontfile='{FONT_BOLD}':text='GROW':fontcolor=0x333333:fontsize=28:x=1520:y=275:enable='between(t,0,1.9)',"
    f"drawtext=fontfile='{FONT_BOLD}':text='BELONG':fontcolor=0x333333:fontsize=28:x=1520:y=310:enable='between(t,0,1.9)',"
    f"drawtext=fontfile='{FONT_BOLD}':text='LEARN GROW BELONG':fontcolor=0x222222:fontsize=26:x=1440:y=685:enable='between(t,0,1.9)',"
    f"drawtext=fontfile='{FONT_BOLD}':text='CREATE A BRIGHTER TOMORROW':fontcolor=0x222222:fontsize=26:x=1440:y=725:enable='between(t,0,1.9)',"

    # 00:03 - 00:06: Student dialogue subtitles
    f"drawtext=fontfile='{FONT_REG}':text='I think this campus has so much to offer.':fontcolor=white:fontsize=34:x=(w-text_w)/2:y=h-140:enable='between(t,3.5,5.1)':box=1:boxcolor=0x000000@0.75:boxborderw=10,"
    f"drawtext=fontfile='{FONT_REG}':text='Definitely, it is a great place to learn.':fontcolor=white:fontsize=34:x=(w-text_w)/2:y=h-140:enable='between(t,5.2,6.6)':box=1:boxcolor=0x000000@0.75:boxborderw=10,"

    # 00:06 - 00:08: Glass building text
    f"drawtext=fontfile='{FONT_BOLD}':text='IDEAS':fontcolor=0x222222:fontsize=34:x=90:y=250:enable='between(t,6.4,8.1)',"
    f"drawtext=fontfile='{FONT_BOLD}':text='PEOPLE':fontcolor=0x222222:fontsize=34:x=90:y=295:enable='between(t,6.4,8.1)',"
    f"drawtext=fontfile='{FONT_BOLD}':text='OPPORTUNITIES':fontcolor=0x222222:fontsize=34:x=90:y=340:enable='between(t,6.4,8.1)',"
    f"drawtext=fontfile='{FONT_BOLD}':text='CAREERS':fontcolor=0x222222:fontsize=34:x=90:y=385:enable='between(t,6.4,8.1)',"
    f"drawtext=fontfile='{FONT_BOLD}':text='DISCOVER':fontcolor=0x222222:fontsize=32:x=1560:y=260:enable='between(t,6.4,8.1)',"
    f"drawtext=fontfile='{FONT_BOLD}':text='YOUR':fontcolor=0x222222:fontsize=32:x=1560:y=305:enable='between(t,6.4,8.1)',"
    f"drawtext=fontfile='{FONT_BOLD}':text='POTENTIAL':fontcolor=0x222222:fontsize=32:x=1560:y=350:enable='between(t,6.4,8.1)',"

    # 00:08 - 00:10: Closing Campus Lawn scene (exact replica of 00:09 frame)
    f"drawtext=fontfile='{FONT_BOLD}':text='A BRIGHTER TOMORROW TOGETHER':fontcolor=0x222222:fontsize=28:x=(w-text_w)/2:y=120:enable='between(t,7.9,10.0)',"
    f"drawtext=fontfile='{FONT_SERIF}':text='Your next chapter starts here.':fontcolor=white:fontsize=76:x=(w-text_w)/2:y=h-260:enable='between(t,8.0,10.0):shadowcolor=black@0.85:shadowx=2:shadowy=3',"
    f"drawtext=fontfile='{FONT_BOLD}':text='GUIDE  •  TRAIN  •  PLACE  •  GROW  •  GO GLOBAL':fontcolor=white:fontsize=24:x=(w-text_w)/2:y=h-180:enable='between(t,8.1,10.0):shadowcolor=black@0.85:shadowx=1:shadowy=2',"
    f"drawtext=fontfile='{FONT_BOLD}':text='PEOPLE   |   OPPORTUNITIES   |   A BRIGHTER TOMORROW':fontcolor=white:fontsize=20:x=(w-text_w)/2:y=h-130:enable='between(t,8.1,10.0):shadowcolor=black@0.85:shadowx=1:shadowy=2'[vfinal]"
)

cmd = [
    "ffmpeg", "-y",
    "-loop", "1", "-t", "2.5", "-i", "/tmp/campus_shots/shot1.jpg",
    "-loop", "1", "-t", "2.0", "-i", "/tmp/campus_shots/shot2.jpg",
    "-loop", "1", "-t", "3.6", "-i", "/tmp/campus_shots/shot3.jpg",
    "-loop", "1", "-t", "2.0", "-i", "/tmp/campus_shots/shot4.jpg",
    "-loop", "1", "-t", "2.5", "-i", "/tmp/campus_shots/shot5.jpg",
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
    "-t", "10.0",
    hero_video_path
]

print("Rendering exact replica of user campus video...")
subprocess.run(cmd, check=True)

# Generate poster from frame 1
subprocess.run([
    "ffmpeg", "-y", "-i", hero_video_path,
    "-ss", "00:00:00.5", "-vframes", "1", "-q:v", "2", hero_poster_path
], check=True)

subprocess.run(["cp", hero_video_path, "public/videos/ascend-3d-wall-reveal.mp4"], check=True)
subprocess.run(["cp", hero_poster_path, "public/videos/ascend-3d-wall-poster.jpg"], check=True)
subprocess.run(["mkdir", "-p", "dist/videos"], check=True)
subprocess.run(["cp", "-r", "public/videos/.", "dist/videos/"], check=True)
print(f"Rendered {hero_video_path} successfully ({os.path.getsize(hero_video_path)} bytes)!")
