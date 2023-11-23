
console.log('Hej, tu Ola!');

const firstName = 'Ola';
const age = 25;

console.log(`Nazywam sie ${firstName} i mam ${age} lat.`);

const header = document.querySelector('.page-header__heading--js');

header.innerHTML = `Nazywam sie ${firstName} i mam ${age} lat.`

console.log(header.style)

header.style.color = 'red'

const hiddenMessage = document.querySelector('.hidden-message--js');

hiddenMessage.innerHTML = 'To jest ukryta wiadomosc, ktora nie pojawia sie w glownym pliku html :)';

hiddenMessage.style.color = 'hotpink'