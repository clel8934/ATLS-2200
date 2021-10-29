let meals = ["lunch","dinner","brunch"];
let images = ["dinner.jpg", "lunch.jpg", "brunch.jpg"];

for(i=0; i<document.getElementByClassName("meal").length; i++){
  console.log(meals[i]);
  document.getElementsByClassName("meal")[i].innerHTML = "<h2>" + meals[i]; + "</h2>";
  document.getElementByClassName("meal")[i].addEventListener('click', setActive, false);
  document.getElementsByClassName("meal")[i].id = meals[i];
}


function setActive(e){
  console.log('clicked');
  e.target.classList.toggle('active');
  console.log(e.target.innerHTML);

  if(e.target.tagName == "H2"){

  }
}
