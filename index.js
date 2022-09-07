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
  const actions = ['Bow & Arrow', 'Sword', 'Shield'];
  return actions[randomNum - 1]
}


//User Action

//Bow and Arrow
let bow = document.getElementById('bow')
bow.addEventListener('click', bowAction)

function bowAction() {
  playRound(computerAction, 'Bow & Arrow')
}

let shield = document.getElementById('shield')
bow.addEventListener('click', shieldAction)

function shieldAction() {
  playRound(computerAction(), 'Shield')
}

let sword = document.getElementById('sword')
bow.addEventListener('click', swordAction)

function swordAction() {
  playRound(computerAction(), 'Sword')
}


//Play round
function playRound(compAction, userAction) {
  if (compAction === userAction) {
    console.log('tie')
    return;
  }

  if (userAction === 'Bow & Arrow' && compAction === 'Shield') {
    console.log('Your oponent deflects your arrow with his shield, and strikes you with sword')
  }
}