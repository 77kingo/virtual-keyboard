document.addEventListener('DOMContentLoaded', () => {
    const output = document.getElementById('output');
    const keyboard = document.getElementById('keyboard');
  
    // Define keys for the keyboard
    const keys = [
      '1', '2', '3', '4', '5', '6', '7', '8', '9', '0',
      'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P',
      'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L',
      'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'Space', 'Backspace'
    ];
  
    // Create keyboard buttons
    keys.forEach((key) => {
      const button = document.createElement('div');
      button.classList.add('key');
      button.textContent = key === 'Space' ? '␣' : key;
      button.addEventListener('click', () => handleKeyPress(key));
      keyboard.appendChild(button);
    });
  
    // Handle key press events
    function handleKeyPress(key) {
      if (key === 'Backspace') {
        output.value = output.value.slice(0, -1);
      } else if (key === 'Space') {
        output.value += ' ';
      } else {
        output.value += key;
      }
    }
  });
  