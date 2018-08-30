document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("identicon-form")
  form.addEventListener("submit", handleSubmit)
})

function handleSubmit(event) {
  event.preventDefault()
  // get and remove color from all blocks
  let allBlocks = document.querySelectorAll('span')
  allBlocks.forEach((item) => item.style.removeProperty('background-color'))

  let userInput = document.querySelector('input').value
  getNumbers(userInput)
  //  reset form
  document.getElementById('identicon-form').reset()

}

function getNumbers(userInput) {
  let numArray = md5.array(userInput)
  console.log(numArray)

  let color = `rgb(${numArray[0]}, ${numArray[1]}, ${numArray[2]})`
  squaresToColor(numArray, color)
}

function changeColor(color, blockId) {
  let block = document.getElementById(blockId)
  block.style.backgroundColor = color
}

function squaresToColor(numArray, color) {
  let leftSquares = ['0-0', '1-0', '2-0', '3-0', '4-0', '0-1', '1-1', '2-1', '3-1', '4-1']
  let rightSquares = ['0-4', '1-4', '2-4', '3-4', '4-4', '0-3', '1-3', '2-3', '3-3', '4-3']
  let middleSquares = ['0-2', '1-2', '2-2', '3-2', '4-2']
  for (i=0; i<=9; i++) {
    if (numArray[i] % 2 === 0) {
      changeColor(color, leftSquares[i])
      changeColor(color, rightSquares[i])
    }
  }
  
  let arrayForMiddle = numArray.slice(numArray.length - 5)
  for (i=0; i<=5; i++) {
    if (arrayForMiddle[i] % 2 === 0) {
      changeColor(color, middleSquares[i])
    }
  }

}
