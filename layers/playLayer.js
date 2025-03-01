function mineOre() {
    playerData.ore += playerData.miningRate;
    updateUI();
}

function updateUI() {
    document.getElementById("oreCount").innerText = `Ore: ${playerData.ore}`;
}

document.getElementById("mineButton").addEventListener("click", mineOre);