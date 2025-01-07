// random number between 1-6
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
//random number to img
var randomImg1 = "images/dice" + randomNumber1 + ".png";
var randomImg2 = "images/dice" + randomNumber2 + ".png";


//change the value of dice
document.querySelectorAll(".dice img ")[0].setAttribute("src", randomImg1);
document.querySelector(".dice .img2 img").setAttribute("src", randomImg2);

//condition
if(randomNumber1 > randomNumber2){
    alert("MAG SORRY KANA ANO PANG INAANTAY MO!PASKO?");
    document.querySelector("h1").innerHTML = "PANALO SI AARON"
} else if (randomNumber1 < randomNumber2){
    alert("MAG SORRY KANA ANO PANG INAANTAY MO,PASKO?");
     document.querySelector("h1").innerHTML = "PANALO SI GANDA"
} else{
    document.querySelector("h1").innerHTML = "PATAASAN NALANG PRIDE!!"
}