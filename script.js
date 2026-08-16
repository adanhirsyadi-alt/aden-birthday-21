const $=s=>document.querySelector(s), $$=s=>document.querySelectorAll(s);

window.addEventListener("load",()=>setTimeout(()=>$("#preloader").classList.add("loaded"),900));

const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.12});
$$(".reveal").forEach(x=>io.observe(x));

$("#openStory").onclick=()=>document.querySelector(".intro").scrollIntoView({behavior:"smooth"});

const lb=$("#lightbox"), lbImg=$("#lightboxImg"), lbCap=$("#lightboxCaption");
$$(".photo-card").forEach(card=>card.onclick=()=>{
  lbImg.src=card.dataset.img; lbCap.textContent=card.dataset.caption; lb.classList.add("show");
});
$("#closeLightbox").onclick=()=>lb.classList.remove("show");
lb.onclick=e=>{if(e.target===lb)lb.classList.remove("show")};

$("#openLetter").onclick=()=>{
  const env=$("#envelope"); env.classList.toggle("open");
  $("#openLetter").innerHTML=env.classList.contains("open")?"Tutup surat <span>↙</span>":"Buka surat <span>↗</span>";
  if(env.classList.contains("open")){
    $("#toast").classList.add("toast-show");
    setTimeout(()=>$("#toast").classList.remove("toast-show"),2200);
  }
};

function celebrate(){
  document.querySelector("#finale").scrollIntoView({behavior:"smooth"});
  const box=$("#confetti"); box.innerHTML="";
  for(let i=0;i<110;i++){
    const p=document.createElement("i"); p.className="piece";
    p.style.left=Math.random()*100+"%";
    p.style.animationDelay=Math.random()*1.5+"s";
    p.style.animationDuration=(3+Math.random()*2)+"s";
    p.style.opacity=.7+Math.random()*.3;
    p.style.transform=`rotate(${Math.random()*360}deg)`;
    box.appendChild(p);
  }
}
$("#celebrate").onclick=celebrate;
$("#again").onclick=celebrate;


const music = document.getElementById("bgMusic");
const soundBtn = document.getElementById("soundBtn");

async function startMusic(){
  try{
    await music.play();
    soundBtn.classList.add("active");
    soundBtn.innerHTML="♫ <span>sound on</span>";
  }catch(e){}
}
document.getElementById("openStory").addEventListener("click", startMusic, {once:true});

soundBtn.onclick=async()=>{
  if(music.paused){
    await music.play();
    soundBtn.classList.add("active");
    soundBtn.innerHTML="♫ <span>sound on</span>";
  }else{
    music.pause();
    soundBtn.classList.remove("active");
    soundBtn.innerHTML="♪ <span>sound</span>";
  }
};
