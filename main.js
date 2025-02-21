const form = document.querySelector("form")
const result = document.querySelector("result")
const bonus = document.querySelector("bonus")
const candidate = []

form.addEventListener("submit",(event)=>{
    event.preventDefault();
    const string = event.target.input.value
   
  form.addEventListener("submit",(event)=>{
    for(let i=1;i<46;i++){
        candidate.push(i)
    }
    const candidate = Array(45).fill().map((v,i) =>i+1)
  })
    
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
})


