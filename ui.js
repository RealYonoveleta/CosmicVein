const layers = ["play", "prestige", "tech"];

function showLayer(layerName) {
    layers.forEach(layer => {
        document.getElementById(layer).style.display = (layer === layerName) ? "block" : "none";
    });
}

// Example: Switch to Prestige screen
document.getElementById("prestigeButton").addEventListener("click", () => showLayer("prestige"));