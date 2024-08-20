let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let NewGameBtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
 let turn0 = true;    //turn0 and turnx
 const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
 ];
 const resetGame = () =>{
    turn0 = true;
    enableboxes();
    msgcontainer.classList.add("hide");
 };
 boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        // console.log("box was clicked");
        if(turn0){
            box.innerText = "O";
            turn0 = false;
        }else{
            box.innerText = "x";
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();
    })
 });
 const disableboxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
 };
 const enableboxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
 };
 const showWinner = (winner) =>{
    msg.innerText = `congratulations winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
 }
  const checkWinner = () =>{
    for(let pattern of winPattern){
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(boxes[pattern[0]].innerText,
        //     boxes[pattern[1]].innerText,
        //     boxes[pattern[2]].innerText);

        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        if(pos1Val != "" && pos2Val !="" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("winner",pos1Val);
                showWinner(pos1Val);
            }
        }
    }
  }


// one dimmensional Array
// let arr = ["potatoes","banana","leave"];


// 2D arrays 
// let arr2 = [["potaatoes","banana"],["pants","shirts"],["bedroom","loon"]];
// console.log(arr2);

NewGameBtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);