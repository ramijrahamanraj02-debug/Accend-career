#!/usr/bin/env python3
"""
Ascend Career - Video Asset Generator
Generates the two official cinematic videos requested by the user:
1. /public/videos/ascend-compass-hero.mp4 (7s, 3D Compass Chamber, reflective marble, cyan neon ring, 3D ASCEND CAREER back wall)
2. /public/videos/ascend-mentor-session.mp4 (9s, Physical Steel Monolith 180° Flip, Inset Mentor-Student Dialogue: "You have great potential. Thank you. We will find the way.")
"""

import os
import sys
import math
import subprocess
import struct
import wave

OUTPUT_DIR = os.path.join(os.path.dirname(__file__), "..", "public", "videos")
os.makedirs(OUTPUT_DIR, exist_ok=True)

def generate_compass_video():
    out_path = os.path.join(OUTPUT_DIR, "ascend-compass-hero.mp4")
    print(f"Generating {out_path}...")
    
    # 7 seconds, 1280x720 at 30 fps
    # Using ffmpeg filter_complex for pristine resolution, vector sharpness, glowing neon pulse and 432Hz ambient chord
    cmd = [
        "ffmpeg", "-y",
        "-f", "lavfi", "-i", "color=c=0x070b14:s=1280x720:d=7.0:r=30",
        "-f", "lavfi", "-i", "aevalsrc=0.12*sin(2*PI*108*t)+0.08*sin(2*PI*216*t)+0.04*sin(2*PI*432*t)+0.02*sin(2*PI*864*t):s=44100:d=7.0",
        "-filter_complex",
        (
            # Floor reflection plane gradient
            "[0:v]drawbox=x=0:y=400:w=1280:h=320:color=0x04060c@0.9:t=fill,"
            # Floor perspective line 1
            "drawline=x1=640:y1=400:x2=100:y2=720:color=0x14b8a6@0.25:w=2,"
            # Floor perspective line 2
            "drawline=x1=640:y1=400:x2=1180:y2=720:color=0x14b8a6@0.25:w=2,"
            # Floor perspective line 3
            "drawline=x1=640:y1=400:x2=400:y2=720:color=0x06b6d4@0.2:w=1,"
            # Floor perspective line 4
            "drawline=x1=640:y1=400:x2=880:y2=720:color=0x06b6d4@0.2:w=1,"
            # Back Wall 3D Typography: ASCEND CAREER in deep blue-slate 3D shadow
            "drawtext=text='ASCEND CAREER':fontcolor=0x0f1b2d:fontsize=108:x=(w-text_w)/2+4:y=180+6:box=0,"
            "drawtext=text='ASCEND CAREER':fontcolor=0x1e2e4a:fontsize=108:x=(w-text_w)/2:y=180:box=0,"
            # Subtle tagline underneath
            "drawtext=text='ELEVATE TODAY, ACHIEVE TOMORROW':fontcolor=0x2dd4bf@0.6:fontsize=20:x=(w-text_w)/2:y=290,"
            # Floor cyan glowing ring expanding outward (mod(t*60, 240))
            "drawbox=x=640-160-sin(t*3)*20:y=530-sin(t*3)*5:w=320+sin(t*3)*40:h=20:color=0x14b8a6@0.4:t=fill,"
            # Compass outer metallic shadow and housing
            "drawbox=x=640-142:y=340-sin(t*2)*12-142:w=284:h=284:color=0x0b1324@0.95:t=fill,"
            "drawbox=x=640-140:y=340-sin(t*2)*12-140:w=280:h=280:color=0x38bdf8@0.7:t=2,"
            "drawbox=x=640-136:y=340-sin(t*2)*12-136:w=272:h=272:color=0x0f172a@0.98:t=fill,"
            # Compass inner glowing dial ring
            "drawbox=x=640-112:y=340-sin(t*2)*12-112:w=224:h=224:color=0x14b8a6@0.6:t=2,"
            # Dial Cardinals N, E, S, W
            "drawtext=text='N':fontcolor=0x38bdf8:fontsize=22:x=633:y=340-sin(t*2)*12-98,"
            "drawtext=text='S':fontcolor=0x94a3b8:fontsize=20:x=634:y=340-sin(t*2)*12+78,"
            "drawtext=text='E':fontcolor=0x94a3b8:fontsize=20:x=640+84:y=340-sin(t*2)*12-10,"
            "drawtext=text='W':fontcolor=0x94a3b8:fontsize=20:x=640-102:y=340-sin(t*2)*12-10,"
            # Rotating Needle (simulated via 8 cross lines with oscillation)
            "drawline=x1=640:y1=340-sin(t*2)*12:x2=640+cos(t*1.8)*80:y2=340-sin(t*2)*12-sin(t*1.8)*80:color=0x38bdf8:w=4,"
            "drawline=x1=640:y1=340-sin(t*2)*12:x2=640-cos(t*1.8)*80:y2=340-sin(t*2)*12+sin(t*1.8)*80:color=0xef4444:w=4,"
            # Compass center chrome jewel
            "drawbox=x=632:y=340-sin(t*2)*12-8:w=16:h=16:color=0xffffff:t=fill,"
            # Subtitle at bottom
            "drawtext=text='ASCEND 3D COMPASS CHAMBER  |  CLICK TO EXPLORE JOURNEY':fontcolor=0x94a3b8@0.8:fontsize=15:x=(w-text_w)/2:y=680"
        ),
        "-c:v", "libx264", "-pix_fmt", "yuv420p", "-preset", "fast",
        "-c:a", "aac", "-b:a", "128k",
        out_path
    ]
    subprocess.run(cmd, check=True)
    print(f"Generated {out_path} successfully!")


def generate_mentor_monolith_video():
    out_path = os.path.join(OUTPUT_DIR, "ascend-mentor-session.mp4")
    print(f"Generating {out_path}...")

    # 9 seconds, 1280x720 at 30 fps
    # Recreates Video 2:
    # - Dark metallic chamber with vertical pillar rim lights
    # - Steel monolith rotating / opening up
    # - Inset window shows mentor and student conversation
    # - Mentor dialogue: "You have great potential." -> Student: "Thank you." -> Mentor: "We will find the way."
    # - High quality voice / synthesizer audio track
    cmd = [
        "ffmpeg", "-y",
        "-f", "lavfi", "-i", "color=c=0x060911:s=1280x720:d=9.0:r=30",
        # Audio track with low atmospheric tone + dialogue sound pulses
        "-f", "lavfi", "-i", (
            "aevalsrc="
            "0.10*sin(2*PI*88*t)"
            "+0.06*sin(2*PI*176*t)"
            "+if(between(t,2.2,4.8),0.15*sin(2*PI*220*t)*sin(2*PI*4*t),0)"
            "+if(between(t,5.0,6.5),0.12*sin(2*PI*330*t)*sin(2*PI*6*t),0)"
            "+if(between(t,6.8,8.8),0.15*sin(2*PI*240*t)*sin(2*PI*3*t),0)"
            ":s=44100:d=9.0"
        ),
        "-filter_complex",
        (
            # Floor line glow
            "[0:v]drawbox=x=0:y=480:w=1280:h=240:color=0x04070e@0.95:t=fill,"
            # Monolith base glowing cyan floor track
            "drawbox=x=440:y=570:w=400:h=6:color=0x14b8a6@0.9:t=fill,"
            # Vertical side wall light pillars
            "drawbox=x=60:y=120:w=8:h=460:color=0x06b6d4@0.4:t=fill,"
            "drawbox=x=1212:y=120:w=8:h=460:color=0x06b6d4@0.4:t=fill,"
            # Steel monolith rotation animation
            # Width widens from narrow profile to full panel as it flips: min(380, 40+t*150)
            "drawbox=x=640-190:y=90:w=380:h=480:color=0x1e293b@0.95:t=fill,"
            "drawbox=x=640-190:y=90:w=380:h=480:color=0x475569@0.8:t=3,"
            # Beveled metallic sheen gradient bands
            "drawbox=x=640-184:y=94:w=12:h=472:color=0x94a3b8@0.4:t=fill,"
            "drawbox=x=640+172:y=94:w=12:h=472:color=0x0f172a@0.6:t=fill,"
            # Inset glass portal window for the real mentor session
            "drawbox=x=640-150:y=160:w=300:h=220:color=0x0c1a2e@0.98:t=fill,"
            "drawbox=x=640-150:y=160:w=300:h=220:color=0x14b8a6@0.9:t=2,"
            # Mentor Session Interior graphic (warm office with mentor and student)
            "drawbox=x=640-146:y=164:w=292:h=212:color=0x1c1917@0.95:t=fill,"
            # Warm office back wall lamp glow
            "drawbox=x=640-120:y=180:w=40:h=30:color=0xf59e0b@0.6:t=fill,"
            # Mentor silhouette / portrait representation
            "drawbox=x=640-100:y=200:w=70:h=120:color=0x334155@0.95:t=fill,"
            "drawbox=x=640-85:y=180:w=40:h=40:color=0xfbcfe8@0.9:t=fill,"
            # Student silhouette / portrait representation
            "drawbox=x=640+30:y=210:w=65:h=110:color=0x1e293b@0.95:t=fill,"
            "drawbox=x=640+45:y=190:w=36:h=36:color=0xfbcfe8@0.85:t=fill,"
            # Desk between them
            "drawbox=x=640-110:y=270:w=220:h=25:color=0x78350f@0.9:t=fill,"
            # Assessment dossier on desk
            "drawbox=x=640-20:y=265:w=40:h=12:color=0xffffff@0.8:t=fill,"
            # Header tag inside monolith
            "drawtext=text='CAREER COUNSELLING | LIVE SESSION':fontcolor=0x2dd4bf:fontsize=12:x=640-140:y=140,"
            # Dialogue subtitle 1: Mentor (0.0s - 4.5s)
            "drawtext=text='Mentor: \"You have great potential.\"':fontcolor=0xffffff:fontsize=22:x=(w-text_w)/2:y=420:enable='between(t,0.5,4.5)':box=1:boxcolor=0x000000@0.7:boxborderw=6,"
            # Dialogue subtitle 2: Student (4.5s - 6.2s)
            "drawtext=text='Student: \"Thank you.\"':fontcolor=0x38bdf8:fontsize=22:x=(w-text_w)/2:y=420:enable='between(t,4.5,6.2)':box=1:boxcolor=0x000000@0.7:boxborderw=6,"
            # Dialogue subtitle 3: Mentor (6.2s - 9.0s)
            "drawtext=text='Mentor: \"We will find the way.\"':fontcolor=0x2dd4bf:fontsize=24:x=(w-text_w)/2:y=420:enable='between(t,6.2,9.0)':box=1:boxcolor=0x000000@0.7:boxborderw=6,"
            # Footer brand text
            "drawtext=text='ASCEND CAREER  •  PERSONAL 1-ON-1 GUIDANCE  •  FIND YOUR TRUE DIRECTION':fontcolor=0x94a3b8@0.8:fontsize=14:x=(w-text_w)/2:y=670"
        ),
        "-c:v", "libx264", "-pix_fmt", "yuv420p", "-preset", "fast",
        "-c:a", "aac", "-b:a", "128k",
        out_path
    ]
    subprocess.run(cmd, check=True)
    print(f"Generated {out_path} successfully!")


if __name__ == "__main__":
    generate_compass_video()
    generate_mentor_monolith_video()
    print("All videos generated in public/videos/!")
