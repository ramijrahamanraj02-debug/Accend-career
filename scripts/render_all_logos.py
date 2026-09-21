import subprocess
import os

files_to_render = [
    ("public/images/ascend-logo.svg", "public/images/ascend-logo.png", 1000),
    ("public/images/ascend-logo.svg", "public/images/logo1.png", 1000),
    ("public/images/ascend-logo.svg", "public/images/gemini-logo.png", 1000),
    ("public/images/ascend-logo-full.svg", "public/images/ascend-logo-full.png", 1200),
    ("public/images/ascend-logo-full.svg", "public/images/gemini-logo-full.png", 1200),
]

for src, dest, width in files_to_render:
    cmd = [
        "ffmpeg", "-y",
        "-i", src,
        "-vf", f"scale={width}:-1",
        dest
    ]
    subprocess.run(cmd, check=True)
    print(f"Generated {dest} ({os.path.getsize(dest)} bytes)")

# Ensure dist has them as well
if os.path.exists("dist/images"):
    subprocess.run(["cp", "-r", "public/images/.", "dist/images/"], check=True)
    print("Synchronized with dist/images/")

