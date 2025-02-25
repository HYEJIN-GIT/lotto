
//1. Input에 값을 입력 했을 때, 값 넘어가게 하기
//2. 버튼 눌렀을 때, 숫자가 6개가 들어가 있지 않으면 경고문 뜨게 하기
//3. 숫자가 1~45까지만 입려 가능하게 하기
//4. 숫자 입력 후, 당첨 숫자 및 보너스 숫자가 공안에 들어가게 하기

let inputArea = document.getElementById("input-value")
let randomBtn = document.getElementById("random-btn")
let result = document.getElementById("result")
let bonus = document.getElementById("bonus")
let clickAble = true
let resetBtn = document.getElementById("reset")


resetBtn.addEventListener("click",reset)
randomBtn.addEventListener("click",()=>{

    let inputValue = inputArea.value
  

   if(!inputValue.trim()){
    return alert("숫자를 입력하세요.")
   }
   let numbers = inputValue.split(",").map((item)=>item.trim())
   if(numbers.length !==6){
    return alert("숫자를 6개 입력하세요")
   }
   
   if(new Set(numbers).size !== 6){
    return alert("중복된 숫자입니다")
   }
   if(numbers.find((item)=> item>45 || item<1)){
    return alert("1부터 45까지의 숫자를 입력하세요.")
   }

   let randomList = Array(45).fill().map((item,index)=>index)
   let selectNum = []

   for(let i=1;i<8;i++){
        let randomNum = Math.floor(Math.random()*randomList.length +1)
        let resultList = randomList.splice(randomNum,1)
        selectNum.push(resultList)
   }
   let winsBall = selectNum.slice(0,6).sort((a,b)=>a-b)
   let bonusNum = selectNum[6]

   console.log(winsBall)
   console.log(bonus)

   for(let i=0;i<winsBall.length;i++){
    setTimeout(() => {
                const ball = document.createElement('div');
                ball.className = 'ball';
                ball.textContent = winsBall[i];
                result.appendChild(ball);
                if(winsBall[i]<10){
                    ball.style.backgroundColor = "yellow"
                    ball.style.color = "black"
                }else if(winsBall[i]<20){
                    ball.style.backgroundColor = "blue"
                   
                }else if(winsBall[i]<30){
                    ball.style.backgroundColor = "green"
                   
                }else{
                    ball.style.backgroundColor = "orange"
                }
            }, 1000 * (i +1));
   }
  
setTimeout(() => {
    const ball = document.createElement('div');
                ball.className = 'ball';
                ball.textContent = bonusNum
                bonus.appendChild(ball);
             
}, 7000);


setTimeout(() => {
    let winsNum = 0

    for(let i=0;i<winsBall.length;i++){
       if(winsBall.includes(numbers)){
           winsNum++
       }
    }
    
   if(winsNum == 6){
       alert("1등 당첨을 축하드립니다.")
   }else if(winsNum ==5){
       if(numbers.includes(bonus)){
           alert("보너스 공으로 2등 로또 당첨을 축하드립니다! ")
       }else{
           alert("3등 로또 당첨을 축하드립니다!")
       }
   }else if(winsNum ===4){
       alert("4등 5만원 당첨을 축하드립니다!")
   }else if(winsNum ===3){
       alert("5등 5천원 당첨을 축하드립니다!")
   }else{
       alert("낙첨입니다.")
   }
   
}, 8000);
if(!clickAble){
    return
}
clickAble = false
result.innerHTML = "당첨 숫자 : "
bonus.innerHTML = "보너스 숫자 : "


})

function reset(){
    inputArea.value=" "

   
    
}

