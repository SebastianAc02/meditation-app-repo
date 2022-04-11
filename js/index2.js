const app = document.querySelector(".app");

const inactiveTime = 6000; 



var mouseLastMoveTime = new Date();


document.addEventListener("mousemove", () => {
  
  mouseLastMoveTime = new Date();


  app.classList.remove("inactive");

  document.body.style.cursor = "auto";
});


function deactivateApp() {
  
  var now = new Date();
  var deltaTime = now - mouseLastMoveTime;

  if (deltaTime >= inactiveTime) {
    
    app.classList.add("inactive");

    
    document.body.style.cursor = "none";
  }

  
  requestAnimationFrame(deactivateApp);
}
deactivateApp();
