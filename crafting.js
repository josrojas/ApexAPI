
const craftName = document.getElementById('craftName');
const cost = document.getElementById('cost');
const craftWeek = document.getElementById('craftWeek');

// Use the API and displays the current map and the time remaining until the next map every time the page is loaded.

window.onload = () => {
    console.log(document.getElementById('craftName'));

    fetch('https://api.mozambiquehe.re/crafting?auth=1a80230fb76d0a946f0872dc4be8d726')
        .then(res => res.json())
        .then(data => {

            document.getElementById('AssetDa').src = data.bundle?.bundleType?.bundleContent?.itemType?.asset;

            craftName.innerText = `Name: ${data.longshot_bundle?.bundleContent?.itemType?.name}`

            cost.innerText = `Cost: ${data.bundleContent?.cost}`

            document.getElementById('AssetWeek').src = data.bundle?.bundleType?.bundleContent?.itemType?.asset;

            craftWeek.innerText = `Name: ${data.bundleContent?.itemType?.name}`

        })
        .catch(e => console.error(new Error(e)));
}