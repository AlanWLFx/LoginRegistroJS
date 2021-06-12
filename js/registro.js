//variables para objetos
const nombre = document.getElementById('name');
const email = document.getElementById('email');
const user = document.getElementById('user');
const pass = document.getElementById('pass');
const formulario = document.getElementById('formRegistro');

formulario.addEventListener('submit', registro);

function registro(e){
    e.preventDefault();
    
    let nombreVal = nombre.value;
    let emailVal = email.value;
    let userVal = user.value;
    let passValue = pass.value;

    if(nombreVal == '' || emailVal == '' || userVal == '' || passValue == ''){
        creaMensaje('Verifica tus Datos', 'danger');
        return;
    }

    const usuario ={
        nombre: nombreVal,
        email: emailVal,
        user: userVal,
        pass: passValue
    }

    localStorage.setItem('usuario', JSON.stringify(usuario));

    nombre.value = '';
    email.value = '';
    user.value = '';
    pass.value = '';

    creaMensaje('Usuario Registrado', 'success');
}
