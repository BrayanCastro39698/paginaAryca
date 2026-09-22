const btn = document.getElementById('button');

document.getElementById('form')
  .addEventListener('submit', function(event) {
    event.preventDefault();

    // Validar que todos los campos estén llenos
    const form = this; // Referencia al formulario
    const inputs = form.querySelectorAll('input, textarea, select'); // Selecciona todos los campos
    let valido = true; // Bandera para la validación

    inputs.forEach(input => {
      if (!input.value.trim()) { // Si el campo está vacío
        valido = false;
        input.style.border = '2px solid red'; // Marca el campo en rojo
          swal('Error','¡Completa los campos!','error' );
      } else {
        input.style.border = ''; // Restaura el estilo si está lleno
      }
    });

    if (!valido) {
      alert('Por favor, completa todos los campos.');
      return; // No envía el email si hay campos vacíos
    }

    // Si todos los campos están llenos, procede a enviar el email
    btn.value = 'Enviando...';

    const serviceID = ' ';
    const templateID = ' ';

    emailjs.sendForm(serviceID, templateID, form)
      .then(() => {
        btn.value = 'Enviar Email';
        swal('Email','¡Enviado!','success' );
        form.reset(); // Limpia el formulario después de enviarlo
      }, (err) => {
        btn.value = 'Enviar Email';
        alert(JSON.stringify(err));
      });
  });

