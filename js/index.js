//variables para objetos formulario

const usuario = document.getElementById('user');
const password = document.getElementById('pass');
const formulario = document.getElementById('formLogin');

//eventos
formulario.addEventListener('submit', login);

//funciones

function login(e){
    e.preventDefault();

    let usuarioVal = usuario.value;
    let passwordVal = password.value;

    if(usuarioVal == '' || passwordVal == ''){
        creaMensaje('Verifica tus datos', 'danger')
        return;
    } 

    
    if(localStorage.getItem('usuario')){
        let objeto = JSON.parse(localStorage.getItem('usuario'));

        if(usuarioVal == objeto.user &&passwordVal == objeto.pass){
            creaMensaje('login correcto', 'success');

            localStorage.setItem('sesion', 'activa');

            setTimeout(function(){
                window.open('./inicio.html', '_sefl');
            }, 2000);
        }else{
            creaMensaje('Tu usuario no existe', 'danger')
        }
    }else{
        creaMensaje('usuario no registrado', 'danger');
    }
}