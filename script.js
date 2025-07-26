//your JS code here. If required.
const inputs = document.querySelectorAll('.code');
window.addEventListener('load', () => {
  document.getElementById('code-1').focus();
});

inputs.forEach((input, index) => {
  input.addEventListener('input', (e) => {
    const value = e.target.value;

    if (!/^[0-9]$/.test(value)) {
      e.target.value = '';
      return;
    }
    if (value && index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace') {
      if (e.target.value === '' && index > 0) {
        inputs[index - 1].focus();
        inputs[index - 1].value = '';
      }
    }
  });
});
