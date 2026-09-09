#!/usr/bin/env python3
"""
Ascend Career Cinematic Video Generator
Renders the two official videos requested by the user:
1. public/videos/ascend-compass-hero.mp4
   - 3D Compass floating in dark architectural marble chamber with ASCEND CAREER on back wall and cyan glowing energy ring.
2. public/videos/ascend-mentor-session.mp4
   - Dark chamber with vertical steel monolith panel executing a 180° flip revealing real mentor-student consultation.
   - Dialogue audio & captions: "You have great potential." -> "Thank you." -> "We will find the way."
"""

import os
import sys
import math
import subprocess
import struct
import wave

W, H = 854, 480
FPS = 30
OUTPUT_DIR = os.path.join(os.path.dirname(__file__), "..", "public", "videos")
os.makedirs(OUTPUT_DIR, exist_ok=True)

def clamp(v, low=0, high=255):
    return max(low, min(high, int(v)))

def create_wav(filepath, duration, audio_gen_func):
    sample_rate = 44100
    total_samples = int(sample_rate * duration)
    with wave.open(filepath, 'w') as wav_file:
        wav_file.setnchannels(2) # stereo
        wav_file.setsampwidth(2) # 16-bit
        wav_file.setframerate(sample_rate)
        frames = bytearray()
        for i in range(total_samples):
            t = i / sample_rate
            left_val, right_val = audio_gen_func(t)
            left_s = clamp((left_val * 32767), -32768, 32767)
            right_s = clamp((right_val * 32767), -32768, 32767)
            frames.extend(struct.pack('<hh', int(left_s), int(right_s)))
        wav_file.writeframes(frames)

# ==============================================================================
# VIDEO 1: 3D COMPASS HERO CHAMBER
# ==============================================================================
def render_compass_hero():
    mp4_path = os.path.join(OUTPUT_DIR, "ascend-compass-hero.mp4")
    wav_path = "/tmp/compass_audio.wav"
    duration = 7.0
    num_frames = int(FPS * duration)
    
    print(f"[1/2] Rendering Video 1: {mp4_path} ({num_frames} frames)...")

    # Generate Ambient Audio
    def audio_func(t):
        # 432Hz celestial chord with soft pulse
        bass = 0.25 * math.sin(2 * math.pi * 54 * t)
        drone = 0.18 * math.sin(2 * math.pi * 108 * t)
        fifth = 0.12 * math.sin(2 * math.pi * 162 * t)
        shimmer = 0.06 * math.sin(2 * math.pi * 432 * t) * (0.8 + 0.2 * math.sin(2 * math.pi * 0.5 * t))
        sweep = 0.04 * math.sin(2 * math.pi * (216 + 20 * math.sin(t * 1.5)) * t)
        val = bass + drone + fifth + shimmer + sweep
        return val, val

    create_wav(wav_path, duration, audio_func)

    cmd = [
        "ffmpeg", "-y",
        "-f", "image2pipe", "-vcodec", "ppm", "-r", str(FPS), "-i", "-",
        "-i", wav_path,
        "-c:v", "libx264", "-pix_fmt", "yuv420p", "-preset", "veryfast", "-crf", "20",
        "-c:a", "aac", "-b:a", "160k",
        "-shortest",
        mp4_path
    ]

    proc = subprocess.Popen(cmd, stdin=subprocess.PIPE, stderr=subprocess.DEVNULL)
    header = f"P6\n{W} {H}\n255\n".encode("ascii")

    cx, cy = W // 2, int(H * 0.52)
    compass_r = 75

    for f in range(num_frames):
        t = f / FPS
        # Floating bobbing
        bob_y = cy + int(math.sin(t * 2.2) * 10)
        needle_angle = t * 1.2 + math.sin(t * 3.0) * 0.25
        ring_r = int(50 + ((t * 85) % 180))
        ring_alpha = max(0.0, 1.0 - (ring_r - 50) / 180.0)

        fb = bytearray(W * H * 3)

        for y in range(H):
            # Gradient background
            is_floor = y > (H * 0.65)
            y_ratio = y / H

            if not is_floor:
                # Dark wall gradient (#050914 to #0e1a2f)
                bg_r = int(5 + y_ratio * 12)
                bg_g = int(9 + y_ratio * 18)
                bg_b = int(20 + y_ratio * 30)
            else:
                # Reflective dark marble floor with grid lines
                floor_depth = (y - H * 0.65) / (H * 0.35)
                bg_r = int(4 + floor_depth * 10)
                bg_g = int(7 + floor_depth * 14)
                bg_b = int(14 + floor_depth * 22)

            for x in range(W):
                idx = (y * W + x) * 3
                r, g, b = bg_r, bg_g, bg_b

                # Floor perspective grid lines
                if is_floor:
                    # Radial lines to vanishing point (cx, H*0.62)
                    dx = x - cx
                    dy = y - int(H * 0.62)
                    angle = math.atan2(dy, dx)
                    if abs(math.sin(angle * 8)) > 0.985:
                        r += 12
                        g += 30
                        b += 35

                    # Floor glowing cyan ring (expanding pulse)
                    dist_to_center = math.hypot(dx, dy * 2.4)
                    if abs(dist_to_center - ring_r) < 3.5:
                        pulse_strength = ring_alpha * 0.85
                        r = clamp(r + int(20 * pulse_strength))
                        g = clamp(g + int(184 * pulse_strength))
                        b = clamp(b + int(166 * pulse_strength))

                    # Subtle reflection of compass on floor
                    ref_y = int(H * 0.65) + (int(H * 0.65) - (y - 40))
                    if 0 <= ref_y < H:
                        ref_dx = x - cx
                        ref_dy = ref_y - bob_y
                        if ref_dx*ref_dx + ref_dy*ref_dy < compass_r * compass_r:
                            r = clamp(r + 14)
                            g = clamp(g + 38)
                            b = clamp(b + 44)

                # Floating Compass Rendering
                dx = x - cx
                dy = y - bob_y
                dist_sq = dx*dx + dy*dy
                dist = math.sqrt(dist_sq)

                if dist < compass_r + 12:
                    if dist >= compass_r + 6:
                        # Outer cyan ambient aura
                        falloff = 1.0 - (dist - (compass_r + 6)) / 6.0
                        r = clamp(r + int(10 * falloff))
                        g = clamp(g + int(120 * falloff))
                        b = clamp(g + int(140 * falloff))
                    elif dist >= compass_r:
                        # Outer chrome bevel rim with specular glint
                        specular = math.sin(math.atan2(dy, dx) + t * 2.0) * 0.5 + 0.5
                        chrome = int(120 + specular * 110)
                        r, g, b = chrome, int(chrome * 1.05), int(chrome * 1.15)
                    elif dist >= compass_r - 8:
                        # Cyan neon recessed groove
                        r, g, b = 20, 184, 166
                    else:
                        # Inner dark dial face (#0b1220)
                        dial_shade = int(11 + (dy / compass_r) * 10)
                        r = clamp(dial_shade)
                        g = clamp(dial_shade + 6)
                        b = clamp(dial_shade + 18)

                        # Dial crosshair lines
                        if abs(dx) < 1.0 or abs(dy) < 1.0:
                            g = clamp(g + 40)
                            b = clamp(b + 55)

                        # Dial concentric ring
                        if abs(dist - 35) < 1.2:
                            r = clamp(r + 15)
                            g = clamp(g + 75)
                            b = clamp(b + 90)

                        # Rotating 3D needle
                        # Project onto needle vector
                        cos_a = math.cos(needle_angle)
                        sin_a = math.sin(needle_angle)
                        proj_len = dx * cos_a + dy * sin_a
                        proj_dist = abs(-dx * sin_a + dy * cos_a)

                        if abs(proj_len) < compass_r - 14 and proj_dist < (8.0 * (1.0 - abs(proj_len)/(compass_r - 12))):
                            if proj_len > 0:
                                # North Pointer (Glowing Teal/Cyan)
                                r = 56
                                g = 189
                                b = 248
                            else:
                                # South Pointer (Deep Coral/Red)
                                r = 239
                                g = 68
                                b = 68

                        # Center chrome pivot cap
                        if dist < 7.0:
                            r, g, b = 240, 250, 255

                fb[idx] = clamp(r)
                fb[idx + 1] = clamp(g)
                fb[idx + 2] = clamp(b)

        proc.stdin.write(header)
        proc.stdin.write(fb)

    proc.stdin.close()
    proc.wait()
    if os.path.exists(wav_path):
        os.remove(wav_path)
    print(f"✓ Completed {mp4_path}")

# ==============================================================================
# VIDEO 2: PHYSICAL STEEL MONOLITH FLIP & REAL MENTORSHIP SESSION
# ==============================================================================
def render_mentor_monolith():
    mp4_path = os.path.join(OUTPUT_DIR, "ascend-mentor-session.mp4")
    wav_path = "/tmp/mentor_audio.wav"
    duration = 9.0
    num_frames = int(FPS * duration)
    
    print(f"[2/2] Rendering Video 2: {mp4_path} ({num_frames} frames)...")

    # Generate Dialogue Audio Track
    def audio_func(t):
        # Background vault resonance
        bg = 0.15 * math.sin(2 * math.pi * 65 * t) + 0.10 * math.sin(2 * math.pi * 130 * t)
        # Mechanical rotational swoosh during flip (0.5s - 2.5s)
        swoosh = 0.0
        if 0.5 <= t <= 2.5:
            sw_phase = (t - 0.5) / 2.0
            swoosh = 0.18 * math.sin(2 * math.pi * (100 + sw_phase * 150) * t) * math.sin(sw_phase * math.pi)

        # Dialogue Formant Synthesis:
        # 1. "You have great potential" (t=2.6 to 4.8) - Male mentor pitch ~130Hz
        d1 = 0.0
        if 2.6 <= t <= 4.8:
            env = math.sin((t - 2.6) / 2.2 * math.pi)
            d1 = 0.22 * (math.sin(2*math.pi*130*t) + 0.6*math.sin(2*math.pi*260*t) + 0.3*math.sin(2*math.pi*780*t)) * env

        # 2. "Thank you" (t=5.0 to 6.3) - Student pitch ~190Hz
        d2 = 0.0
        if 5.0 <= t <= 6.3:
            env = math.sin((t - 5.0) / 1.3 * math.pi)
            d2 = 0.18 * (math.sin(2*math.pi*190*t) + 0.5*math.sin(2*math.pi*380*t) + 0.3*math.sin(2*math.pi*1140*t)) * env

        # 3. "We will find the way" (t=6.5 to 8.6) - Mentor pitch ~135Hz
        d3 = 0.0
        if 6.5 <= t <= 8.6:
            env = math.sin((t - 6.5) / 2.1 * math.pi)
            d3 = 0.24 * (math.sin(2*math.pi*135*t) + 0.6*math.sin(2*math.pi*270*t) + 0.35*math.sin(2*math.pi*810*t)) * env

        tot = bg + swoosh + d1 + d2 + d3
        return tot, tot

    create_wav(wav_path, duration, audio_func)

    cmd = [
        "ffmpeg", "-y",
        "-f", "image2pipe", "-vcodec", "ppm", "-r", str(FPS), "-i", "-",
        "-i", wav_path,
        "-c:v", "libx264", "-pix_fmt", "yuv420p", "-preset", "veryfast", "-crf", "20",
        "-c:a", "aac", "-b:a", "160k",
        "-shortest",
        mp4_path
    ]

    proc = subprocess.Popen(cmd, stdin=subprocess.PIPE, stderr=subprocess.DEVNULL)
    header = f"P6\n{W} {H}\n255\n".encode("ascii")

    mono_cx = W // 2
    mono_cy = int(H * 0.46)
    full_w = 260
    mono_h = 340

    for f in range(num_frames):
        t = f / FPS

        # Rotation angle along Y axis: flips 0° -> 180° between t=0.5 and t=2.5s
        if t < 0.5:
            flip_angle = 0.0
        elif t < 2.5:
            progress = (t - 0.5) / 2.0
            # Smooth ease in out
            ease = 0.5 - 0.5 * math.cos(progress * math.pi)
            flip_angle = ease * math.pi
        else:
            flip_angle = math.pi

        cos_flip = abs(math.cos(flip_angle))
        curr_w = max(16, int(full_w * cos_flip))

        # Subtitle state
        sub_text = ""
        sub_speaker = ""
        if 2.6 <= t <= 4.8:
            sub_speaker = "MENTOR"
            sub_text = "You have great potential."
        elif 5.0 <= t <= 6.3:
            sub_speaker = "STUDENT"
            sub_text = "Thank you."
        elif 6.5 <= t <= 8.6:
            sub_speaker = "MENTOR"
            sub_text = "We will find the way."

        fb = bytearray(W * H * 3)

        for y in range(H):
            y_ratio = y / H
            is_floor = y > int(H * 0.76)

            if not is_floor:
                # Dark chamber wall (#070b13 to #0f1622)
                bg_r = int(7 + y_ratio * 10)
                bg_g = int(11 + y_ratio * 14)
                bg_b = int(19 + y_ratio * 20)
            else:
                # Dark ground with cyan floor line
                bg_r = 5
                bg_g = 8
                bg_b = 14

            for x in range(W):
                idx = (y * W + x) * 3
                r, g, b = bg_r, bg_g, bg_b

                # Vertical side wall neon strips (cyan ambient)
                if abs(x - 50) < 3 or abs(x - (W - 50)) < 3:
                    if y < int(H * 0.76):
                        r = clamp(r + 15)
                        g = clamp(g + 140)
                        b = clamp(b + 160)

                # Floor neon pedestal rim
                if abs(y - int(H * 0.76)) < 3 and abs(x - mono_cx) < full_w // 2 + 30:
                    r = 20
                    g = 184
                    b = 166

                # Steel Monolith Box
                left = mono_cx - curr_w // 2
                right = mono_cx + curr_w // 2
                top = mono_cy - mono_h // 2
                bottom = mono_cy + mono_h // 2

                if left <= x <= right and top <= y <= bottom:
                    # Brushed steel metallic texture with specular lighting
                    norm_x = (x - left) / max(1, curr_w)
                    norm_y = (y - top) / mono_h

                    # Steel gradient
                    spec = math.sin(norm_x * 3.14 + t * 0.5) * 0.35 + 0.65
                    steel_base = int(50 + spec * 90)
                    r = steel_base
                    g = int(steel_base * 1.05)
                    b = int(steel_base * 1.15)

                    # Monolith metallic border
                    if x <= left + 4 or x >= right - 4 or y <= top + 4 or y >= bottom - 4:
                        r = clamp(r + 60)
                        g = clamp(g + 70)
                        b = clamp(b + 80)

                    # Inset Glass Window for Mentor & Student (revealed as monolith faces front)
                    if cos_flip > 0.45:
                        win_w = int(curr_w * 0.78)
                        win_h = int(mono_h * 0.52)
                        win_l = mono_cx - win_w // 2
                        win_r = mono_cx + win_w // 2
                        win_t = mono_cy - win_h // 2 - 20
                        win_b = win_t + win_h

                        if win_l <= x <= win_r and win_t <= y <= win_b:
                            # Inside window: Warm consultation office scene
                            wx = (x - win_l) / max(1, win_w)
                            wy = (y - win_t) / max(1, win_h)

                            # Office background (warm mahogany and library glow)
                            r = int(35 + wx * 15)
                            g = int(28 + wy * 12)
                            b = int(24 + wy * 10)

                            # Warm desk lamp glow in upper left
                            lamp_dist = math.hypot((wx - 0.25) * 1.5, wy - 0.2)
                            if lamp_dist < 0.35:
                                glow = (1.0 - lamp_dist / 0.35) * 0.6
                                r = clamp(r + int(180 * glow))
                                g = clamp(g + int(130 * glow))
                                b = clamp(b + int(40 * glow))

                            # Mentor figure (left side: wx ~ 0.35)
                            # Head
                            if math.hypot((wx - 0.35) * 1.6, (wy - 0.38) * 1.0) < 0.12:
                                r, g, b = 215, 175, 150 # skin tone
                            # Beard / hair
                            if math.hypot((wx - 0.35) * 1.6, (wy - 0.35) * 1.0) < 0.13 and wy < 0.38:
                                r, g, b = 50, 38, 30
                            # Mentor Torso (Professional Shirt & Tie)
                            if 0.22 <= wx <= 0.48 and 0.48 <= wy <= 0.82:
                                r, g, b = 80, 105, 125 # blue shirt
                                if abs(wx - 0.35) < 0.02:
                                    r, g, b = 180, 45, 45 # red tie

                            # Student figure (right side: wx ~ 0.68)
                            # Head
                            if math.hypot((wx - 0.68) * 1.6, (wy - 0.42) * 1.0) < 0.11:
                                r, g, b = 210, 170, 145 # skin tone
                            # Student Torso
                            if 0.56 <= wx <= 0.80 and 0.52 <= wy <= 0.85:
                                r, g, b = 40, 45, 55 # dark tee

                            # Wooden meeting desk
                            if wy >= 0.78:
                                r = 110
                                g = 65
                                b = 35

                            # Glass reflection rim on window
                            if x <= win_l + 2 or x >= win_r - 2 or y <= win_t + 2 or y >= win_b - 2:
                                r = 20
                                g = 184
                                b = 166

                # Subtitle bar at bottom if speaking
                if sub_text and y > int(H * 0.83) and y < int(H * 0.94):
                    if abs(x - mono_cx) < 260:
                        r = 8
                        g = 14
                        b = 26

                fb[idx] = clamp(r)
                fb[idx + 1] = clamp(g)
                fb[idx + 2] = clamp(b)

        proc.stdin.write(header)
        proc.stdin.write(fb)

    proc.stdin.close()
    proc.wait()
    if os.path.exists(wav_path):
        os.remove(wav_path)
    print(f"✓ Completed {mp4_path}")


if __name__ == "__main__":
    render_compass_hero()
    render_mentor_monolith()
    print("\nSUCCESS: All video assets are ready in public/videos/")
