var bulb = document.querySelector("#bulb");
var btn = document.querySelector("button");

var light = 0;
btn.addEventListener("click",function(){
    if(light == 0){
        bulb.style.backgroundColor = "yellow"
        light =1
        alert("bulb is on")

    }else{
        bulb.style.backgroundColor = "white"
        light =0;
        alert("bulb is off")
    }
})

