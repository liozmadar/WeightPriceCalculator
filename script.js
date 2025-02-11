// קבלת האלמנטים מה-HTML
const baseAmountInput = document.getElementById('baseAmount'); // שדה הכמות הבסיסית
const pricePerUnitInput = document.getElementById('pricePerUnit'); // שדה המחיר ליחידה
const targetAmountInput = document.getElementById('targetAmount'); // שדה הכמות הרצויה
const calculateButton = document.getElementById('calculateButton'); // כפתור החישוב
const resultDiv = document.getElementById('result'); // תיבת התוצאה

// פונקציה לחישוב המחיר
function calculatePrice() {
  // קריאת ערכי הקלט
  const baseAmount = parseFloat(baseAmountInput.value); // המרת הכמות הבסיסית למספר
  const pricePerUnit = parseFloat(pricePerUnitInput.value); // המרת המחיר ליחידה למספר
  const targetAmount = parseFloat(targetAmountInput.value); // המרת הכמות הרצויה למספר

  // בדיקת תקינות
  if (
    isNaN(baseAmount) || baseAmount <= 0 ||
    isNaN(pricePerUnit) || pricePerUnit <= 0 ||
    isNaN(targetAmount) || targetAmount <= 0
  ) {
    resultDiv.textContent = 'Please fill in all fields with valid values.';
    resultDiv.style.color = 'red'; // צבע שגיאה
    return;
  }

  // חישוב המחיר הכולל
  const unitPrice = pricePerUnit / baseAmount; // חישוב המחיר ליחידה אחת
  const totalPrice = (unitPrice * targetAmount).toFixed(2); // חישוב ושמירה עם 2 ספרות

  // הצגת התוצאה
resultDiv.innerHTML = `The total price for <strong>${targetAmount} kg</strong> of Product is <strong>${totalPrice} $</strong>.`;

  resultDiv.style.color = 'black'; // צבע כחול
}

// מאזינים לשינויים באינפוטים
baseAmountInput.addEventListener('input', calculatePrice);
pricePerUnitInput.addEventListener('input', calculatePrice);
targetAmountInput.addEventListener('input', calculatePrice);

// מאזין ללחיצה על כפתור החישוב
calculateButton.addEventListener('click', calculatePrice);
