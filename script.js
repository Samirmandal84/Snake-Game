import {update as updateSnake , draw as drawSnake, sankeSpeed, getSnakeHead, snakeIntersection} from './snake.js';
import {update as updateaFood, draw as drawFood} from './food.js'
import {outsideGrid} from './grid.js'

let lastRenderTime = 0
let gameOver = false
const gameBoard = document.getElementById('game-body')
function main (currentTime){
    if(gameOver){
       if(confirm(`Game Over Press Ok to Restart.`)){
        window.location = '/'
       }
       return
    }
    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime)/1000;
    if(secondsSinceLastRender < 1/sankeSpeed) return

    console.log('Render');
    lastRenderTime = currentTime;

    update()
    draw()
}
window.requestAnimationFrame(main)

function update(){
 updateSnake()
 updateaFood()
 checkDeath()
}

function draw(){
    gameBoard.innerHTML = ''
    drawSnake(gameBoard)
    drawFood(gameBoard)
}
function checkDeath(){
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}