let body = document.querySelector('body')

window.addEventListener('load', showHealth);

function showHealth() {
  let userHealthDiv = document.getElementById('userHealth')
  let compHealthDiv = document.getElementById('compHealth')
  createHealth(userHealthDiv, compHealthDiv);
}

function createHealth(userHealthContainer, compHealthContainer) {
  userHealthContainer.style.display = 'flex'
  compHealthContainer.style.display = 'flex'

  for (let i = 0; i < 5; i++) {
    let healthBlock = document.createElement('div')
    healthBlock.style.backgroundColor = 'green'
    healthBlock.style.height = '50px';
    healthBlock.style.width = '50px'
    healthBlock.style.border = '1px solid black'
    userHealthContainer.append(healthBlock)
  }

  for (let i = 0; i < 5; i++) {
    let healthBlock = document.createElement('div')
    healthBlock.style.backgroundColor = 'green'
    healthBlock.style.height = '50px';
    healthBlock.style.width = '50px'
    healthBlock.style.border = '1px solid black'
    compHealthContainer.append(healthBlock)
  }
}



//Computer action

function computerAction() {
  let randomNum = Math.ceil(Math.random() * 3);
  const actions = ['Bow', 'Sword', 'Shield'];
  return actions[randomNum - 1]
}


//User Action
function userAction() {

}


//Play round

function playRound(computerAction, userAction) {

}