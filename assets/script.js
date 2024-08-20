const links = document.querySelectorAll('#links a');

links.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const href = link.getAttribute('href');
    const offsetTop = document.querySelector(href).offsetTop;
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
  });
});

const servicios = document.querySelectorAll('.servicio');

servicios.forEach(servicio => {
  servicio.addEventListener('mouseover', () => {
    servicio.style.transform = 'scale(1.1)';
  });
  servicio.addEventListener('mouseout', () => {
    servicio.style.transform = 'scale(1)';
  });
});

const presentacion = document.querySelector('.presentacion');

presentacion.addEventListener('mouseover', () => {
  presentacion.style.opacity = '0.5';
});
presentacion.addEventListener('mouseout', () => {
  presentacion.style.opacity = '1';
});

const iconoNav = document.querySelector('#icono-nav');
const nav = document.querySelector('nav');

iconoNav.addEventListener('click', () => {
  nav.classList.toggle('active');
});
/*VALIDACIONES FORMULARIO*/
const form = document.querySelector('.custom-form');
  const inputNombre = document.querySelector('#inputNombre');
  const inputApellido = document.querySelector('#inputApellido');
  const inputCorreo = document.querySelector('#inputCorreo');
  const inputMensaje = document.querySelector('#inputMensaje');

  const nombreError = document.querySelector('#nombre-error');
  const apellidoError = document.querySelector('#apellido-error');
  const correoError = document.querySelector('#correo-error');
  const mensajeError = document.querySelector('#mensaje-error');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (inputNombre.value.trim() === '') {
      nombreError.textContent = 'El campo nombre es requerido';
    } else {
      nombreError.textContent = '';
    }

    if (inputApellido.value.trim() === '') {
      apellidoError.textContent = 'El campo apellido es requerido';
    } else {
      apellidoError.textContent = '';
    }

    if (inputCorreo.value.trim() === '') {
      correoError.textContent = 'El campo correo electrónico es requerido';
    } else if (!validateEmail(inputCorreo.value)) {
      correoError.textContent = 'El correo electrónico no es válido';
    } else {
      correoError.textContent = '';
    }

    if (inputMensaje.value.trim() === '') {
      mensajeError.textContent = 'El campo mensaje es requerido';
    } else {
      mensajeError.textContent = '';
    }

    // Si todos los campos son válidos, se envía el formulario
    if (nombreError.textContent === '' && apellidoError.textContent === '' && correoError.textContent === '' && mensajeError.textContent === '') {
      form.submit();
    }
  });

  function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
  }