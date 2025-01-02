// script.js

document.querySelectorAll('.category').forEach(category => {
    category.addEventListener('click', () => {
        alert(`You selected ${category.querySelector('span').textContent}`);
    });
});
