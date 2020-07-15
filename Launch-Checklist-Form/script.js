window.addEventListener("load", function(){
  let form = document.getElementById("launchForm");
  form.addEventListener("submit", function(event){
     let pilotName=document.querySelector("input[name=pilotName]");
     let copilotName=document.querySelector("input[name=copilotName]");
     let fuelLevel=document.querySelector("input[name=fuelLevel]");
     let cargoMass=document.querySelector("input[name=cargoMass]");
     if(pilotName.value ==="" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === ""){
         alert("All fields are required!");
         event.preventDefault()
      }else if(isNaN(pilotName.value) === false || isNaN(copilotName.value) === false || isNaN(Number(fuelLevel.value)) === true || isNaN(Number(cargoMass.value)) === true){
         alert("Please enter valid input types");
         event.preventDefault();
      }
  });
});

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
