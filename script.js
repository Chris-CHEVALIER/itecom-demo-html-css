const title = document.querySelector('h1')
const planetImgs = document.querySelectorAll('.planet-img')
/* const planetsTitle = document.getElementById("planets") */

title.textContent = 'Space2025'
title.style.color = 'dodgerblue'
planets.innerHTML =
  "<a href='https://www.youtube.com/watch?v=u8laNo8ZQ7M' target='_blank'>Les planètes 🪐</a>"

const newDiv = document.createElement('div') // <div></div>
const newParagraph = document.createElement('p') // <p></p>
newParagraph.textContent = 'Une formidable fusée spatiale !' // <p>Une formidable fusée spatiale !</p>
const newRocketImg = document.createElement('img') // <img />
newRocketImg.src =
  'https://upload.wikimedia.org/wikipedia/commons/d/d6/STS120LaunchHiRes-edit1.jpg'
// <img src='https://upload.wikimedia.org/wikipedia/commons/d/d6/STS120LaunchHiRes-edit1.jpg' />

newRocketImg.alt = 'Fusée spatiale'
// <img src='https://upload.wikimedia.org/wikipedia/commons/d/d6/STS120LaunchHiRes-edit1.jpg' alt="Fusée spatiale" />

newRocketImg.style.width = '260px'
// <img src='https://upload.wikimedia.org/wikipedia/commons/d/d6/STS120LaunchHiRes-edit1.jpg' alt="Fusée spatiale" style="width: 260px" />

newDiv.appendChild(newParagraph) // <div><p>Une formidable fusée spatiale !</p></div>
newDiv.appendChild(newRocketImg)
/* <div>
        <p>Une formidable fusée spatiale !</p>
        <img src='https://upload.wikimedia.org/wikipedia/commons/d/d6/STS120LaunchHiRes-edit1.jpg' alt="Fusée spatiale" />
    </div>
*/

document.body.appendChild(newDiv)

newDiv.removeChild(newParagraph)

const darkLightBtn = document.querySelector('#dark-light-btn')
darkLightBtn.addEventListener('click', () => {
  if (document.querySelector('header').style.backgroundColor == 'black') {
    document.querySelector('header').style.backgroundColor = 'white'
    document.querySelector('footer').style.backgroundColor = 'white'
    document.body.style.color = 'black'
    document.querySelectorAll('header a').forEach(a => {
      a.style.color = 'black'
    })
    document.querySelectorAll('footer a').forEach(a => {
      a.style.color = 'black'
    })
  } else {
    document.querySelector('header').style.backgroundColor = 'black'
    document.querySelector('footer').style.backgroundColor = 'black'
    document.body.style.color = 'white'
    document.querySelectorAll('header a').forEach(a => {
      a.style.color = 'white'
    })
    document.querySelectorAll('footer a').forEach(a => {
      a.style.color = 'white'
    })
  }
})

const hideElements = document.getElementById('hide-elements')
document.getElementById('jupiter-title').addEventListener('click', () => {
  if (hideElements.style.display == 'none') {
    hideElements.style.display = 'block'
  } else {
    hideElements.style.display = 'none'
  }
})
