const toggleicon = document.querySelector('.toggle-icon-2');

toggleicon.addEventListener('click', () => {
    toggleicon.classList.toggle('bxs-sun');
    document.body.classList.toggle('dark-mode')
})
