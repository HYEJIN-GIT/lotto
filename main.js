
//     const numbers = new Array(45).fill().map((a, i) => i+1 );
   
//     let selectNum = [];

// for(let i = 1; i < 8; i++){ // 보너스 숫자까지 해야하니 7개가 나와야함
//     let number = Math.floor(Math.random() * numbers.length);
//     let randomNum = numbers.splice(number, 1);
//     selectNum.push(randomNum);
// }

//   console.log(selectNum);
//   const bonusNum = selectNum.splice(6, 1); // 보너스 숫자
//   const winBalls = selectNum.sort((a ,b) => a-b); // 당첨 숫자

//   for(let i = 0; i < winBalls.length; i++){
//     setTimeout(() => {
//         const ball = document.createElement('div');
//         ball.className = 'ball';
//         ball.textContent = winBalls[i];
//         result.append(ball);
//     }, 1000 * (i +1));
//   }

const $form = document.querySelector("#form");
const $result = document.querySelector("#result");
const $bonus = document.querySelector("#bonus");


function colorize(number,$tag){
    if(number<10){
        $tag.style.color = 'white'
           $tag.style.backgroundColor = "red"
    }else if(number<20){
        $tag.style.backgroundColor = "orange"
    }else if(number<30){
        $tag.style.backgroundColor = "yellow"
    }else if(number<40){
        $tag.style.backgroundColor = "blue"
        $tag.style.color = 'white'
    }else{
         $tag.style.backgroundColor = "green"
        $tag.style.color = 'white'

    }
}



function drawBall(number,$parent){
    const $ball = document.createElement("div")
    $ball.className = "ball"
    colorize(number,$ball)
    $ball.textContent = number
    $parent.appendChild($ball)

}

const setTimeoutPromise = (ms)=> new Promise((resolve,reject)=>{

    setTimeout(resolve,ms)
}) 


let clickable = true;


$form.addEventListener("submit",async (event) =>{
    event.preventDefault();

    if(!clickable){
        return;
    }
clickable = false
$result.innerHTML = "당첨 숫자 :"
$bonus.innerHTML = "보너스 숫자 :"




    const string = event.target.input.value;
    if(!string.trim()){
        return alert("숫자를 입력하세요.")
    }
    const myNumbers = string.split(',').map((v)=> parseInt(v.trim()))
    if(myNumbers.length !== 6){
        return alert("숫자를 6개 입력하시요.")
    }
   
    if(new Set(myNumbers).size !== 6){
        return alert("중복된 숫자입니다.")
    }
    if(myNumbers.find((v)=>v >45 || v<1)){
        return alert("1부터 45까지의 값만 입력할 수 있습니다..")
    }


    const candidate = Array(45).fill().map((v,i) => i+1);
    const shuffle = []
    while(candidate.length>0){ 
        const random =  Math.floor(Math.random()*candidate.length)
        const spliceArray = candidate.splice(random,1)
        const value = spliceArray[0]
        shuffle.push(value)
    }
    console.log(shuffle)
    const winBalls = shuffle.slice(0,6).sort((a,b)=>a-b)
    const bonus = shuffle[6]
    console.log(winBalls,bonus)   
    





for(let i=0; i<winBalls.length;i++){
    await setTimeoutPromise(1000)
      drawBall(winBalls[i],$result)
        
}
    await setTimeoutPromise(1000)
    drawBall(bonus,$bonus)

await setTimeoutPromise(0)

let count =0;
myNumbers.forEach((my)=>{
if(winBalls.includes(my)){
    count++
}
})

if(count ===6){
    alert("1등 로또 당첨을 축하드립니다!")
}else if(count ===5){
    if(myNumbers.includes(bonus)){
        alert("보너스 공으로 2등 로또 당첨을 축하드립니다! ")
    }else{
        alert("3등 로또 당첨을 축하드립니다!")
    }
}else if(count ===4){
    alert("4등 5만원 당첨을 축하드립니다!")
}else if(count ===3){
    alert("5등 5천원 당첨을 축하드립니다!")
}else{
    alert("낙첨입니다.")
}


clickable = true;


  
});










  