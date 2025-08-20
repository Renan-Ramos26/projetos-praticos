const display = document.getElementById('display')
const botao = document.querySelector('button')

botao.forEach(btn => {
    btn.addEventListener('click', () => {
        const value = btn.textContent;

        if (value === 'C') {
            display.value = '';
        }
        else if (value === '=') {
            try {
                display.value = eval(display.value); //Calcula Expressão
            } catch {
                display.value = 'Erro';
            }
        }
        else {
            display.value += value;
        }
    });
});