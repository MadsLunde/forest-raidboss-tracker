async function SetTime(steamId, mapName) {
    let url = 'https://surfheaven.eu/api/maptrack/' + mapName + '/' + steamId;
    let seconds = 0;
    await fetch(url)
        .then((responseData) => responseData.json())
        .then((data) => seconds = data[0].mapseconds);

    var sec_num = parseInt(seconds, 10)
    var hours = Math.floor(sec_num / 3600)
    var minutes = Math.floor(sec_num / 60) % 60

    timeTag.innerText = 'Time spent: ' + hours + ' hours and ' + minutes + ' minutes'
}

async function SetAttempts(steamId, mapName) {
    let url = 'https://surfheaven.eu/api/zonetrack/' + mapName + '/' + steamId;
    let attempts = 0;
    await fetch(url)
        .then((responseData) => responseData.json())
        .then((data) => attempts = data[0].zonestarts);

    attemptsTag.innerText = 'Attempts: ' + attempts;
}

var timeTag = document.getElementById('time');
var attemptsTag = document.getElementById('attempts');
var headline = document.getElementById('mapName');

headline.innerText = 'Map name: ' + mapName;

function run() {
    try {
        SetTime(steamId, mapName);
        SetAttempts(steamId, mapName);
    } catch (error) {
        console.log(error);
    }

    return;
}
run();
setInterval(run, 1000 * 60);