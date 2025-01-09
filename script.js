function calculate() {
  const input = document.getElementById('calcInput').value;
  try {
      const result = eval(input);
      document.getElementById('calcResult').innerText = `نتیجه: ${result}`;
  } catch (e) {
      document.getElementById('calcResult').innerText = 'خطا در محاسبه!';
  }
}

function convertLength() {
  const length = parseFloat(document.getElementById('lengthInput').value);
  const unit = document.getElementById('unitSelect').value;
  let result;
  
  if (unit === 'cmToM') {
      result = length / 100;
      document.getElementById('conversionResult').innerText = `${length} سانتی‌متر = ${result} متر`;
  } else if (unit === 'mToCm') {
      result = length * 100;
      document.getElementById('conversionResult').innerText = `${length} متر = ${result} سانتی‌متر`;
  }
}

function calculateSquareRoot() {
  const number = parseFloat(document.getElementById('sqrtInput').value);
  if (number >= 0) {
      const result = Math.sqrt(number);
      document.getElementById('sqrtResult').innerText = `جذر ${number} = ${result}`;
  } else {
      document.getElementById('sqrtResult').innerText = 'عدد وارد شده باید بزرگ‌تر یا مساوی صفر باشد!';
  }
}