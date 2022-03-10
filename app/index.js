const scroll = function () {
	const form = document.getElementById('form');
	form.scrollIntoView();
};

const handleClickCheckBox = e => {
	const { name, value, id } = e.currentTarget;
	const priceP = document.getElementById('price-p');

	if (id === 'package-1-year') {
		const p100y = document.getElementById('package-100-year');
		p100y.checked = false;
		e.currentTarget.checked = true;
		priceP.textContent = '989.000 VND';
	}
	else {
		const p1y = document.getElementById('package-1-year');
		p1y.checked = false;
		e.currentTarget.checked = true;
		priceP.textContent = '1.995.000 VND';
	}
};

const handleSubmit = () => {
	let flag = true;

	// check checkbox
	const p1y = document.getElementById('package-1-year').checked;
	const p100y = document.getElementById('package-100-year').checked;
	const priceP = document.getElementById('price-p');
	if (!p1y && !p1y) {
		priceP.textContent = 'Vui Lòng Chọn Gói Đăng Ký';
		flag = false;
	}

	// check input
	const iName = document.getElementById('i-name');
	if (iName.value.length <= 0) {
		iName.parentNode.querySelector('.label-error').textContent = 'Vui Lòng Nhập Họ Tên';
		flag = false;
	}
	else {
		iName.parentNode.querySelector('.label-error').textContent = '';
	}

	const iPhone = document.getElementById('i-phone');
	const regP = new RegExp(/^\d{10}$/, 'g');
	if (!iPhone.value.match(regP)) {
		iPhone.parentNode.querySelector('.label-error').textContent = 'Vui Lòng Nhập Số Điện Thoại';
		flag = false;
	}
	else {
		iPhone.parentNode.querySelector('.label-error').textContent = '';
	}

	const iEmail = document.getElementById('i-email');
	const regE = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
	if (!iEmail.value.match(regE)) {
		iEmail.parentNode.querySelector('.label-error').textContent = 'Vui Lòng Nhập Email';
		flag = false;
	}
	else {
		iEmail.parentNode.querySelector('.label-error').textContent = '';
	}

	if (flag) {
		alert('Đăng Ký Thành Công');

		p1y.checked = false;
		p100y.checked = false;
		priceP.textContent = '';

		iEmail.value = '';
		iName.value = '';
		iPhone.value = '';
	}
};

(main = () => {
	// handleScroll
	const btnDKN = document.getElementById('btn-dkn');
	const btnDKNBottom = document.getElementById('button-dkn-bottom');
	btnDKN.addEventListener('click', scroll);
	btnDKNBottom.addEventListener('click', scroll);

	// click checkbox
	const p1y = document.getElementById('package-1-year');
	const p100y = document.getElementById('package-100-year');
	p1y.addEventListener('click', handleClickCheckBox);
	p100y.addEventListener('click', handleClickCheckBox);

	// handleSubmit
	const btnGDK = document.getElementById('btn-gdk');
	btnGDK.addEventListener('click', handleSubmit);
})();
