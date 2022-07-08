import _ from 'lodash';
import './style/main.scss';

function component() {
	const element = document.createElement('h1');
	element.classList.add('success');
	element.innerHTML = _.join(['Hello', 'webpack and sass'], ' ');
	return element;
}

function componentBtnTop() {
	const btnTop = document.createElement('button');
	btnTop.classList.add('btn-top');
	btnTop.addEventListener('click', _ => window.scrollTo({top: 0, behavior: 'smooth'}))
	return btnTop;
}

function renderBoxs(numberBox = 100) {
	const zeroPad = (num, places) => String(num).padStart(places, '0');

	const boxContainerElement = document.createElement('div');
	boxContainerElement.classList.add('container');

	const boxElementsList = [];
	for (let i = 1; i <= numberBox; i++) {
		const newBox = document.createElement('div');
		const newTitle = document.createElement('h5');

		newTitle.innerHTML = `Box number ${zeroPad(i, 2)}`;
		newBox.appendChild(newTitle);
		newBox.classList.add('box');
		boxElementsList.concat(newBox);
		boxContainerElement.appendChild(newBox);
	}
	document.body.appendChild(boxContainerElement);
}

document.body.appendChild(component());
document.body.appendChild(componentBtnTop());
renderBoxs();
