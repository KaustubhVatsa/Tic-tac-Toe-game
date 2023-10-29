console.log("Welcome to The Game")
let turnmusic = new Audio("ting.mp3")
let gameover = new Audio("gameovermusic.mp3")
let turn = "X"
let game = false;
//function to chnge turn 
const changeturn = ()=>{
    return turn === "X"?"O": "X"
}
// const checkwin = ()=>{
//     let boxtext = document.getElementsByClassName('boxtext');
//     let win = [
//         [0 , 1 , 2]
//         [3 , 4 , 5]
//         [6 , 7 , 8]
//         [0 , 3 , 6]
//         [1 , 4 , 7]
//         [2 , 5 , 8]
//         [0 , 4 , 8]
//         [2 , 4 , 6]
//     ]
//     win.forEach(e =>{
//         if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")){
//             document.querySelector('.info').innerText = boxtext[e[0]].innerText + "Won"
//             game = true
//         }
//     })
// }
const checkWin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
            game = true
            // document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
            // document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            // document.querySelector(".line").style.width = "20vw";
        }
    })
}


//game logic 
let boxes = document.getElementsByClassName("box")
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext')
    element.addEventListener('click', ()=>{
        if (boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeturn();
            turnmusic.play();
            checkWin();
            if(!game){
                document.getElementsByClassName("info")[0].innerText = "Turn For " + turn;
            }
        }
    })
})