document.querySelector(".bx").addEventListener("click",function(){
  document.querySelector(".maintext").classList.add("pressed");
  setTimeout(function(){
    document.querySelector(".maintext").classList.remove("pressed");
  }, 400)
})
