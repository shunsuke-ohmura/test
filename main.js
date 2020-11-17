const button = document.getElementById('my-button');
const box = document.getElementById('box');

button.addEventListener('click', () => {
  // 0以上1未満のランダムな数値をnum変数に代入する
  const num = Math.random();

  if (num >= 0.6) {
    // numが0.5以上の場合
    box.innerHTML = `王道の<br>洋食！`;
  }else if (num >= 0.3) {
    // numが0.5未満の場合
    box.innerHTML = `お決まりの<br>和食！`;
  } else {
    box.innerHTML = `たまには<br>中華！`;
  }
});