const songs = [
    "Shape of You",
    "Thriller",
    "Billie Jean",
    "Smells Like Teen Spirit",
    "Imagine",
    "Bohemian Rhapsody",
    "I Want it That Way",
    "Uptown Funk",
    "Hello",
    "Someone Like You",
  ];
  
  const spinButton = document.getElementById("spin-button");
  const resultDiv = document.getElementById("result");
  
  spinButton.addEventListener("click", function () {
    const randomIndex = Math.floor(Math.random() * songs.length);
    const randomSong = songs[randomIndex];
    resultDiv.innerHTML = `The song you got is: "${randomSong}"`;
  });
  

  // wheel spin code //
const wheel = document.getElementById("wheel");

spinButton.addEventListener("click", function () {
  // Random number between 0 and 360
  const randomDegree = Math.floor(Math.random() * 360);
  // Rotate the wheel
  wheel.style.transform = `rotate(${randomDegree}deg)`;
});