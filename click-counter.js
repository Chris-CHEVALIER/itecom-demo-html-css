const counterLabel = document.getElementById('counter-label')
const counterBtn = document.getElementById('counter-btn')

let count = 0
counterBtn.addEventListener('click', () => {
  count++
  counterLabel.textContent = count
})
