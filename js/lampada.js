// Criando variaveis para os botões e lampada
const turnOnOff = document.getElementById('turnOnOff')
const lamp = document.getElementById('lamp')

// Função para ver se a lampada esta ou nao quebrada
function isLampBroken() {
  return lamp.src.indexOf('quebrada') > -1
}

// Função para ligar a lampada
function lampOn() {
  if (!isLampBroken()) {
    lamp.src = 'images/ligada.jpg'
  }
}

// Função para desligar a lampada
function lampOff() {
  if (!isLampBroken()) {
    lamp.src = 'images/desligada.jpg'
  }
}

// Função para quebrar a lampada
function lampBroken() {
  lamp.src = 'images/quebrada.jpg'
}

// Função de ligar e desligar com um só botão
function lampOnOff() {
  if (turnOnOff.textContent == 'Ligar') {
    lampOn()
    turnOnOff.textContent = 'Desligar'
  } else {
    lampOff()
    turnOnOff.textContent = 'Ligar'
  }
}

// Capturar o click
turnOnOff.addEventListener('click', lampOnOff)
lamp.addEventListener('mouseover', lampOn)
lamp.addEventListener('mouseleave', lampOff)
lamp.addEventListener('dbclick', lampBroken)
