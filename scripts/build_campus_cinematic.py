import subprocess
import os

mp4_path = "public/videos/ascend-campus-life.mp4"
poster_path = "public/videos/ascend-campus-poster.jpg"

filters = [
    "color=c=#e2ded9:s=1280x720:d=10",
    # Campus building & tree canopy (top 200px)
    "drawbox=x=0:y=0:w=1280:h=180:color=#19331e:t=fill",
    "drawbox=x=0:y=180:w=1280:h=30:color=#244d2b:t=fill",
    # Campus Dining Terrace / Red Umbrellas (upper left)
    "drawbox=x=40:y=110:w=120:h=70:color=#b91c1c:t=fill",
    "drawbox=x=190:y=105:w=130:h=75:color=#dc2626:t=fill",
    "drawbox=x=350:y=115:w=120:h=65:color=#b91c1c:t=fill",
    # Right hedge (lush curved dark green)
    "drawbox=x=740:y=210:w=540:h=510:color=#1f4d25:t=fill",
    "drawbox=x=700:y=300:w=100:h=420:color=#286631:t=fill",
    "drawbox=x=660:y=420:w=100:h=300:color=#32803e:t=fill",
    # Left lawn & kerb
    "drawbox=x=0:y=520:w=260:h=200:color=#2f6e37:t=fill",
    "drawbox=x=255:y=520:w=10:h=200:color=#d97706:t=fill",
    # Walkway subtle paving lines
    "drawbox=x=280:y=350:w=420:h=2:color=#cdc9c3:t=fill",
    "drawbox=x=260:y=480:w=440:h=2:color=#cdc9c3:t=fill",
    "drawbox=x=250:y=610:w=460:h=2:color=#cdc9c3:t=fill",
    # Walking Student 1 (walking away: navy shirt, moves up-right)
    "drawbox=x='480+t*12':y='620-t*38':w=22:h=22:color=#d4a373:t=fill",
    "drawbox=x='474+t*12':y='640-t*38':w=34:h=55:color=#1e3a8a:t=fill",
    "drawbox=x='466+t*12':y='644-t*38':w=12:h=40:color=#1f2937:t=fill",
    "drawbox=x='478+t*12':y='695-t*38':w=26:h=55:color=#374151:t=fill",
    # Walking Student 2 (walking away: crimson jacket)
    "drawbox=x='540+t*10':y='600-t*36':w=20:h=20:color=#e0a96d:t=fill",
    "drawbox=x='535+t*10':y='620-t*36':w=30:h=50:color=#991b1b:t=fill",
    "drawbox=x='529+t*10':y='624-t*36':w=10:h=36:color=#d97706:t=fill",
    "drawbox=x='538+t*10':y='670-t*36':w=24:h=50:color=#1e293b:t=fill",
    # Walking Student 3 (walking towards foreground: cream hoodie & backpack)
    "drawbox=x='410-t*14':y='260+t*32':w=18:h=18:color=#c68642:t=fill",
    "drawbox=x='405-t*14':y='278+t*32':w=28:h=45:color=#f1f5f9:t=fill",
    "drawbox=x='400-t*14':y='280+t*32':w=10:h=35:color=#0f766e:t=fill",
    "drawbox=x='408-t*14':y='323+t*32':w=22:h=48:color=#1e1e24:t=fill",
    # Walking Student 4 (teal top, walking towards foreground)
    "drawbox=x='460-t*16':y='240+t*30':w=16:h=16:color=#e0ac69:t=fill",
    "drawbox=x='456-t*16':y='256+t*30':w=24:h=40:color=#0d9488:t=fill",
    "drawbox=x='458-t*16':y='296+t*30':w=20:h=42:color=#334155:t=fill",
    # Headline label
    "drawtext=text='ASCEND GLOBAL CAMPUS':x=50:y=40:fontsize=32:fontcolor=white@0.9:box=1:boxcolor=black@0.4:boxborderw=8"
]

filter_chain = ",".join(filters)
audio_filter = "sine=f=130:d=10,volume=0.03,afade=t=in:ss=0:d=1,afade=t=out:st=9:d=1"

cmd = [
    "ffmpeg", "-y",
    "-f", "lavfi", "-i", filter_chain,
    "-f", "lavfi", "-i", audio_filter,
    "-c:v", "libx264", "-pix_fmt", "yuv420p", "-preset", "fast", "-crf", "20",
    "-c:a", "aac", "-b:a", "128k",
    "-t", "10",
    mp4_path
]

print("Rendering high quality campus cinematic video...")
subprocess.run(cmd, check=True)

# Generate poster frame
subprocess.run([
    "ffmpeg", "-y", "-i", mp4_path, "-ss", "00:00:02", "-vframes", "1", "-q:v", "2", poster_path
], check=True)
print("Campus video and poster generated successfully!")
