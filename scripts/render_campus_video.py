#!/usr/bin/env python3
import os
import math
import subprocess
import struct
import wave

W, H = 854, 480
FPS = 30
DURATION = 10.0
NUM_FRAMES = int(FPS * DURATION)
OUTPUT_DIR = os.path.join(os.path.dirname(__file__), "..", "public", "videos")
os.makedirs(OUTPUT_DIR, exist_ok=True)
mp4_path = os.path.join(OUTPUT_DIR, "ascend-campus-life.mp4")
poster_path = os.path.join(OUTPUT_DIR, "ascend-campus-poster.jpg")
wav_path = "/tmp/campus_audio.wav"

def clamp(v, low=0, high=255):
    return max(low, min(high, int(v)))

# Generate gentle campus ambient audio (soft wind, distant bird, warm harmonic chime)
sample_rate = 44100
total_samples = int(sample_rate * DURATION)
with wave.open(wav_path, 'w') as wav_file:
    wav_file.setnchannels(2)
    wav_file.setsampwidth(2)
    wav_file.setframerate(sample_rate)
    frames = bytearray()
    for i in range(total_samples):
        t = i / sample_rate
        # ambient wind / acoustic warmth
        s1 = 0.08 * math.sin(2 * math.pi * 110 * t)
        s2 = 0.04 * math.sin(2 * math.pi * 220 * t)
        s3 = 0.02 * math.sin(2 * math.pi * 440 * (1 + 0.05 * math.sin(t * 0.8)) * t)
        v = s1 + s2 + s3
        sv = clamp(v * 32767, -32768, 32767)
        frames.extend(struct.pack('<hh', int(sv), int(sv)))
    wav_file.writeframes(frames)

cmd = [
    "ffmpeg", "-y",
    "-f", "image2pipe", "-vcodec", "ppm", "-r", str(FPS), "-i", "-",
    "-i", wav_path,
    "-c:v", "libx264", "-pix_fmt", "yuv420p", "-preset", "veryfast", "-crf", "20",
    "-c:a", "aac", "-b:a", "128k",
    "-shortest",
    mp4_path
]

proc = subprocess.Popen(cmd, stdin=subprocess.PIPE, stderr=subprocess.DEVNULL)
header = f"P6\n{W} {H}\n255\n".encode("ascii")

# Student definitions (speed, path, color)
students = [
    {"start_x": 0.46, "start_y": 0.88, "vx": -0.015, "vy": -0.045, "shirt": (45, 80, 140), "pants": (30, 30, 40), "backpack": (20, 20, 25), "scale": 1.2},
    {"start_x": 0.52, "start_y": 0.84, "vx": -0.012, "vy": -0.042, "shirt": (180, 50, 60), "pants": (40, 45, 55), "backpack": (50, 40, 30), "scale": 1.15},
    {"start_x": 0.28, "start_y": 0.95, "vx": 0.018, "vy": -0.05, "shirt": (240, 240, 245), "pants": (25, 30, 40), "backpack": (180, 40, 40), "scale": 1.3},
    {"start_x": 0.35, "start_y": 0.92, "vx": 0.016, "vy": -0.048, "shirt": (20, 110, 110), "pants": (20, 20, 25), "backpack": (20, 20, 20), "scale": 1.25},
    {"start_x": 0.48, "start_y": 0.45, "vx": -0.02, "vy": 0.035, "shirt": (220, 160, 40), "pants": (35, 40, 50), "backpack": (30, 30, 35), "scale": 0.75},
    {"start_x": 0.55, "start_y": 0.42, "vx": -0.018, "vy": 0.038, "shirt": (230, 230, 230), "pants": (40, 40, 45), "backpack": (40, 80, 120), "scale": 0.72},
    {"start_x": 0.40, "start_y": 0.35, "vx": 0.025, "vy": 0.03, "shirt": (140, 30, 60), "pants": (20, 20, 20), "backpack": (20, 20, 20), "scale": 0.6},
    {"start_x": 0.65, "start_y": 0.38, "vx": -0.03, "vy": 0.01, "shirt": (80, 120, 160), "pants": (45, 45, 45), "backpack": (10, 10, 10), "scale": 0.65},
    {"start_x": 0.58, "start_y": 0.32, "vx": -0.022, "vy": 0.015, "shirt": (190, 40, 40), "pants": (30, 35, 45), "backpack": (20, 20, 20), "scale": 0.55},
]

print(f"Rendering {NUM_FRAMES} frames of Campus Life Video...")

for f in range(NUM_FRAMES):
    t = f / FPS
    fb = bytearray(W * H * 3)

    for y in range(H):
        y_norm = y / H
        for x in range(W):
            x_norm = x / W
            idx = (y * W + x) * 3

            # --- 1. Background Landscape Layout ---
            # Top area: Trees & Campus Dining Terrace (y_norm < 0.32)
            if y_norm < 0.28:
                # Lush dark green trees and foliage canopy
                tree_tex = math.sin(x * 0.08) * math.cos(y * 0.1) * 20
                r = clamp(40 + tree_tex * 0.4)
                g = clamp(75 + tree_tex)
                b = clamp(45 + tree_tex * 0.5)

                # Red cafe umbrellas (Domino's terrace) in upper-left
                if 0.02 < x_norm < 0.15 and 0.18 < y_norm < 0.26:
                    r, g, b = 210, 35, 30
                elif 0.28 < x_norm < 0.44 and 0.16 < y_norm < 0.25:
                    r, g, b = 215, 40, 35
                elif 0.16 < x_norm < 0.26 and 0.17 < y_norm < 0.26:
                    # Outdoor tables / gray terrace
                    r, g, b = 130, 135, 140
            
            # Middle-to-Bottom: Concrete Walkway and Green Borders
            else:
                # Walkway curves from top-center (x ~ 0.45) widening to bottom-left (x ~ 0.1 to 0.55)
                walkway_center = 0.45 - (y_norm - 0.28) * 0.35
                walkway_width = 0.18 + (y_norm - 0.28) * 0.32

                is_walkway = abs(x_norm - walkway_center) < (walkway_width * 0.5)
                # Right side hedge (lush green curved bushes)
                is_right_hedge = (x_norm > walkway_center + walkway_width * 0.42) and (y_norm > 0.42)
                # Left side border
                is_left_hedge = (x_norm < walkway_center - walkway_width * 0.45) and (y_norm > 0.65)

                if is_right_hedge:
                    # Vivid lush manicured green bush
                    bush_noise = math.sin(x * 0.12) * math.sin(y * 0.15) * 25
                    r = clamp(55 + bush_noise * 0.5)
                    g = clamp(135 + bush_noise)
                    b = clamp(40 + bush_noise * 0.4)
                elif is_left_hedge:
                    # Left border / striped kerb
                    kerb_pattern = int(y * 0.1) % 2
                    if kerb_pattern == 0:
                        r, g, b = 240, 200, 30 # yellow kerb
                    else:
                        r, g, b = 30, 35, 40 # black kerb
                elif is_walkway:
                    # Concrete walkway (clean light grey with subtle texture)
                    walk_noise = (math.sin(x * 0.2) + math.cos(y * 0.2)) * 6
                    r = clamp(205 + walk_noise)
                    g = clamp(208 + walk_noise)
                    b = clamp(205 + walk_noise)
                else:
                    # Grass / lawn area
                    lawn_noise = math.sin(x * 0.1) * 15
                    r = clamp(65 + lawn_noise * 0.6)
                    g = clamp(125 + lawn_noise)
                    b = clamp(50 + lawn_noise * 0.5)

            fb[idx] = r
            fb[idx+1] = g
            fb[idx+2] = b

    # --- 2. Render Walking Students ---
    for s in students:
        # compute position with wrap-around
        sx = int(((s["start_x"] + s["vx"] * t) % 1.0) * W)
        sy = int(((s["start_y"] + s["vy"] * t) % 1.0) * H)
        scale = s["scale"]
        head_r = int(7 * scale)
        body_w = int(14 * scale)
        body_h = int(32 * scale)

        # Draw student shadow
        shadow_w = int(18 * scale)
        shadow_h = int(6 * scale)
        for dy in range(-shadow_h, shadow_h):
            for dx in range(-shadow_w, shadow_w):
                if (dx*dx)/(shadow_w*shadow_w) + (dy*dy)/(shadow_h*shadow_h) <= 1.0:
                    px, py = sx + dx + 4, sy + body_h + dy + 2
                    if 0 <= px < W and 0 <= py < H:
                        pidx = (py * W + px) * 3
                        fb[pidx] = int(fb[pidx] * 0.65)
                        fb[pidx+1] = int(fb[pidx+1] * 0.65)
                        fb[pidx+2] = int(fb[pidx+2] * 0.65)

        # Draw torso (shirt)
        for dy in range(0, body_h):
            for dx in range(-body_w // 2, body_w // 2):
                px, py = sx + dx, sy + dy
                if 0 <= px < W and 0 <= py < H:
                    pidx = (py * W + px) * 3
                    if dy < body_h * 0.55:
                        # Shirt
                        fb[pidx], fb[pidx+1], fb[pidx+2] = s["shirt"]
                    else:
                        # Pants
                        fb[pidx], fb[pidx+1], fb[pidx+2] = s["pants"]

        # Draw backpack
        for dy in range(4, int(body_h * 0.45)):
            for dx in range(-body_w // 2 - 4, -body_w // 2):
                px, py = sx + dx, sy + dy
                if 0 <= px < W and 0 <= py < H:
                    pidx = (py * W + px) * 3
                    fb[pidx], fb[pidx+1], fb[pidx+2] = s["backpack"]

        # Draw head
        for dy in range(-head_r * 2, 0):
            for dx in range(-head_r, head_r):
                if (dx*dx) + (dy + head_r)*(dy + head_r) <= head_r*head_r:
                    px, py = sx + dx, sy + dy
                    if 0 <= px < W and 0 <= py < H:
                        pidx = (py * W + px) * 3
                        if dy < -head_r * 1.2:
                            fb[pidx], fb[pidx+1], fb[pidx+2] = (30, 25, 20) # hair
                        else:
                            fb[pidx], fb[pidx+1], fb[pidx+2] = (220, 180, 150) # skin

    proc.stdin.write(header)
    proc.stdin.write(fb)

proc.stdin.close()
proc.wait()
print(f"Generated {mp4_path} successfully!")

# Extract poster frame
subprocess.run([
    "ffmpeg", "-y", "-i", mp4_path, "-ss", "00:00:01", "-vframes", "1", "-q:v", "2", poster_path
], check=True)
print(f"Generated poster {poster_path} successfully!")
