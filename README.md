# Welcome to F0rest Raidboss Tracker 9000
This simple webpage will continuously update some simple text fields, once every minute, with info about the CS:GO surf map and SteamId that has been provided.

# How To Use
## Download
- Click the green `Code` button
- Select `Download ZIP`
- Extract the files to your desired location

## Configure surf map and steam-user
- Open the `params.js` file in your prefered text-editor
- Set the `mapName` that you want to track
- Set the `steamId` that you want to track (This is your steamid3)
- Save and exit
## Set up in OBS
- Add browser source
- Tick `Local file`
- Browse to the directory where you saved the files
- Select `index.html`
- Tick `Shutdown source when not visible`
- Tick `Refresh browser when scene becomes active`

## SurfHeaven doesn't update instantly
Just be aware that SurfHeaven doesn't update the data instantly. In my testing it sometimes took 30 minutes, before the map appeared for the first time. But in most cases f0rest will use more than 30 minutes on a map, before it gets promoted to Raidboss status, so I think this is no problem.
