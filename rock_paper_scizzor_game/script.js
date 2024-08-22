const guess = ["stone" , "paper" , "scizzor"]

let ur_score = 0;
let com_score = 0;

const game_block = document.querySelector('.img-wrapper')
const colors = ["#0D7C66", "#FFBE98" , "#C0C78C"]
for(let i=0;i<colors.length;i++)
{
    
    game_block.children[i].style.backgroundColor = colors[i]
    
}
const result = document.querySelector("#result")


const your_score = document.querySelector('#your-score')
const computer_score = document.querySelector('#computer-score')

const reset = document.querySelector("#reset")
reset.addEventListener('click',function(){
    location.reload()
})


game_block.addEventListener('click',function(e){
    let random = Math.floor(Math.random() * 3)
    // console.log(guess[0])
    let computer_guess = guess[random]
    let our_guess = e.target.id
    console.log(our_guess)
    console.log(computer_guess)
    if( our_guess === computer_guess)
    {
        ur_score++
        your_score.innerHTML = ur_score
        result.style.color = "green"
        result.innerHTML = "win"
        
        
    }
    else{
        com_score++
        computer_score.innerHTML = com_score
        result.style.color = "red"
        result.innerHTML = "Loss"
    }
})
