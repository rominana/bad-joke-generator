import generateJoke from './generateJoke'
import './styles/main.scss'
import risa from './assets/risa.png'

const risaImg = document.getElementById('risaImg')
risaImg.src = risa

const jokeBtn = document.getElementById('jokeBtn')
jokeBtn.addEventListener('click', generateJoke)

generateJoke()