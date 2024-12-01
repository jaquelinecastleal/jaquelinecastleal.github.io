var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});
//comentario don doble diaginal
typewriter.typeString('Desarrolladora Frontend Jr.')
    .pauseFor(2500)
    .deleteAll()
    .typeString('¡Si lo puedes imaginar, lo puedes crear!')
    .pauseFor(2500)
    //numero de caracteres que se borrara 
    .deleteChars(6)
    .typeString('<strong>Programar!</strong>')
    .pauseFor(2500)
    .start();