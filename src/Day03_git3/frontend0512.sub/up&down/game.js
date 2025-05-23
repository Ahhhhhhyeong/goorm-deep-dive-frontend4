// 랜덤값 생성
const randomResult = Math.floor(Math.random() * 100) + 1;

// 폼과 입력값, 정답표출부분 
const form = document.getElementById('gameForm');
const input = document.getElementById('guess');
const feedback = document.getElementById('feedback');

// submit 이벤트 헨들링
form.addEventListener('submit', function(e) {
   e.preventDefault();

   // 초기화
   feedback.innerText = '';
   const userGuess = parseInt(input.value);

   console.log(randomResult);
   if(userGuess == isNaN || userGuess < 1 || userGuess > 100){
        feedback.innerText = '1부터 100까지의 숫자를 입력해주세요';
        return;
   }

   if(randomResult < userGuess) {
        feedback.innerText = 'Down!';
   }
   else if(randomResult > userGuess){
        feedback.innerText = 'Up!';
   }
   else {
        feedback.innerText = '정답입니다!';
   }
});