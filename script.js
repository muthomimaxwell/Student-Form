
const studentInput = document.getElementById('studentId');
const errorMsg = document.getElementById('error-msg');

studentInput.addEventListener('input', () => {
  if (/^\d*$/.test(studentInput.value)) {
    errorMsg.style.display = 'none'; // valid input
  } else {
    errorMsg.style.display = 'inline'; // invalid input
  }
});

