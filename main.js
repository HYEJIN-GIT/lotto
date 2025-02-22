
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











  