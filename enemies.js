let enemies_location = []



function initEnemies(count) {
    for (let i = 0; i < count; i++) {
      let coords = getRandomCoordinatesOnFarm();
      enemies_location.push(coords);
    }
  }
  
  function getRandomCoordinatesOnFarm() {
    let x = Math.random() * (windowWidth- getRelativeX(200) - getRelativeX(1157)) + getRelativeX(1157);
    let y = Math.random() * (windowHeight- getRelativeY(200) - getRelativeY(282)) + getRelativeY(282);
    
    return { x: x, y: y };
  }