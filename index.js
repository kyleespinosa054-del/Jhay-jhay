let tstart = document.querySelector("#tstart"); // use . for class, # fo
let btn1 = document.querySelector("#start")
let count = 0
let boogle = document.querySelector("#boogle")

document.getElementById("start").addEventListener("click", () => { 
  if(count == 0) {
    tstart.textContent = " Hello Jhay"
    btn1.textContent = "Next"
    count += 1;
  }
  
  }
  else if(count == 5) {
    tstart.textContent = "Ok na?";
    boogle.classList.remove('fade');
    void boogle.offsetWidth;
    boogle.classList.add('fade');
  }
});