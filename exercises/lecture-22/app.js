// Task 1
const headers = document.querySelectorAll('h1');
console.log(typeof headers);
console.log(headers.length);
for (let i = 0; i < headers.length; i++) {
    console.log(headers[i]);
}

// Task 2
const firstParagraph = document.querySelector('#p1');
firstParagraph.style.backgroundColor = 'gold';

// Task 3
const secondParagraph = document.querySelector('#p2');
secondParagraph.style.backgroundColor = 'gold';
secondParagraph.style.color = 'blue';
secondParagraph.style.fontSize = '2rem';

// Task 4
const thirdParagraph = document.querySelector('#p3');
thirdParagraph.classList.add('third');

// Task 5
const fourthParagraph = document.querySelector('#p4');
fourthParagraph.classList.add('fourth', 'border');

// Task 6
const containers = document.querySelectorAll('.container');
for (let i = 0; i < containers.length; i++) {
    console.log(containers[i].firstElementChild);
}

// Task 7
for (let i = 0; i < containers.length; i++) {
    console.log(containers[i].firstElementChild.innerHTML);
}

// Task 8
const headers = document.querySelectorAll('.container header');
const classes = ['first', 'second', 'third', 'fourth'];
for (let i = 0; i < headers.length; i++) {
    switch (i) {
        case 0:
            headers[i].innerHTML = '<h1>' + headers[i].innerHTML + '</h1>';
            break;
        case 1:
            headers[i].innerHTML = '<h2>' + headers[i].innerHTML + '</h2>';
            break;
        case 2:
            headers[i].innerHTML = '<h3>' + headers[i].innerHTML + '</h3>';
            break;
        case 3:
            headers[i].innerHTML = '<h4>' + headers[i].innerHTML + '</h4>';
            break;
    }
}

// Task 9
for (let i = 0; i < headers.length; i++) {
    headers[i].classList.add(classes[i]);
}
