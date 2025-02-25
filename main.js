
//1. Input에 값을 입력 했을 때, 값 넘어가게 하기
//2. 버튼 눌렀을 때, 숫자가 6개가 들어가 있지 않으면 경고문 뜨게 하기
//3. 숫자가 1~45까지만 입려 가능하게 하기
//4. 숫자 입력 후, 당첨 숫자 및 보너스 숫자가 공안에 들어가게 하기

let inputArea = document.getElementById("input-value")
let randomBtn = document.getElementById("random-btn")

randomBtn.addEventListener("click",()=>{

    let inputValue = inputArea.value
    let history = []
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

   let randomList = Array(45).fill().map((item,index)=>index+1)
   let selectNum = []

   for(let i=1;i<8;i++){
        let randomNum = Math.floor(Math.random()*randomList.length)
        console.log(randomNum)
   }



})



