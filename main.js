const button = document.querySelector('button');
const input = document.querySelector('input[type="text"]');
const list = document.querySelector('ul');

button.addEventListener('click', () => {
  if (input.value != '') {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(input.value));
    list.appendChild(li);
    input.value = '';
  }
});
list.addEventListener('click', (e) => {
  if (e.target.tagName === "LI"){
    e.target.classList.toggle("checked")
 }
});
function removeAll(){
  while(list.firstChild){
    list.removeChild(list.firstChild);
  }
}
document.getElementById('deleteAll').addEventListener('click', removeAll);

let turn = 1;
let clicks = 0;
let boxes = document.querySelectorAll(".insideBox");
document.querySelector(".overAllBox").addEventListener("click",item =>{
  let x = event.target;
  x.innerHTML = (turn==1)? "X" : "O";
  turn = (turn==1)? 2 : 1;
  checkIfWinner(x.innerHTML);
})
