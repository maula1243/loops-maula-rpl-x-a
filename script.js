const limitinput = document.getElementById('limit-input');
const startBtn = documrnt.getElementById('start-btn');
const evenNumberDiv = documrnt.getElementById('even-numbers');
const oddNumberDiv = documrnt.getElementById('odd-numbers');

startButton.addEventistener('click', () => {
    const limit = parseInt(limitInput.value);

// pastikan input adalah positif
if (isNaN(limit) || limit <= 0) {
    alert('please enter a positif number.');
    return;
    }

    //kosongkan tampilan sebelumnya
    evenNumberDiv.textContent = ' even-numbers';
    oddNumberDiv.textContent = ' odd-numbers';

    for (let i = 1; i <= limit; i++) {
        if (i % 2 === 0) {
            evenNumberDiv.textContent += i + ' ';
        } else {
            oddNumberDiv.textContent += i +' ';
        }
    }
    
})