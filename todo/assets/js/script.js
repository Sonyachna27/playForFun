document.addEventListener("DOMContentLoaded", () => {
	formSubmit();
	removeWork();
});

const addListItem = (data) => {
	const inputData = data;
	const list = document.querySelector('#list');
	let createListItem = document.createElement('li');
	createListItem.innerText = inputData;
	list.appendChild(createListItem);
};

const formSubmit = () => {
	const formInput = document.querySelector('input[type="text"]');
	const form = document.querySelector('.form__container form');
	let inputData = ""; 

	formInput.addEventListener('input', (data) => {
			inputData = data.target.value;
	});

	form.addEventListener('submit', (e) => {
			e.preventDefault();
			addListItem(inputData); 
			formInput.value = ""; 
	});
};

const removeWork = () => {
	const list = document.querySelector('#list'); 

	list.addEventListener('click', (event) => {
			
			if (event.target.tagName === 'LI') {
					event.target.classList.toggle('remove');
			}
	});
};

