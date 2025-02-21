const form = document.querySelector("form")
const result = document.querySelector("result")
const bonus = document.querySelector("bonus")

form.addEventListener("submit",(event)=>{
    event.preventDefault();
    const string = event.target.input.value
    
    if(!string.trim()){
        return alert("숫자를 입력하시요.")
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


    const candidate = Array[45].fill().map((v,i)=>i+1);

    const shuffle = [];
    while(candidate.length >0){
        const random =  Math.floor(Math.random()*candidate.length)
        const spliceArray = candidate.splice(random,1)
        const value = spliceArray[0]
        shuffle.push(value)
    }
    console.log(shuffle)
    const winBalls = shuffle.slice(0,6).sort((a,b)=>a-b)
    const bonus = shuffle[6]
    console.log(winBalls,bonus)    

})


