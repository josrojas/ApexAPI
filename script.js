
const current = document.getElementById('current');
const remainingTimer = document.getElementById('remainingTimer');
const next = document.getElementById('next');

const rank = document.getElementById('rank');
const rankNext = document.getElementById('rankNext');

const ltm = document.getElementById('ltm');
const remainingTimerLtm = document.getElementById('remainingTimerLtm');
const ltmNext = document.getElementById('ltmNext');

const assetPb = document.getElementById('assetPb');
const assetRk = document.getElementById('assetRk');
const assetLtm = document.getElementById('assetLtm');

// Use the API and displays the current map and the time remaining until the next map every time the page is loaded.

window.onload = () => {
    fetch('https://api.mozambiquehe.re/maprotation?auth=1a80230fb76d0a946f0872dc4be8d726&version=2')
        .then(res => res.json())
        .then(data => {

            current.innerText = `Mapa actual: ${JSON.stringify(data.battle_royale?.current?.map)}`

            remainingTimer.innerText = `Tiempo restante: ${JSON.stringify(data.battle_royale?.current?.remainingTimer)}`

            next.innerText = `Siguiente mapa: ${JSON.stringify(data.battle_royale?.next?.map)}`

            rank.innerText = `Mapa actual: ${JSON.stringify(data.ranked?.current?.map)}`

            rankNext.innerText = `Siguiente mapa: ${JSON.stringify(data.ranked?.next?.map)}`

            ltm.innerText = `LTM actual: ${JSON.stringify(data.ltm?.current?.eventName)} ${JSON.stringify(data.ltm?.current?.map)}`

            remainingTimerLtm.innerText = `Tiempo restante: ${JSON.stringify(data.ltm?.current?.remainingTimer)}`

            ltmNext.innerText = `LTM Siguiente: ${JSON.stringify(data.ltm?.next?.eventName)} ${JSON.stringify(data.ltm?.next?.map)}`

            assetPb.innerText = `${JSON.stringify(data.battle_royale?.current?.asset)}`

        })
        .catch(e => console.error(new Error(e)));
}