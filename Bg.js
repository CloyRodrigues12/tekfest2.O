AOS.init();

var menuList = document.getElementById("menuList");
menuList.style.maxHeight = "0px";
function togglemenu() {
  if (menuList.style.maxHeight == "0px") {
    menuList.style.maxHeight = "130px";
  }
  else {
    menuList.style.maxHeight = "0px";

  }
}

document.addEventListener("DOMContentLoaded", function () {
    
    let parallax = document.createElement("div");
    parallax.classList.add("parallax-bg");
    document.body.appendChild(parallax);
    let numParticles = 550; 
    let pageHeight = document.documentElement.scrollHeight; 

    let nebula = document.createElement("div");
    nebula.classList.add("nebula");
    document.body.appendChild(nebula);

      for (let i = 0; i < 150; i++) {
      let particle = document.createElement("div");
      particle.classList.add("particle");
      particle.style.top = `${Math.random() * pageHeight}px`;
      particle.style.left = `${Math.random() * 100}vw`;
      particle.style.animationDuration = `${4 + Math.random() * 6}s`;
      document.body.appendChild(particle);
        }

    document.addEventListener("mousemove", function (event) {
      let x = (event.clientX / window.innerWidth - 0.5) * 50;
      let y = (event.clientY / window.innerHeight - 0.5) * 50;
      parallax.style.transform = `translate(${x}px, ${y}px) scale(1.1)`;
     });
      
      document.addEventListener("mousemove", function (event) {
       let trail = document.createElement("div");
        trail.classList.add("trail");
        trail.style.top = `${event.clientY + window.scrollY}px`;
        trail.style.left = `${event.clientX}px`;
      
        document.body.appendChild(trail);
         setTimeout(() => {
        trail.remove();}, 300);
          });

          window.addEventListener("scroll", function () {
              let scrollY = window.scrollY;
              nebula.style.transform = `translateY(${scrollY * 0.3}px)`;
              parallax.style.transform = `translateY(${scrollY * 0.5}px)`;
          });
  });