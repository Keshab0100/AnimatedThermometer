// span id="temp" class="fa">

const starthermo = () => {
    const tempa = document.getElementById('temp')
    tempa.innerHTML = '&#xf2cb'
    tempa.style.color = "yellow"

    setTimeout(() =>{
        tempa.innerHTML = '&#xf2ca';
    },1000)

    setTimeout(() =>{
        tempa.innerHTML = '&#xf2c9';
    },2000)

    setTimeout(() =>{
        tempa.innerHTML = '&#xf2c8';
    },3000)

    setTimeout(() =>{
        tempa.innerHTML = '&#xf2c7';
        tempa.style.color = "red";
    },4000)

}
starthermo();
setInterval(starthermo, 5000);
