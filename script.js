const clearInputs = () => {
    document.querySelector('#inputLines').value = '';
    document.querySelector('#inputColumns').value = ''
  }
  
  const generateTable = () => {
    const lines = document.querySelector('#inputLines').value;
    const columns = document.querySelector('#inputColumns').value;
    const table = document.querySelector('.table-content');
  
    table.innerHTML = '';
  
    for (let i = 1; i <= lines; i++) {
      const line = document.createElement('tr');
      for (let j = 1; j <= columns; j++) {
        const column = document.createElement('td');
        if (j % 2 === 0) column.style.backgroundColor = 'green';
        if (j % 2 !== 0) column.style.backgroundColor = 'yellow';
        column.innerText = `${i} : ${j}`
        line.appendChild(column);
      }
      table.appendChild(line);
    }
  
    clearInputs();
  }
  
  window.onload = () => {
    document.querySelector('.generate-button').addEventListener('click', generateTable);
  }
    document.querySelector('.generate-button').addEventListener('click', generateTable); 