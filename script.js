// Button click
document.getElementById('clickButton').addEventListener('click', () => {
    alert('Button clicked!');
});

// Hover effect
document.getElementById('hoverDiv').addEventListener('mouseover', () => {
    document.getElementById('hoverDiv').style.backgroundColor = 'lightblue';
});
document.getElementById('hoverDiv').addEventListener('mouseout', () => {
    document.getElementById('hoverDiv').style.backgroundColor = '';
});

// Keypress detection
document.getElementById('keypressInput').addEventListener('keypress', (event) => {
    console.log(`Key pressed: ${event.key}`);
});

// Secret action (double-click)
document.getElementById('secretAction').addEventListener('dblclick', () => {
    alert('Secret action triggered!');
});