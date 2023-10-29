const bgImageElement = document.getElementById("bg-image");

window.addEventListener("scroll", () => {
  UpdateBgImageElement();
});

function UpdateBgImageElement() {
  console.log(1 - window.pageYOffset);
  bgImageElement.style.opacity = 1 - Math.random() / 900;
  bgImageElement.style.backgroundSize = 160 - (Math.random() * 10) / 12 + "%";
}
