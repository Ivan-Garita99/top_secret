const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click', function (event) {
    // Prevenir el envío del formulario
    event.preventDefault();

    // Mostrar el primer SweetAlert
    Swal.fire({
        title: 'Siuuu 🥳',
        text: 'Sabía que dirías que sí!',
        icon: 'success',
        confirmButtonText: '¡Vamos!',
        showClass: {
            popup: 'animate__animated animate__fadeInUp animate__faster'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutDown animate__faster'
        }
    }).then((result) => {
        if (result.isConfirmed) {
            // Si el usuario confirma, muestra el siguiente SweetAlert
            Swal.fire({
                title: '¿Te parece si vamos al Vittorios?',
                icon: 'question',
                showCancelButton: true,
                confirmButtonText: 'Sí',
                cancelButtonText: 'O, ¿qué te parece?' // Cambia el texto aquí
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire('¡Genial! Nos vemos al salir. 🎉');
                } else {
                    Swal.fire('Si me dices que se te antoja cenar..');
                }
            });
        }
    });
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random() * 100);
    const randomY = parseInt(Math.random() * 100);
    noBtn.style.setProperty('top', randomY + '%');
    noBtn.style.setProperty('left', randomX + '%');
    noBtn.style.setProperty('transform', `translate(-${randomX}%,-${randomY}%)`);
});

