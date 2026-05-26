const text = "Gaddam Deekshitha";
let i = 0;

function type() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(type, 100);
  }
}
type();

document.getElementById("toggle").onclick = () => {
  document.body.classList.toggle("dark");
};

const btn = document.getElementById("topBtn");

window.onscroll = () => {
  btn.style.display = document.documentElement.scrollTop > 100 ? "block" : "none";
};

btn.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};