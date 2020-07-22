window.addEventListener("load", function(){
  let form = document.getElementById("launchForm");
  form.addEventListener("submit", function(event){
     let pilotName=document.querySelector("input[name=pilotName]");
     let copilotName=document.querySelector("input[name=copilotName]");
     let fuelLevel=document.querySelector("input[name=fuelLevel]");
     let cargoMass=document.querySelector("input[name=cargoMass]");
     let faultyItems=document.getElementById("faultyItems");
     let pilotStatus=document.getElementById("pilotStatus");
     let copilotStatus=document.getElementById("copilotStatus");
     let fuelStatus=document.getElementById("fuelStatus");
     let cargoStatus=document.getElementById("cargoStatus");
     let launchStatus=document.getElementById("launchStatus");

     if(pilotName.value ==="" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === ""){
         alert("All fields are required!");
         event.preventDefault()
      }else if(isNaN(pilotName.value) === false || isNaN(copilotName.value) === false || isNaN(Number(fuelLevel.value)) === true || isNaN(Number(cargoMass.value)) === true){
         alert("Please enter valid input types");
         event.preventDefault();
      }else if(Number(fuelLevel.value) <10000){
         faultyItems.style.visibility= `visible`;
         launchStatus.innerHTML =`Shuttle not ready for launch`;
         launchStatus.style.color = `red`;
         pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready for launch.`;
         copilotStatus.innerHTML = `Co-pilot ${copilotName.value} is ready for launch.`;
         fuelStatus.innerHTML = `Fuel level too low for launch`
         event.preventDefault();
      }else if(Number(cargoMass.value) >10000){
         faultyItems.style.visibility= `visible`;
         launchStatus.innerHTML =`Shuttle not ready for launch`;
         launchStatus.style.color = `red`;
         pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready for launch.`;
         copilotStatus.innerHTML = `Co-pilot ${copilotName.value} is ready for launch.`;
         cargoStatus.innerHTML = `Cargo mass too high.`
         event.preventDefault();
      }else{
         faultyItems.style.visibility=`visible`
         launchStatus.innerHTML=`Shuttle is ready for launch.`
         launchStatus.style.color = `green`
         pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready for launch.`;
         copilotStatus.innerHTML = `Co-pilot ${copilotName.value} is ready for launch.`;
         event.preventDefault();
      };
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
