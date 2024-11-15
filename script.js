document.getElementById('revealButton').addEventListener('click', function() {
    const funFactsList = document.getElementById('funFactsList');
    if (funFactsList.classList.contains('hidden')) {
        funFactsList.classList.remove('hidden');
    } else {
        funFactsList.classList.add('hidden');
    }
});
