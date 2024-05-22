const getrandc=()=>{
    let v1=Math.random()*255;
    let v2=Math.random()*255;
    let v3=Math.random()*255;
    b.style.color=`rgb(${v1},${v2},${v3}`
    b.style.backgroundColor="black"
    return `rgb(${v1},${v2},${v3}`;
}
let b=document.getElementById("hi");
let a = document.getElementsByClassName("box");
    //console.log(a);
    Array.from(a).forEach((e) => {

        e.style.backgroundColor=getrandc()
        e.style.color=getrandc()
      console.log(e);
    });
