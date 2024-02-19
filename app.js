
let count=0;

function addition(){
count++
document.getElementById("counter").innerText=count;
    
}


function reset(){
    count=0
    document.getElementById("counter").innerText=count;
}
let typed = new Typed(".auto-type",{
    strings : ["Palestine","Gaza"],
    typeSpeed : 150,
    backSpeed : 150,
    loop : true,
});

let Zikr = new Typed(".zikr",{
    strings : ["(ٱللَّٰهُ أَكْبَرُ)","(ٱلْحَمْدُ لِلَّٰهِ)"],
    typeSpeed : 100,
    backSpeed : 150,
    loop : true,
});
