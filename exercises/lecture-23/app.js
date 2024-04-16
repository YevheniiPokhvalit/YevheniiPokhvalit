// Task 1
const primaryBtn = document.querySelector('.btn-primary');
primaryBtn.onclick = function() {
    const alertElement = document.getElementById('alert');
    alertElement.classList.add('alert-primary');
    alertElement.textContent = 'A simple primary alert—check it out!';
};

// Task 2
const secondaryBtn = document.querySelector('.btn-secondary');
secondaryBtn.addEventListener('click', function() {
    const alertElement = document.getElementById('alert');
    alertElement.classList.add('alert-secondary');
    alertElement.textContent = 'A simple secondary alert—check it out!';
});

// Task 3
const successBtn = document.querySelector('.btn-success');
successBtn.addEventListener('mouseover', function() {
    const alertElement = document.getElementById('alert');
    alertElement.classList.add('alert-success');
    alertElement.textContent = 'A simple success alert—check it out!';
});
successBtn.addEventListener('mouseout', function() {
    const alertElement = document.getElementById('alert');
    alertElement.classList.remove('alert-success');
    alertElement.textContent = '';
});

// Task 4
const dangerBtn = document.querySelector('.btn-danger');
dangerBtn.addEventListener('focus', function() {
    const alertElement = document.getElementById('alert');
    alertElement.classList.add('alert-danger');
    alertElement.textContent = 'A simple danger alert—check it out!';
});
dangerBtn.addEventListener('focusout', function() {
    const alertElement = document.getElementById('alert');
    alertElement.classList.remove('alert-danger');
    alertElement.textContent = '';
});

// Task 5
const darkModeBtn = document.querySelector('.btn-dark');
const lightModeBtn = document.querySelector('.btn-light');
const body = document.body;

function toggleMode() {
    body.classList.toggle('dark-mode');
    darkModeBtn.classList.toggle('hide');
    lightModeBtn.classList.toggle('hide');
}

darkModeBtn.addEventListener('click', toggleMode);
lightModeBtn.addEventListener('click', toggleMode);

// Task 6
const infoBtn = document.querySelector('.btn-info');
infoBtn.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        const alertElement = document.getElementById('alert');
        alertElement.classList.add('alert-info');
        alertElement.textContent = 'A simple info alert—check it out!';
    }
});

// Task 7
const cardTitles = document.querySelectorAll('.card-title');
for (let i = 0; i < cardTitles.length; i++) {
    console.log(cardTitles[i].textContent);
}

// Task 8
const addToCartBtns = document.querySelectorAll('.add-to-cart');
for (let i = 0; i < addToCartBtns.length; i++) {
    addToCartBtns[i].addEventListener('click', function() {
        const cardTitle = this.parentNode.querySelector('.card-title');
        console.log(cardTitle.textContent);
    });
}
