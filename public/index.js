const add = document.querySelector('.add');
const minus = document.querySelector('.minus');
const imgInput = document.querySelector('.p');
console.log(imgInput);

imgInput.addEventListener('change', () => {
	const [file] = imgInput.files;
	if (file) {
		document.querySelector('.i').src = URL.createObjectURL(file);
	}
	showImage();
});

const number = document.querySelector('.number');
const incrementBy = 5;

if (number === null) null;

add.addEventListener('click', e => {
	number.stepUp();
});
minus.addEventListener('click', e => {
	number.stepDown();
});

function showImage() {
	const imgType = document.querySelector('.p');
	const hiddenType = document.querySelector('[data-hidden]');
	const [file] = imgType.files;
	const previewImg = document.querySelector('.blah');
	previewImg.src = URL.createObjectURL(file);
	hiddenType.value = previewImg.src;
	console.log(hiddenType.value);
}
