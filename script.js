const $ = s => document.querySelector(s);
const intro = $("#intro"), site = $("#site"), loader = $("#loader");
const music = $("#music"), playBtn = $("#playBtn"), musicToggle = $("#musicToggle");

window.addEventListener("load", () => {
  setTimeout(() => loader.classList.add("gone"), 500);
});

$("#openBtn").addEventListener("click", async () => {
  intro.classList.add("hidden");
  site.classList.remove("hidden");
  window.scrollTo(0,0);
  try { await music.play(); } catch(e) {}
  playBtn.textContent = "Ⅱ";
});

function toggleMusic(){
  if(music.paused){ music.play(); playBtn.textContent="Ⅱ"; musicToggle.textContent="♫"; }
  else { music.pause(); playBtn.textContent="▶"; musicToggle.textContent="♪"; }
}
playBtn.addEventListener("click", toggleMusic);
musicToggle.addEventListener("click", toggleMusic);

$("#celebrateBtn").addEventListener("click", () => {
  const toast = $("#toast");
  toast.classList.add("show");
  for(let i=0;i<80;i++) setTimeout(createHeart, i*15);
  setTimeout(()=>toast.classList.remove("show"), 2800);
});

function createHeart(){
  const h=document.createElement("div");
  h.textContent = Math.random()>.25 ? "♥" : "✦";
  h.style.position="fixed";
  h.style.left=(Math.random()*100)+"vw";
  h.style.bottom="-20px";
  h.style.zIndex=60;
  h.style.pointerEvents="none";
  h.style.color=["#d7ad5a","#9e1735","#a86bd1","#f5d78a"][Math.floor(Math.random()*4)];
  h.style.fontSize=(12+Math.random()*22)+"px";
  h.style.transition="transform 2.5s linear, opacity 2.5s";
  document.body.appendChild(h);
  requestAnimationFrame(()=>{h.style.transform=`translateY(-${window.innerHeight+80}px) rotate(${Math.random()*360}deg)`;h.style.opacity="0"});
  setTimeout(()=>h.remove(),2600);
}
