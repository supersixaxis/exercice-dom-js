let copie = document.getElementById('copy')
let model = document.getElementById('model')
let numberInput = document.getElementById('numberInput')
let number = document.getElementById('number')
let carre = document.getElementById('carre')
let cube = document.getElementById('cube')
let square = document.getElementById('square')
let moveSquare = document.getElementById('moveSquare')

model.addEventListener('change', (e) => {
copie.value = e.target.value
});

numberInput.addEventListener('change', (e) => {
    number.textContent = e.target.value
    carre.textContent = e.target.value * 10
    cube.textContent = e.target.value * 100
})

square.style.backgroundColor = 'blue';
square.style.width = '100px';
square.style.height = '100px';


let isMovedDown = false;
let isMovedRight = false;
let isMovedTop = false;

moveSquare.addEventListener('click', (e) => {
    console.log(e.target)
    if (!isMovedDown){
        square.style.position = "absolute"
        square.style.bottom = "400px"
        isMovedDown = true
    } else if (!isMovedRight){
        square.style.position = "absolute"
        square.style.left = "200px"
        isMovedRight = true
    } else if (!isMovedTop){
        square.style.position = "absolute"
        square.style.top = "300px"
        isMovedTop = true
    } else if (isMovedDown === true && isMovedRight === true && isMovedTop === true){
         square.style.position = "absolute"
         square.style.left = "initial";
         square.style.top = "initial";
         isMovedDown = false;
         isMovedRight = false;
         isMovedTop = false;
    }

})