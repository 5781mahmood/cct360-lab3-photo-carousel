// three photos for both stories
let studyImg = "images/study.jpg";
let coffeeImg = "images/coffee.jpg";
let walkImg = "images/walk.jpg";

// version 1: study -> coffee -> walk
let version1 = [
  {
    image: studyImg,
    step: "Beginning",
    caption: "Back at the desk. Time to actually start."
  },
  {
    image: coffeeImg,
    step: "Middle",
    caption: "Quick coffee break, then back to it."
  },
  {
    image: walkImg,
    step: "End",
    caption: "Done for now. Heading out."
  }
];

// version 2: walk -> coffee -> study (same pics, different order)
let version2 = [
  {
    image: walkImg,
    step: "Beginning",
    caption: "Went for a walk instead of opening the laptop."
  },
  {
    image: coffeeImg,
    step: "Middle",
    caption: "Still not working. Another coffee."
  },
  {
    image: studyImg,
    step: "End",
    caption: "Okay fine. Sitting down to work... eventually."
  }
];

let currentVersion = version1;
let currentIndex = 0;
let versionName = "Version 1: Getting It Done";

let storyImage = document.getElementById("storyImage");
let caption = document.getElementById("caption");
let stepLabel = document.getElementById("stepLabel");
let versionLabel = document.getElementById("versionLabel");
let version1Btn = document.getElementById("version1Btn");
let version2Btn = document.getElementById("version2Btn");
let nextBtn = document.getElementById("nextBtn");
let prevBtn = document.getElementById("prevBtn");

function showSlide() {
  let slide = currentVersion[currentIndex];
  storyImage.src = slide.image;
  caption.innerHTML = slide.caption;
  stepLabel.innerHTML = slide.step;
  versionLabel.innerHTML = versionName;
}

function nextSlide() {
  currentIndex = currentIndex + 1;

  if (currentIndex >= currentVersion.length) {
    currentIndex = 0;
  }

  showSlide();
}

function prevSlide() {
  currentIndex = currentIndex - 1;

  if (currentIndex < 0) {
    currentIndex = currentVersion.length - 1;
  }

  showSlide();
}

function setVersion1() {
  currentVersion = version1;
  versionName = "Version 1: Getting It Done";
  currentIndex = 0;
  document.body.style.backgroundColor = "#dfe8df";
  showSlide();
}

function setVersion2() {
  currentVersion = version2;
  versionName = "Version 2: Putting It Off";
  currentIndex = 0;
  document.body.style.backgroundColor = "#e8dfd8";
  showSlide();
}

version1Btn.addEventListener("click", setVersion1);
version2Btn.addEventListener("click", setVersion2);
nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);
storyImage.addEventListener("click", nextSlide);

showSlide();
