
const current = document.getElementById('current');
const remainingTimer = document.getElementById('remainingTimer');
const next = document.getElementById('next');

const rank = document.getElementById('rank');
const rankNext = document.getElementById('rankNext');

const ltm = document.getElementById('ltm');
const remainingTimerLtm = document.getElementById('remainingTimerLtm');
const ltmNext = document.getElementById('ltmNext');

// Use the API and displays the current map and the time remaining until the next map every time the page is loaded.

window.onload = () => {
    console.log(document.getElementById('current'));

    fetch('https://api.mozambiquehe.re/maprotation?auth=1a80230fb76d0a946f0872dc4be8d726&version=2')
        .then(res => res.json())
        .then(data => {

            current.innerText = `Mapa actual: ${data.battle_royale?.current?.map}`

            remainingTimer.innerText = `Tiempo restante: ${data.battle_royale?.current?.remainingTimer}`

            next.innerText = `Siguiente mapa: ${data.battle_royale?.next?.map}`

            rank.innerText = `Mapa actual: ${data.ranked?.current?.map}`

            rankNext.innerText = `Siguiente mapa: ${data.ranked?.next?.map}`

            ltm.innerText = `LTM actual: ${data.ltm?.current?.eventName} ${data.ltm?.current?.map}`

            remainingTimerLtm.innerText = `Tiempo restante: ${data.ltm?.current?.remainingTimer}`

            ltmNext.innerText = `LTM Siguiente: ${data.ltm?.next?.eventName} ${data.ltm?.next?.map}`

            document.getElementById('assetPb').src = data.battle_royale?.current?.asset;

            document.getElementById('assetRk').src = data.ranked?.current?.asset;

            document.getElementById('assetLtm').src = data.ltm?.current?.asset;

        })
        .catch(e => console.error(new Error(e)));
}