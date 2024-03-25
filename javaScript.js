document.addEventListener('DOMContentLoaded', function() {
    const resultado = document.querySelector('.result'); 
    const buttons = document.querySelectorAll('button');

    let operaciones = []; 

    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const valorBoton = e.target.innerText;

            if (!isNaN(valorBoton) || valorBoton === '.') {
                resultado.value += valorBoton;
            } else if (valorBoton === 'AC') {
                resultado.value = '';
                operaciones = [];
            } else if (valorBoton === '=') {
				e.preventDefault();
                operaciones.push(resultado.value);
                const resultadoOperacion = eval(operaciones.join(''));
                resultado.value = resultadoOperacion;
                operaciones = [];
            } else {
                operaciones.push(resultado.value);
                operaciones.push(valorBoton);
                resultado.value = '';
            }
        });
    });
});