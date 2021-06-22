let mySlider = document.getElementById("mySlider");
let text = document.getElementById("textDisplay");

mySlider.addEventListener("mousemove",(e)=>{
    text.innerText =  "Value:" + e.target.value;
})