// Countdown functionality for "EXPIRES IN" section
let countDownDate = new Date().getTime() + 5000000;

const countdown = setInterval(() => {
  const now = new Date().getTime();
  const distance = countDownDate - now;

  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.getElementById("minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
  document.getElementById("seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

  if (distance < 0) {
    clearInterval(countdown);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);

// Toggle ticket details visibility
function toggleDetails() {
  const details = document.getElementById("details");
  const button = document.getElementById("details-toggle");
  if (details.style.display === "none") {
    details.style.display = "block";
    button.innerHTML = "HIDE DETAILS";
  } else {
    details.style.display = "none";
    button.innerHTML = "SHOW DETAILS";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("details").style.display = "none";
});
