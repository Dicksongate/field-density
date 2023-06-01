//declaring displaced volume input calculation
const fullweightEl = document.getElementById("fullbottle");
const residualEl = document.getElementById("residual");
const bulkdensityEl = document.getElementById("bulkdensity");
const coneEl = document.getElementById("cone");

//declaring volume result element
const volumeEl = document.getElementById("volumeres");



//declaring wet density input calculation element
const wetEl = document.getElementById("wetweight");
const displacedvolumeEl = document.getElementById("displacedvolume");

//declaring wetdensity outputresult element
const wetdensityresultEl = document.getElementById("drymassresult");



const compactresultEl = document.getElementById("compactresult");

//declaring maximum dry densiry outputresult element

//date parameters

const dateEl = document.getElementById("date");
dateEl.innerText = new Date().toLocaleDateString('en-GB',{
  day : 'numeric',
  month : 'short',
  year : "numeric"
});



//declaring form element
const formEl1 = document.getElementById("displacedvolume");
const formEl2 = document.getElementById("drywet");
const formEl3 = document.getElementById("compact");


const form1button = document.getElementById("submit1")

const form2button = document.getElementById("submit2")

const form3button = document.getElementById("submit3")

//working om displaced volume
let volume;
if(!volume){
  volume = 0
}


//working on wet density



//working on compaction



 
 form1button.addEventListener("click",() => {
 
  const bottans = +fullweightEl.value
  const residuans = +residualEl.value
  const conans = +coneEl.value
  const bulkans = +bulkdensityEl.value
  const volumTop = bottans - residuans - conans
  volume = Math.round(volumTop/bulkans)
  volumeEl.innerText = `Displaced volume: ${volume} cc`

 })
 
  const buttonwet = form2button.addEventListener("click",() => {
  let wetdense;
  const wetans = +wetEl.value
  const disvolans = +displacedvolumeEl.value
  wetdense = wetans/disvolans    
  wetdensityresultEl.innerText = `Wet Density: ${wetdense} (g/cm)`

 })



 //declaring degree of compaction outputresult element
const mddEl = document.getElementById("mdd");
const wetdensityEl = document.getElementById("wetdensity")
const moistEl = document.getElementById("moistdensity")

form3button.addEventListener("click",() => {

  const mddans = +mddEl.value
  const wetdeans = +wetdensityEl.value
  const moistans = +moistEl.value
  const compa1 = wetdeans * 100
  const comp2 = compa1/(100 + moistans)
  compaction = Math.round((comp2/mddans) * 100)

  compactresultEl.innerText = `Degree of Compaction: ${compaction}%`
})


 


 

  



















   






