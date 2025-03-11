//Inicilizar arreglo
let amigos = [];

// Funcion Agregar Amigo
function agregarAmigo() {
    let amigoUsuario = document.getElementById('amigo').value.trim(); 
    let amigoSorteado = document.getElementById('resultado'); // Capturamos el elemento del resultado

    if (amigoUsuario !== "") {
        amigos.push(amigoUsuario);
        document.getElementById('amigo').value = ""; 
        amigoSorteado.innerHTML = ""; // Limpiamos el resultado anterior al añadir un nuevo amigo
        mostrarAmigos(); 
    } else {
        alert('Por favor, inserte un nombre.');
    }
}

// Función mostrar amigos en listaAmigos
function mostrarAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ""; 

    for(let i = 0; i < amigos.length; i++){
        listaAmigos.innerHTML += `<li>${amigos[i]}</li>`;
    }
}

// Función para sortear un amigo y mostrar en lista resultado
function sortearAmigo() {
    let amigoSorteado = document.getElementById('resultado');
    
    if (amigos.length === 0) {
        alert("Lista vacía, inserte un nombre.");
    } else {
        let indiceAmigos = Math.floor(Math.random() * amigos.length);
        listaAmigos.innerHTML = "";
        amigoSorteado.innerHTML = `<li>El amigo secreto es: ${amigos[indiceAmigos]}</li>`;                        
    }
}
