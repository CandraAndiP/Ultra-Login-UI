// PARTICLES
for(let i=0;i<30;i++){
  let p = document.createElement("div");
  p.classList.add("particle");
  p.style.left = Math.random()*100 + "vw";
  p.style.animationDuration = (5 + Math.random()*5) + "s";
  document.body.appendChild(p);
}

// LOGIN
document.getElementById("loginForm").addEventListener("submit", function(e){
  e.preventDefault();

  let email = document.getElementById("email").value;
  let pass = document.getElementById("password").value;

  if(email === "admin@gmail.com" && pass === "123456"){
    alert("Welcome back ");
  } else {
    alert("Login gagal ");
  }
});
