// flicka flicka whaaaaa
if (localStorage.getItem("flickerOff") == "true") {
  var elements = document.querySelectorAll("h1, p");
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.animationPlayState = "paused";
  }
  document.querySelector(".icon").innerHTML = "ON";
}

function toggleFlicker() {
  var elements = document.querySelectorAll("h1, p");
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.animationPlayState =
      elements[i].style.animationPlayState == "paused" ? "running" : "paused";
  }
  localStorage.setItem(
    "flickerOff",
    elements[0].style.animationPlayState == "paused"
  );
  document.querySelector(".icon").innerHTML =
    elements[0].style.animationPlayState == "paused" ? "ON" : "OFF";
}

// Text
const typingText = " ";
const typingDescription =
  "Brian Purnell is a software engineer and web developer." + 
  "<br>" + 
  "He is proficient in: " + 
  "Full Stack Web Development, team collaboration, " + 
  "<br>" + 
  "team leadership, and project management. " + 
  "<br>" + 
  "He is currently employed at " + 
  "<a href='https://www.integritywireline.com/' target='_blank'>Integrity Wireline</a>. " +
  "<br>" + 
  "<br>" + 
  "<br>" + 
  "<br>" + 
  "<br>" + 
  " ↓ " + " ↓ " + " ↓ ";


const typingSpeed = 2;

// DOM shtuff
document.addEventListener("DOMContentLoaded", function () {
  typeHeader("typedText", typingText, typingSpeed)
    .then(() => typeText("typedDescription", typingDescription, typingSpeed))
    .then(() => {
      const cursor = document.createElement("span");
      cursor.classList.add("blinking-cursor");
      document.getElementById("typedDescription").innerHTML += cursor.outerHTML;
    });
});

// Typing effect without a cursor at the end
function typeHeader(elementId, text, speed = 100) {
  let index = 0;
  const element = document.getElementById(elementId);

  return new Promise((resolve) => {
    const interval = setInterval(() => {
      if (index < text.length) {
        element.innerHTML = text.substring(0, index++);
      } else {
        clearInterval(interval);
        resolve();
      }
    }, speed);
  });
}

// typing effect WITH a cursor at the end
function typeText(elementId, text, speed = 100) {
  let index = 0;
  const element = document.getElementById(elementId);
  const cursor = document.createElement("span");
  cursor.classList.add("blinking-cursor");
  cursor.innerHTML = "";

  return new Promise((resolve) => {
    const interval = setInterval(() => {
      if (index < text.length) {
        element.innerHTML = text.substring(0, index++) + cursor.outerHTML;
      } else {
        clearInterval(interval);
        resolve();
      }
      
    }, speed);
    
  });
}

// Update date and time
function updateDateTime() {
    var now = new Date();
    var dateTimeString = now.toLocaleDateString() + ' ' + now.toLocaleTimeString();
    document.getElementById('dateTime').innerHTML = dateTimeString;
}

// Call the function initially and set an interval to update every second
updateDateTime();
setInterval(updateDateTime, 1000);


