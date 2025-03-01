function canPrestige() {
    return playerData.ore >= 1e6; // Example: Prestige unlocks at 1M ore
}

function doPrestige() {
    if (!canPrestige()) return;
    
    let earnedPoints = Math.floor(Math.log10(playerData.ore)) * 10;
    playerData.prestigePoints += earnedPoints;
    
    // Reset core resources but keep prestige bonuses
    playerData.ore = 0;
    playerData.miningRate = 1;
    
    updatePrestigeUI();
    saveGame();
}

function updatePrestigeUI() {
    document.getElementById("prestigePoints").innerText = `Prestige Points: ${playerData.prestigePoints}`;
}

document.getElementById("prestigeButton").addEventListener("click", doPrestige);