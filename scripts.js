let inicio = new Date("2023-10-06T00:00:00");
let totalAnios = 5 * Math.pow(10, 9) -1 ;

function actualizarContador() {
    let ahora = new Date();
    let milisegundosTranscurridos = ahora - inicio;
    
    let segundosTranscurridos = Math.floor(milisegundosTranscurridos / 1000);
    let minutosTranscurridos = Math.floor(segundosTranscurridos / 60);
    let horasTranscurridas = Math.floor(minutosTranscurridos / 60);
    let diasTranscurridos = Math.floor(horasTranscurridas / 24);
    let mesesTranscurridos = Math.floor(diasTranscurridos / 30.44);  // Usando un promedio
    let aniosTranscurridos = Math.floor(mesesTranscurridos / 12);
    
    let aniosRestantes = totalAnios - aniosTranscurridos;
    let mesesRestantes = 12 - (mesesTranscurridos % 12);
    let diasRestantes = Math.round(30.44 - (diasTranscurridos % 30.44));
    let horasRestantes = 24 - (horasTranscurridas % 24);
    let minutosRestantes = 60 - (minutosTranscurridos % 60);
    let segundosRestantes = 60 - (segundosTranscurridos % 60);

    document.getElementById('anos').textContent = aniosRestantes;
    document.getElementById('meses').textContent = mesesRestantes;
    document.getElementById('dias').textContent = diasRestantes;
    document.getElementById('horas').textContent = horasRestantes;
    document.getElementById('minutos').textContent = minutosRestantes;
    document.getElementById('segundos').textContent = segundosRestantes;

    setTimeout(actualizarContador, 1000);
}

actualizarContador();
