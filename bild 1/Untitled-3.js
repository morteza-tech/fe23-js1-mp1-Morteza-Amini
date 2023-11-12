const Rad = ['Rad 1', 'Rad 2', 'Rad 3', 'Rad 4', 'Rad 5', 'Rad 6'];

// Skapa en container för raderna
const container = document.createElement('div');
document.body.appendChild(container);

// Skapar h2-element för varje rad och sätter dess egenskaper
for (let i = 0; i < Rad.length; i++) {
  const h2El = document.createElement('h2');
  container.appendChild(h2El);

  h2El.innerText = Rad[i];

  // Sätt unik färg och border för varje rad
  h2El.style.margin = '5px';
  h2El.style.padding = '10px';
  h2El.style.borderRadius = '5px';
  
  // Centrera texten vertikalt och horisontellt
  h2El.style.display = 'flex';
  h2El.style.alignItems = 'center';
  h2El.style.justifyContent = 'center';

  // Justera storleken baserat på 
  const fontSize = `${10 + i * 15}px`;
  h2El.style.fontSize = fontSize;

  // Sätt textfärgen till blå
  h2El.style.color = 'blue';

  // Sätt bakgrundsfärgen 
  switch (i) {
    case 0:
      h2El.style.backgroundColor = 'lightgreen';
      break;
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      h2El.style.backgroundColor = 'lightblue'; 
      break;
    default:
      h2El.style.backgroundColor = 'lightblue';
  }
}
