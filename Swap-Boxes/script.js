const buttons = document.querySelectorAll(".btn");
const boxes = document.querySelectorAll(".box");

const goUp = (current, id) => {
  
   if(current.parentElement.previousElementSibling == null){
        alert("Limit reached..")
   }else{
       current.parentElement.previousElementSibling.children[id].classList.add("current");
       current.classList.remove("current");
    }
};


const goDown = (current, id) => {

    if(current.parentElement.nextElementSibling == null){
        alert("Limit reached..")
    }else{
            current.parentElement.nextElementSibling.children[id].classList.add("current");
            current.classList.remove("current");
    }
};


const goLeft = (current, id) => {

    if(current.previousElementSibling == null){
        alert("Limit reached..")
    }else{
            current.previousElementSibling.classList.add("current");
            current.classList.remove("current");
    }
};


  const goRight = (current, id) => {

    if(current.nextElementSibling == null){
        alert("Limit reached..")
    }else{
            current.nextElementSibling.classList.add("current");
            current.classList.remove("current");
    }
  };


  const goTopLeft= (current, id) => {
    id=id-1;
    if(current.parentElement.previousElementSibling == null){
        alert("Limit reached..")
    }else{
            current.parentElement.previousElementSibling.children[id].classList.add("current");
            current.classList.remove("current");
        }
  };


  const goTopRight = (current, id) => {
    let newId=parseInt(id);
    newId = newId + 1;
    if(current.parentElement.previousElementSibling == null){
        alert("Limit reached..")
    }else{
            current.parentElement.previousElementSibling.children[newId].classList .add("current");
            current.classList.remove("current");
        }
  };


  const goBottomLeft = (current, id) => {
    id=id-1;

    if(current.parentElement.nextElementSibling == null){
        alert("Limit reached..")
    }else{
            current.parentElement.nextElementSibling.children[id].classList.add("current");
            current.classList.remove("current");
        }
  };


  const goBottomRight = (current, id) => {
    let newId=parseInt(id);
    newId = newId + 1;

    if(current.parentElement.nextElementSibling == null){
        alert("Limit reached..")
    }else{
            current.parentElement.nextElementSibling.children[newId].classList.add("current");
            current.classList.remove("current");
    }   
  };

const swapBox = (action) => {
  let current = document.querySelector(".current");
  let id = current.id;
  switch (action) {

    case "up":
      goUp(current, id);
      break;

    case "down":
      goDown(current, id);
      break;

    case "left":
      goLeft(current, id);
      break;

    case "right":
      goRight(current, id);
      break;

    case "top-left":
      goTopLeft(current, id);
      break;

    case "top-right":
      goTopRight(current, id);
      break;

    case "bottom-left":
      goBottomLeft(current, id);
      break;

    case "bottom-right":
      goBottomRight(current, id);
      break;
  }
};

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const action = btn.id;
    swapBox(action);
  });
});
