// Get all the image elements
const images = document.querySelectorAll("img");

// Get the reset button element
const resetBtn = document.getElementById("reset");

// Get the verify button element
const verifyBtn = document.getElementById("verify");

// Get the paragraph element
const para = document.getElementById("para");

// Get the heading element
const heading = document.getElementById("h");

// Array to store the selected image elements
let selectedImages = [];

// Function to shuffle the images array
function shuffleImages() {
  for (let i = images.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = images[i].src;
    images[i].src = images[j].src;
    images[j].src = temp;
  }
}

// Function to handle image clicks
function handleImageClick(event) {
  const clickedImage = event.target;

  // Check if the clicked image is already selected
  if (selectedImages.includes(clickedImage)) {
    return;
  }

  // Add the clicked image to the selected images array
  selectedImages.push(clickedImage);

  // Add the 'selected' class to the clicked image
  clickedImage.classList.add("selected");

  // If two images have been selected, show the verify button
  if (selectedImages.length === 2) {
    verifyBtn.style.display = "block";
  }

  // If more than two images have been selected, reset the selection
  if (selectedImages.length > 2) {
    resetSelection();
  }
}

// Function to handle reset button click
function handleResetClick() {
  resetSelection();
}

// Function to reset the image selection
function resetSelection() {
  // Remove the 'selected' class from all selected images
  selectedImages.forEach((image) => {
    image.classList.remove("selected");
  });

  // Clear the selected images array
  selectedImages = [];

  // Hide the verify button
  verifyBtn.style.display = "none";
}

// Function to handle verify button click
function handleVerifyClick() {
  // Check if the selected images are identical
  if (selectedImages[0].className === selectedImages[1].className) {
    para.innerHTML = "You are a human. Congratulations!";
  } else {
    para.innerHTML = "We can't verify you as a human. You selected the non-identical tiles.";
  }

  // Hide the verify button
  verifyBtn.style.display = "none";

  // Reset the selection after a delay
  setTimeout(resetSelection, 2000);
}

// Add event listeners to the images
images.forEach((image) => {
  image.addEventListener("click", handleImageClick);
});

// Add event listener to the reset button
resetBtn.addEventListener("click", handleResetClick);

// Add event listener to the verify button
verifyBtn.addEventListener("click", handleVerifyClick);

// Shuffle the images when the page loads
shuffleImages();

// Set the initial state
resetSelection();
heading.innerHTML = "Please click on the identical tiles to verify that you are not a robot.";
resetBtn.style.display = "none";
verifyBtn.style.display = "none";
para.innerHTML = "";
