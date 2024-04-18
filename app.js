const item1 = document.querySelector('.travelers1');
const item2 = document.querySelector('.organization1');
const item3 = document.querySelector('.employees1');
const travelers = document.querySelector('.travelers');
const organization = document.querySelector('.organization');
const employees = document.querySelector('.employees');
item1.classList.add('active');

travelers.addEventListener('click', () => {
    item1.classList.remove('active');
    item2.classList.remove('active');
    item3.classList.remove('active');

    item1.classList.add('active');

})
organization.addEventListener('click', () => {
    item1.classList.remove('active');
    item2.classList.remove('active');
    item3.classList.remove('active');

    item2.classList.add('active');

})
employees.addEventListener('click', () => {
    item1.classList.remove('active');
    item2.classList.remove('active');
    item3.classList.remove('active');

    item3.classList.add('active');

})