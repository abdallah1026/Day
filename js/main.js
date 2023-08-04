let star = document.getElementById(`star`);
let moon = document.getElementById(`moon`);
let abdallah = document.querySelector(`.abdallah`);
let mountain3 = document.getElementById(`mountain3`);
let mountain4 = document.getElementById(`mountain4`);
let river = document.getElementById(`river`);
let boat = document.getElementById(`boat`);

window.onscroll= function (){
    let value = scrollY;
    star.style.left = value + `px`;
    moon.style.top = value * 4 +`px`;
    abdallah.style.fontSize = value +`px`;
    mountain3.style.top = value * 1.5 +`px`;
    mountain4.style.top = value * 1.2 +`px`;
    river.style.top = value +`px`;
    boat.style.left = value * 3 +`px`;
    if (scrollY >= 67 ){
        abdallah.style.fontSize = 67 +`px`;
        abdallah.style.position = `fixed`;
        if(scrollY >= 478 ){
            abdallah.style.display = `none`;
        }else{
            abdallah.style.display = `block`;
        }
        if(scrollY >= 127 ){
            document.querySelector(`.main`).style.background = `linear-gradient( #376281,#10001f )`;
        }else{
            document.querySelector(`.main`).style.background = `linear-gradient(#200016 , #10001f)`;  
        }
    }
}