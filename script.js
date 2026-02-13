const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

noBtn.addEventListener("mouseover", () => {
  noBtn.classList.add("disappear");

  setTimeout(() => {
    yesBtn.classList.add("centered");
  }, 200); 
});

yesBtn.addEventListener("click", () => {
  const balloons = document.querySelectorAll('.balloon');
  const positions = Array.from(balloons).map(b => ({
    left: b.offsetLeft,
    bottom: b.offsetTop
  }));
  localStorage.setItem('balloonPositions', JSON.stringify(positions));

  window.location.href = "yes.html";
});
