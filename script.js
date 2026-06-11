function abrirSobre(){

    const musica = document.getElementById("musica");

    musica.play().catch(err => {
        console.log(err);
    });
    
    document.querySelector(".sobre")
        .classList.add("abierto");

    setTimeout(() => {

        document.getElementById("sobre-container")
            .style.display = "none";

        document.getElementById("login")
            .style.display = "block";

    }, 1000);

}

const cartas = {

    "valeria": {
        titulo: "Hola Valeria 🤍",

        mensaje: `Amiguis te quiero mucho y espero que este detalle te guste.
Eres una persona increíble y mereces todo lo mejor.

(Un viejito con plata para que nos lleve de viaje a los 2, no seas pndja de que solamente te lleve a ti, también quiero ir yo jajaja).
Gracias por ser parte de mi vida y por compartir tantos momentos especiales juntos.
Uno de ellos fue cuando casi te mueres en pleno salón de clases.
Ya que estabas kgue y kgues de risa con mi acento de la selva ps ñañita.
¡Te deseo un día lleno de alegría y amor! 🤍
Y es verdad lo del viejito con plata, no seas pndja y acepta ya,
que quiero irme de viaje ahora que el Perú está cgdo`,

        secreto: "P.D.: Si estas feliz es porque no estas triste, gracias Kcha yetis, dueña de donofrio, prima-hermana de Tito(Si no entiendes mira al fondo hay sitio) ",

        color: "#ffd6e7"
    },

    "avril": {
        titulo: "Para Avril 🌷",

        mensaje: `Amiguis no sé por dónde empezar.

Eres la primera persona del grupo que conocí.
Al inicio parecías una chica emo jajajaja, pero resultaste ser una persona muy divertida.
Todo comenzó preguntando por los test de evaluación y poco a poco nos fuimos haciendo amigas.
Entre salchipapas, paseos por Mega y tirando hate a los compañeros pasamos muy buenos momentos.
Espero que te haya gustado este detalle.
Te quiero mucho y eres una persona muy especial para mí.
Y recuerda que sigo esperando mi yape de 500 soles JAJAJAJA ❤️`,

        secreto: "P.D.: Lo que haces en un dia, yo lo hago en 24 Hrs 😎",

        color: "#e9d5ff"
    },

    "alejandra": {
        titulo: "Para Alejandra ✨",

        mensaje: `Gracias por todos los momentos compartidos.

Espero que esta carta te saque una sonrisa.

Nunca cambies tu forma de ser y sigue persiguiendo todas tus metas.

Te deseo muchas alegrías y éxitos.`,

        secreto: "P.D.: Espera los cachos nomas, tarde o temprano van a llegar ❤️",

        color: "#dbeafe"
    },

    "estefany": {
        titulo: "Para Estefany 🌹",

        mensaje: `No sé qué me gusta más de ti: si tu sonrisa, tu forma de ser o la manera en que haces que cualquier día común 
        se convierta en algo especial. Desde que llegaste a mi vida, muchas cosas cambiaron sin que me diera cuenta. Los días 
        se volvieron más especiales, las sonrisas más sinceras y los momentos más simples adquirieron un significado diferente. 
        No eres solo alguien a quien quiero, eres esa persona que logra alegrarme con un mensaje, tranquilizarme 
        con unas palabras y hacer que mi corazón se acelere con solo pensar en ti. Gracias por existir, por ser 
        como eres y por llenar mi vida de sentimientos tan bonitos. No sé qué nos depare el futuro, pero sí sé que 
        cada instante a tu lado se ha convertido en un recuerdo que atesoro con todo mi corazón.
        Amarte no significa solo pensar en ti cuando estamos juntos, sino también extrañarte cuando estás lejos, 
        sonreír al recordar nuestras conversaciones y sentir que, de alguna manera, siempre estás presente en mis pensamientos.
        Me gustan tus virtudes, tus detalles, tu forma de ver la vida e incluso esas pequeñas cosas que te hacen única. Eres una 
        persona increíble y cada día encuentro una nueva razón para admirarte más. Si tuviera que elegir entre todos los momentos
        felices que he vivido, muchos de ellos tendrían algo en común: tú. ❤️✨`,

        secreto: "P.D.: Eres la casualidad más bonita que llegó para quedarse en mi corazón 🌹",

        color: "#fff3cd"
    }

};

const fotosPorPersona = {

    "valeria": [
        "imagesVal/val1.jpg",
        "imagesVal/val2.jpg",
        "imagesVal/val3.jpg",
        "imagesVal/val4.jpg",
        "imagesVal/val5.jpg",
        "imagesVal/val6.jpg",
        "imagesVal/val7.jpg"
    ],

    "avril": [
        "imagesAvi/avi1.jpg",
        "imagesAvi/avi2.jpg",
        "imagesAvi/avi3.jpg",
        "imagesAvi/avi4.jpg",
        "imagesAvi/avi5.jpg",
        "imagesAvi/avi6.jpg",
    ],

    "alejandra": [
        "imagesAli/ali1.jpg",
        "imagesAli/ali2.jpg",
        "imagesAli/ali3.jpg",
        "imagesAli/ali4.jpg",
        "imagesAli/ali5.jpg",
        "imagesAli/ali6.jpg",

    ],

    "jasmin": [
        "imagesJas/jaz1.jpg",
        "imagesJas/jaz2.jpg",
        "imagesJas/jaz3.jpg",
        "imagesJas/jaz4.jpg",
        "imagesJas/jaz5.jpg",
        "imagesJas/jaz6.jpg",
    ]
};

let slideshow;

function abrirCarta(){

    const nombre = document
        .getElementById("nombre")
        .value
        .trim()
        .toLowerCase();

    if(cartas[nombre]){

        document.getElementById("error").textContent = "";

        document.getElementById("login").style.display = "none";

        document.getElementById("carta").style.display = "block";

        document.getElementById("btnSecreto").style.display = "inline-block";
        document.body.style.background =
            cartas[nombre].color;

        document.getElementById("titulo").textContent =
            cartas[nombre].titulo;

        escribirTexto(cartas[nombre].mensaje);

        document.getElementById("musica").play();

        const contenedor =
            document.getElementById("imagenes");

        contenedor.innerHTML = "";

        fotosPorPersona[nombre].forEach((ruta, index) => {

            const img = document.createElement("img");

            img.src = ruta;

            img.classList.add("foto");

            if(index === 0){
                img.classList.add("activa");
            }

            contenedor.appendChild(img);

        });

        const secreto =
    document.getElementById("secreto");

secreto.style.display = "none";

document.getElementById("btnSecreto").onclick = () => {

    secreto.textContent =
        cartas[nombre].secreto;

    secreto.style.display = "block";

};

        iniciarSlideshow();

    }else{

        document.getElementById("error")
            .textContent = "Nombre no encontrado";

    }

}

function escribirTexto(texto){

    const mensaje =
        document.getElementById("mensaje");

    mensaje.textContent = "";

    let i = 0;

    const intervalo = setInterval(() => {

        mensaje.textContent += texto.charAt(i);

        i++;

        if(i >= texto.length){
            clearInterval(intervalo);
        }

    }, 25);

}

function iniciarSlideshow(){

    clearInterval(slideshow);

    const fotos =
        document.querySelectorAll(".foto");

    let indice = 0;

    slideshow = setInterval(() => {

        fotos[indice]
            .classList.remove("activa");

        indice = (indice + 1) % fotos.length;

        fotos[indice]
            .classList.add("activa");

    }, 3000);

}

function mostrarFinal(){

    document.getElementById("carta")
        .style.display = "none";

    document.getElementById("final")
        .style.display = "block";

}