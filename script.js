let selectedTiles = [];
 
function selectTile(tile) {
  if (selectedTiles.length < 2) {
    selectedTiles.push(tile);
    tile.classList.add("selected");
    document.getElementById("reset").style.display = "block";
  }
  if (selectedTiles.length === 2) {
    document.getElementById("verify").style.display = "block";
  }
}
 
function reset() {
  selectedTiles.forEach(tile => {
    tile.classList.remove("selected");
  });
  selectedTiles = [];
  document.getElementById("reset").style.display = "none";
  document.getElementById("verify").style.display = "none";
  document.getElementById("para").style.display = "none";
}
 
function verify() {
  if (selectedTiles[0].className === selectedTiles[1].className) {
    document.getElementById("para").innerHTML = "You are a human. Congratulations!";
  } else {
    document.getElementById("para").innerHTML = "We can't verify you as a human. You selected the non-identical tiles.";
  }
  document.getElementById("reset").style.display = "none";
  document.getElementById("verify").style.display = "none";
  document.getElementById("para").style.display = "block";
}