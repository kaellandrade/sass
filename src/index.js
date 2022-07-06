import _ from 'lodash';
import './style/main.scss';

function component() {
	const element = document.createElement('h1');
	element.innerHTML = _.join(['Hello', 'webpack and sass'], ' ');
	return element;
}

function renderBoxs(numberBox = 15) {
	const boxContainerElement = document.createElement('div');
	boxContainerElement.classList.add('container');

	const boxElementsList = [];
	for (let i = 1; i <= numberBox; i++) {
		const newBox = document.createElement('div');
		newBox.innerHTML = `Dynamic box ${i}`;
		newBox.classList.add('box');
		boxElementsList.concat(newBox);
		boxContainerElement.appendChild(newBox);
	}
	document.body.appendChild(boxContainerElement);
}

document.body.appendChild(component());
renderBoxs();
