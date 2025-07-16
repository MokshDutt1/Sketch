// Select the container and button
const container = document.querySelector('.container');
const clearBtn = document.getElementById('clearBtn');

// Function to create the 16x16 grid
function createGrid() {
  for (let i = 0; i < 16 * 16; i++) {
    const cell = document.createElement('div'); // Create cell div
    cell.classList.add('cell'); // Add 'cell' class
    container.appendChild(cell); // Add cell to container

    // Color the cell when hovered
    cell.addEventListener('mouseover', () => {
      cell.style.backgroundColor = 'black';
    });
  }
}

// Function to clear the grid
function clearGrid() {
  const cells = document.querySelectorAll('.cell');
  cells.forEach(cell => {
    cell.style.backgroundColor = 'white'; // Reset color
  });
}

// Create grid on page load
createGrid();

// Add event listener to the clear button
clearBtn.addEventListener('click', clearGrid);
