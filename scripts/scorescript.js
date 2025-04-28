document.getElementById('enter-Button').addEventListener('click', function() {
    const satInputValue = parseFloat(document.getElementById('satInput').value);
    const actInputValue = parseFloat(document.getElementById('actInput').value);
    const gpaInputValue = parseFloat(document.getElementById('gpaInput').value);
  
    if (isNaN(satInputValue) || isNaN(actInputValue) || isNaN(gpaInputValue)) {
      alert('Please enter valid SAT, ACT, and GPA scores.');
      return;
    }
  
    // Save all three scores into localStorage
    localStorage.setItem('userSAT', satInputValue);
    localStorage.setItem('userACT', actInputValue);
    localStorage.setItem('userGPA', gpaInputValue);
  
    // Then jump to school.html
    window.location.href = 'school.html';
  });