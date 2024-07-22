const bravenDiv = document.getElementById("soloDiv");
const bravenModal = document.getElementById("soloModal")
const span = document.getElementsByClassName("close")[0]

bravenDiv.onclick = function () {
    
    bravenModal.style.display = "block";
}

span.onclick = function () {
    bravenModal.style.display = "none";
}


function slime(){ //make a function to show and hide te modal 
    const slimeDiv = document.getElementById("slimeDiv");// get the element of the div that you can see in the page 
    const slimeModal = document.getElementById("slimeModal");//get the element of the modal that it's hide
    const span = document.getElementsByClassName("close")[1];//get element that gonna be the button to close the modal (the div that is hide)

slimeDiv.onclick = function () {//onclick on the div it's gonna  show the hidden modal
    
    slimeModal.style.display = "block";
}

span.onclick = function () { //onclick on the span(the close button) that modal  gonna disapear or hide 
    slimeModal.style.display = "none";
}
}


function musho(){
    const mushoDiv = document.getElementById("mushoDiv");
    const mushoModal = document.getElementById("mushoModal")
    const span = document.getElementsByClassName("close")[2]

mushoDiv.onclick = function () {
    
    mushoModal.style.display = "block";
}

span.onclick = function () {
    mushoModal.style.display = "none";
}
}




function mashle(){
    const mashleDiv = document.getElementById("mashleDiv");
    const mashleModal = document.getElementById("mashleModal")
    const span = document.getElementsByClassName("close")[3]

mashleDiv.onclick = function () {
    
    mashleModal.style.display = "block";
}

span.onclick = function () {
    mashleModal.style.display = "none";
}
}

function tokyo(){
    const tokyoDiv = document.getElementById("tokyoDiv");
    const tokyoModal = document.getElementById("tokyoModal")
    const span = document.getElementsByClassName("close")[4]

tokyoDiv.onclick = function () {
    
    tokyoModal.style.display = "block";
}

span.onclick = function () {
    tokyoModal.style.display = "none";
}
}


function punch(){
    const punchDiv = document.getElementById("punchDiv");
    const punchModal = document.getElementById("punchModal")
    const span = document.getElementsByClassName("close")[5]

punchDiv.onclick = function () {
    
    punchModal.style.display = "block";
}

span.onclick = function () {
    punchModal.style.display = "none";
}
}