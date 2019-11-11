let turn = 1;
let clicks = 0;
let boxes = document.querySelectorAll(".insideBox");
document.querySelector(".overAllBox").addEventListener("click",item =>{
  let x = event.target;
  x.innerHTML = (turn==1)? "X" : "O";
  turn = (turn==1)? 2 : 1;
  checkIfWinner(x.innerHTML);
})

function checkIfWinner(whoWon){
  if (boxes[0].innerHTML==whoWon&&boxes[1].innerHTML==whoWon&&boxes[2].innerHTML==whoWon){
    alert(whoWon+" is the winner");
    location.reload();
  }else if (boxes[3].innerHTML==whoWon&&boxes[4].innerHTML==whoWon&&boxes[5].innerHTML==whoWon) {
    alert(whoWon+" is the winner");
    location.reload();
  }else if (boxes[6].innerHTML==whoWon&&boxes[7].innerHTML==whoWon&&boxes[8].innerHTML==whoWon) {
    alert(whoWon+" is the winner");
    location.reload();
  }else if (boxes[0].innerHTML==whoWon&&boxes[3].innerHTML==whoWon&&boxes[6].innerHTML==whoWon) {
    alert(whoWon+" is the winner");
    location.reload();
  }else if (boxes[1].innerHTML==whoWon&&boxes[4].innerHTML==whoWon&&boxes[7].innerHTML==whoWon) {
    alert(whoWon+" is the winner");
    location.reload();
  }else if (boxes[2].innerHTML==whoWon&&boxes[5].innerHTML==whoWon&&boxes[8].innerHTML==whoWon) {
    alert(whoWon+" is the winner");
    location.reload();
  }else if (boxes[0].innerHTML==whoWon&&boxes[4].innerHTML==whoWon&&boxes[8].innerHTML==whoWon) {
    alert(whoWon+" is the winner");
    location.reload();
  }else if (boxes[2].innerHTML==whoWon&&boxes[4].innerHTML==whoWon&&boxes[6].innerHTML==whoWon) {
    alert(whoWon+" is the winner");
    location.reload();
  }
  else if(clicks == 9){
    location.reload(true)
  }
}
