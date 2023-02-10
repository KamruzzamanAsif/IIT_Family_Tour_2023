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
  const wheel = document.getElementById("wheel");
  const spinButton = document.getElementById("spin-button");
  const resultDiv = document.getElementById("result");
  
  spinButton.addEventListener("click", function () {
    // Rotate the wheel
    rotateTheWheel();

    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * songs.length);
      const randomSong = songs[randomIndex];
      resultDiv.innerHTML = `The song you got is: "${randomSong}"`;
    }, 4000);  // 4000 miliseconds = 4 seconds 
              // after 4 seconds the result will be shown
  });
  



function rotateTheWheel(){
  // Random number between 0 and 360
  const randomDegree = Math.floor(Math.random() * 360);
  // Get the current rotation of the wheel
  const currentRotation = getRotation(wheel);
  // Calculate the rotation difference
  const rotationDifference = randomDegree - currentRotation;
  // Animate the rotation
  animateRotation(wheel, rotationDifference);
}


function getRotation(element) {
  // Get the current transform value as a matrix
  const matrix = getComputedStyle(element)
    .getPropertyValue("transform")
    .replace(/[^0-9\-.,]/g, "")
    .split(",");
  // Extract the rotation angle from the matrix
  const angle = Math.round(Math.asin(matrix[1]) * (180 / Math.PI));
  return angle;
}


function animateRotation(element, rotation) {
  // Set the initial rotation
  let currentRotation = 0;
  // Set the rotation step
  const rotationStep = 5;
  // Start the animation loop
  const animationInterval = setInterval(function () {
    // Increment the current rotation
    currentRotation += rotationStep;
    // Rotate the wheel
    element.style.transform = `rotate(${currentRotation}deg)`;
    // Check if the animation has completed
    setTimeout(() => {
      clearInterval(animationInterval);
    }, 4000);  // 4000 miliseconds = 4 seconds will rotate

  }, 20);
}