import { APEX_API_KEY } from './config.js';

const current = document.getElementById('current');
const remainingTimer = document.getElementById('remainingTimer');
const next = document.getElementById('next');

const rank = document.getElementById('rank');
const remainingTimerRk = document.getElementById('remainingTimerRk');
const rankNext = document.getElementById('rankNext');

const ltm = document.getElementById('ltm');
const remainingTimerLtm = document.getElementById('remainingTimerLtm');
const ltmNext = document.getElementById('ltmNext');

// Use the API and displays the current map and the time remaining until the next map every time the page is loaded.

window.onload = () => {
 
    fetch(`https://api.mozambiquehe.re/maprotation?auth=${APEX_API_KEY}&version=2`)
        .then(res => res.json())
        .then(data => {

            current.innerText = `Mapa actual: ${data.battle_royale?.current?.map}`

            remainingTimer.innerText = `Tiempo restante: ${data.battle_royale?.current?.remainingTimer}`

            next.innerText = `Siguiente mapa: ${data.battle_royale?.next?.map}`

            rank.innerText = `Mapa actual: ${data.ranked?.current?.map}`

            remainingTimerRk.innerText = `Tiempo restante: ${data.ranked?.current?.remainingTimer}`

            rankNext.innerText = `Siguiente mapa: ${data.ranked?.next?.map}`

            ltm.innerText = `LTM actual: ${data.ltm?.current?.eventName} ${data.ltm?.current?.map}`

            remainingTimerLtm.innerText = `Tiempo restante: ${data.ltm?.current?.remainingTimer}`

            ltmNext.innerText = `LTM Siguiente: ${data.ltm?.next?.eventName} ${data.ltm?.next?.map}`

            document.getElementById('assetPb').src = data.battle_royale?.current?.asset;

            document.getElementById('assetRk').src = data.ranked?.current?.asset;

            document.getElementById('assetLtm').src = data.ltm?.current?.asset;

            const remainingTime = new Date(`1970-01-01T${data.battle_royale?.current?.remainingTimer}Z`);
            // update remaining time in real time
            const intervalId2 = setInterval(() => {
                if (remainingTime.getUTCSeconds() > -1) {
                    remainingTime.setUTCSeconds(remainingTime.getUTCSeconds() - 1);
                    remainingTimer.innerText = `Tiempo restante: ${remainingTime.toISOString().slice(11, 19)}`;
                } else {
                    // If the remaining time is 0, stop the interval and get the data again
                    clearInterval(intervalId2);
                }
            }, 1000);

            const remainingTimeLtm = new Date(`1970-01-01T${data.ltm?.current?.remainingTimer}Z`);
            const intervalId = setInterval(() => {
                if (remainingTimeLtm.getUTCSeconds() > -1) {
                    remainingTimeLtm.setUTCSeconds(remainingTimeLtm.getUTCSeconds() - 1);
                    remainingTimerLtm.innerText = `Tiempo restante: ${remainingTimeLtm.toISOString().slice(11, 19)}`;
                } else {
                    clearInterval(intervalId);
                }
            }, 1000);

            const remainingTimeRk = new Date(`1970-01-01T${data.ranked?.current?.remainingTimer}Z`);
            const intervalId3 = setInterval(() => {
                if (remainingTimeRk.getUTCSeconds() > -1) {
                    remainingTimeRk.setUTCSeconds(remainingTimeRk.getUTCSeconds() - 1);
                    remainingTimerRk.innerText = `Tiempo restante: ${remainingTimeRk.toISOString().slice(11, 19)}`;
                } else {
                    clearInterval(intervalId3);
                }
            }, 1000);

        })
        .catch(e => console.error(new Error(e)));
}