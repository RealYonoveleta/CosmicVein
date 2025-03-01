const playerData = {
    money: 0,
    ore: 0,
    miningRate: 1,
    prestigePoints: 0,
    upgrades: {}
};

// Save game data
function saveGame() {
    localStorage.setItem("playerData", JSON.stringify(playerData));
}

// Load game data
function loadGame() {
    let data = localStorage.getItem("playerData");
    if (data) playerData = JSON.parse(data);
}