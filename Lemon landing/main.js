
const listado = [];

window.onload = () => {
    const email = document.getElementById('send-email');
    email.onsubmit = (e) => {
        e.preventDefault();
        const info = document.getElementById('input-mail');
        const infoText = info.value;
        info.value = '';
        listado.push(infoText);
    }

}
