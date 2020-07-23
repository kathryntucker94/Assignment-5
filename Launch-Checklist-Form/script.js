window.addEventListener("load", function(){
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
   let missionTarget=document.getElementById("missionTarget")
   let form = document.getElementById("launchForm");
   
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
      response.json().then(function(json){
         missionTarget.innerHTML= `
         <h2>Mission Destination</h2>
            <ol>
               <li>Name: ${json[0].name}</li>
               <li>Diameter: ${json[0].diameter}</li>
               <li>Star: ${json[0].star}</li>
               <li>Distance from Earth: ${json[0].distance} </li>
               <li>Number of Moons: ${json[0].moons}</li>
            <img src="${json[0].image}">
            </ol>
  `
   form.addEventListener("submit", function(event){

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
});
})


