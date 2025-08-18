function atualizar() {
    const agora = new Date();

    let horas = agora.getHours().toString().padStart(2, '0');
    let minutos = agora.getMinutes().toString().padStart(2, '0');
    let segundos = agora.getSeconds().toString().padStart(2,'0');

    document.getElementById('clock').textContent = `${horas}:${minutos}:${segundos}`;
}
//Atualizar relógio a cada 1 segundo
setInterval(atualizar, 1000);
// Chama uma vez para não esperar 1s
atualizar();
