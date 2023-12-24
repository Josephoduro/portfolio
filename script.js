//Typing Animation
var typed = new Typed(".typing", {
  strings: [
    "Full Stack Web Developer ",
    "UI/UX Designer",
    "Mobile App Developer",
    "Game Developer",
  ],
  typeSpeed: 100,
  BackSpeed: 60,
  loop: true,
});
/*------------------------------------------Aside-----------------------*/
const nav = document.querySelector(".nav"),
  navList = nav.querySelectorAll("li"),
  totalNavList = navList.length,
  allSection = document.querySelectorAll(".section"),
  totalSection = allSection.length;
for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector("a");
  a.addEventListener("click", function () {
    for (let j = 0; j < totalNavList; j++) {
      for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("back-section");
      }
      if (navList[j].querySelector("a").classList.contains("active")) {
        allSection[j].classList.add("back-section");
      }
      navList[j].querySelector("a").classList.remove("active");
    }
    this.classList.add("active");
    showSection(this);
    if (window.innerWidth < 1200) {
      asideSectionTogglerBtn();
    }
  });
}
function showSection(element) {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("active");
  }
  const target = element.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active");
}
function updateNav(element) {
  for (let i = 0; i < totalNavList; i++) {
    navList[i].querySelector("a").classList.remove("active");
    const target = element.getAttribute("href").split("#")[1];
  }
}
document.querySelector(".hire-me").addEventListener("click", function () {
  showSection(this);
  updateNav(this);
});
const navTogglerBtn = document.querySelector(".nav-toggler"),
  aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", () => {
  asideSectionTogglerBtn();
});
function asideSectionTogglerBtn() {
  aside.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.toggle("open");
  }
}
function downloadFile() {
  var fileUrl =
    "https://drive.google.com/file/d/1xjgJVTbWbzTfi54oWd7vphM2hxib7VDb/view?usp=sharing";

  // Create a temporary link element
  var link = document.createElement("a");
  link.href = fileUrl;
  link.download = "Resume"; // You can set the desired file name here
  document.body.appendChild(link);

  // Trigger the click event to start the download
  link.click();

  // Remove the link from the DOM once the download is initiated
  document.body.removeChild(link);
}

function projectOne() {
  window.location.href = "https://josephoduro.github.io/cloudhosting/";
}

function projectTwo() {
  window.location.href = "https://josephoduro.github.io/streamingService/";
}

function projectThree() {
  window.location.href = "https://josephoduro.github.io/huluClone/";
}

function projectFour() {
  window.location.href = "https://josephoduro.github.io/buzz/";
}

function projectFive() {
  window.location.href = "https://josephoduro.github.io/textToSpeech/";
}

function projectSix() {
  window.location.href = "https://josephoduro.github.io/game/";
}
