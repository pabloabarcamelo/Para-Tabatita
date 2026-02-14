<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Para mi persona favorita</title>
    <style>
        :root {
            :root {
                /* Antes era rosado fuerte, ahora un lila elegante */
                --primary-color: #7e57c2;

                /* Antes era rosado pálido, ahora un lavanda muy suave */
                --secondary-color: #ede7f6;

                /* Texto en violeta oscuro */
                --text-color: #4527a0;
            }
        }

        body {
            background: linear-gradient(135deg, #fff0f5 0%, #fce4ec 100%);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            margin: 0;
            text-align: center;
            color: var(--text-color);
            overflow-x: hidden; /* Evita scroll horizontal por los corazones */
        }

        /* --- Animaciones de entrada --- */
        .fade-in-up {
            opacity: 0;
            transform: translateY(20px);
            animation: fadeInUp 1s ease-out forwards;
        }

        @keyframes fadeInUp {
            to { opacity: 1; transform: translateY(0); }
        }

        /* --- La Nueva Rosa SVG --- */
        .rose-container {
            cursor: pointer;
            margin-bottom: 20px;
            transition: transform 0.3s ease;
            /* Retraso en la animación de entrada */
            animation-delay: 0.2s;
        }

        .rose-container:hover {
            transform: scale(1.05);
        }

        /* --- Textos --- */
        h1 {
            font-size: 2.2rem;
            margin: 10px 0;
            animation-delay: 0.5s; /* Retraso */
        }
        p.dedicatoria {
            font-size: 1.1rem;
            max-width: 85%;
            line-height: 1.6;
            margin-bottom: 30px;
            animation-delay: 0.8s; /* Retraso */
        }

        /* --- El Nuevo Contador Detallado --- */
        .timer-wrapper {
            display: flex;
            gap: 15px;
            animation-delay: 1.1s; /* Retraso */
        }

        .time-box {
            background: rgba(255, 255, 255, 0.8);
            padding: 15px;
            border-radius: 12px;
            box-shadow: 0 4px 15px rgba(216, 27, 96, 0.15);
            min-width: 70px;
            backdrop-filter: blur(5px);
        }

        .time-box span.number {
            display: block;
            font-size: 2rem;
            font-weight: bold;
            color: var(--primary-color);
        }

        .time-box span.label {
            font-size: 0.8rem;
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        /* --- Corazones Flotantes (Interacción) --- */
        .floating-heart {
            position: absolute;
            font-size: 20px;
            pointer-events: none; /* Para que no interfieran con clicks */
            animation: floatUp 2s ease-out forwards;
        }

        @keyframes floatUp {
            0% { transform: translateY(0) rotate(0deg); opacity: 1; }
            100% { transform: translateY(-100px) rotate(20deg); opacity: 0; }
        }

    </style>
</head>
<body>

<div class="rose-container fade-in-up" id="roseClickArea">
    <div class="rose-container fade-in-up" id="roseClickArea">
        <svg width="300px" height="320px" viewBox="0 0 300 320" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <radialGradient id="huilliGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                    <stop offset="15%" style="stop-color:rgb(255,255,255);stop-opacity:1" />
                    <stop offset="100%" style="stop-color:rgb(180, 160, 235);stop-opacity:1" />
                </radialGradient>
            </defs>

            <g stroke="#4CAF50" stroke-width="2" fill="none">
                <path d="M150 120 Q 150 250 150 320" />
                <path d="M80 150 Q 110 250 150 320" />
                <path d="M220 160 Q 190 250 150 320" />

                <path d="M150 320 Q 120 280 100 290" />
                <path d="M150 320 Q 180 280 200 290" />
            </g>

            <g transform="translate(80, 150) scale(0.7) rotate(-20)">
                <ellipse cx="0" cy="-45" rx="14" ry="50" fill="url(#huilliGradient)" transform="rotate(0)"/>
                <ellipse cx="0" cy="-45" rx="14" ry="50" fill="url(#huilliGradient)" transform="rotate(60)"/>
                <ellipse cx="0" cy="-45" rx="14" ry="50" fill="url(#huilliGradient)" transform="rotate(120)"/>
                <ellipse cx="0" cy="-45" rx="14" ry="50" fill="url(#huilliGradient)" transform="rotate(180)"/>
                <ellipse cx="0" cy="-45" rx="14" ry="50" fill="url(#huilliGradient)" transform="rotate(240)"/>
                <ellipse cx="0" cy="-45" rx="14" ry="50" fill="url(#huilliGradient)" transform="rotate(300)"/>
                <circle r="12" fill="#FFF176" />
                <g fill="#FDD835">
                    <circle cx="0" cy="-7" r="3" /> <circle cx="6" cy="4" r="3" /> <circle cx="-6" cy="4" r="3" />
                </g>
            </g>

            <g transform="translate(150, 110) scale(1)">
                <ellipse cx="0" cy="-45" rx="15" ry="55" fill="url(#huilliGradient)" transform="rotate(0)"/>
                <ellipse cx="0" cy="-45" rx="15" ry="55" fill="url(#huilliGradient)" transform="rotate(60)"/>
                <ellipse cx="0" cy="-45" rx="15" ry="55" fill="url(#huilliGradient)" transform="rotate(120)"/>
                <ellipse cx="0" cy="-45" rx="15" ry="55" fill="url(#huilliGradient)" transform="rotate(180)"/>
                <ellipse cx="0" cy="-45" rx="15" ry="55" fill="url(#huilliGradient)" transform="rotate(240)"/>
                <ellipse cx="0" cy="-45" rx="15" ry="55" fill="url(#huilliGradient)" transform="rotate(300)"/>
                <circle r="14" fill="#FFF176" />
                <g fill="#FDD835">
                    <circle cx="0" cy="-8" r="4" /> <circle cx="7" cy="5" r="4" /> <circle cx="-7" cy="5" r="4" />
                </g>
            </g>

            <g transform="translate(220, 160) scale(0.75) rotate(25)">
                <ellipse cx="0" cy="-45" rx="14" ry="50" fill="url(#huilliGradient)" transform="rotate(0)"/>
                <ellipse cx="0" cy="-45" rx="14" ry="50" fill="url(#huilliGradient)" transform="rotate(60)"/>
                <ellipse cx="0" cy="-45" rx="14" ry="50" fill="url(#huilliGradient)" transform="rotate(120)"/>
                <ellipse cx="0" cy="-45" rx="14" ry="50" fill="url(#huilliGradient)" transform="rotate(180)"/>
                <ellipse cx="0" cy="-45" rx="14" ry="50" fill="url(#huilliGradient)" transform="rotate(240)"/>
                <ellipse cx="0" cy="-45" rx="14" ry="50" fill="url(#huilliGradient)" transform="rotate(300)"/>
                <circle r="12" fill="#FFF176" />
                <g fill="#FDD835">
                    <circle cx="0" cy="-7" r="3" /> <circle cx="6" cy="4" r="3" /> <circle cx="-6" cy="4" r="3" />
                </g>
            </g>
        </svg>
    </div>
</div>

<h1 class="fade-in-up">Hola, mi amor</h1>
<p class="dedicatoria fade-in-up">
    No tengo habilidades manuales para hacerte un regalo tan hermoso como los que tu me haces.
    pero programe este pequeño detalle para que recuerdes que cada dia que pasa mi amor por ti crece
    <br>(PD: Intenta el tocar huilli)
</p>

<div class="timer-wrapper fade-in-up">
    <div class="time-box">
        <span class="number" id="days">0</span>
        <span class="label">Días</span>
    </div>
    <div class="time-box">
        <span class="number" id="hours">00</span>
        <span class="label">Horas</span>
    </div>
    <div class="time-box">
        <span class="number" id="minutes">00</span>
        <span class="label">Min</span>
    </div>
    <div class="time-box">
        <span class="number" id="seconds">00</span>
        <span class="label">Seg</span>
    </div>
</div>

<div style="margin-top: 30px; width: 80%;">
    <button onclick="showReason()" style="
        background: var(--primary-color);
        color: white;
        border: none;
        padding: 10px 20px;
        font-size: 1rem;
        border-radius: 20px;
        cursor: pointer;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
        ¿Por qué te quiero?
    </button>
    <p id="reasonText" class="fade-in-up" style="
        margin-top: 15px;
        font-style: italic;
        min-height: 30px;
        font-weight: 500;">
        (Presiona el botón...)
    </p>
</div>

<script>
    // --- CONFIGURACIÓN (¡IMPORTANTE!) ---
    // Introduce la fecha y HORA aproximada de cuando empezaron.
    // Formato: new Date(Año, Mes-1, Día, Hora, Minuto)
    // Ejemplo: 14 de Febrero de 2024 a las 6:30 PM sería: new Date(2024, 1, 14, 18, 30)
    const startDate = new Date(2024, 5, 21, 15, 30); // <--- CAMBIA ESTO

    function updateCounter() {
        const now = new Date();
        const difference = now - startDate;

        if (difference < 0) {
            // Si la fecha es futura, no hacemos nada por ahora
            return;
        }

        // Cálculos matemáticos para el tiempo
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        // Actualizar el HTML y añadir un cero delante si es menor de 10 (ej: "09")
        document.getElementById('days').innerText = days;
        document.getElementById('hours').innerText = hours < 10 ? '0' + hours : hours;
        document.getElementById('minutes').innerText = minutes < 10 ? '0' + minutes : minutes;
        document.getElementById('seconds').innerText = seconds < 10 ? '0' + seconds : seconds;
    }

    // Ejecutar la función cada segundo (1000 milisegundos)
    setInterval(updateCounter, 1000);
    updateCounter(); // Primera ejecución inmediata

    // --- EFECTO DE CORAZONES AL CLICK ---
    const roseElement = document.getElementById('roseClickArea');

    roseElement.addEventListener('click', function(e) {
        createFloatingHeart(e.clientX, e.clientY);
    });

    // Función para crear un corazón
    function createFloatingHeart(x, y) {
        const heart = document.createElement('div');
        heart.innerHTML = '💖'; // Puedes cambiar el emoji si quieres
        heart.className = 'floating-heart';

        // Posicionar el corazón cerca de donde se hizo click con un poco de aleatoriedad
        const randomX = Math.random() * 40 - 20; // variación horizontal
        heart.style.left = (x + randomX) + 'px';
        heart.style.top = y + 'px';

        document.body.appendChild(heart);

        // Eliminar el corazón del código una vez que termina la animación (2 segundos)
        setTimeout(() => {
            heart.remove();
        }, 2000);
    }

    const reasons = [
        "Porque eres la doctora más hermosa del mundo.",
        "Por cómo te brillan los ojos cuando te emocionas.",
        "Por tu paciencia con mis interminables monologos de cosas que me gustan.",
        "Por cómo te preocupas de mi.",
        "Porque a tu lado cualquier lugar es mejor",
        "Por como me llevas a Dios cuando lo necesito",
        "Eres UNICA.",
        "Tienes un estilo que me vuelve loquito.",
        "Tus panqueques suben mi animo (y azucar).",
        "Me escuchas atentamente y resuelves mi dudas.",
        "Tu Creatividad me encanta.",
        "Porque a veces solo necesito pasear contigo para olvidar cualquier problema.",
        "Porque a tu lado, quiero ser mejor.",
        "Tu inteligencia me hipnotiza",
        "Porque eres mi compañera de proyectos y de vida.",
        "Porque haces que los días difíciles en la u sean mejores.",
        "Porque te ves hermosa incluso después de un turno largo.",
        "Porque contigo el mundo tiene colores",
        "Por tu manito acompañadome cada vez que conduzco",
        "Por esos abrazos que me llenan el corazon",
        "Por esos regaloneos que terminan en siestas",
        "Porque eres mi mejor amiga, mi confidente, y el amor de mi vida",
        ""


    ];

    function showReason() {
        const randomIndex = Math.floor(Math.random() * reasons.length);
        const textElement = document.getElementById('reasonText');

        // Efecto de desvanecimiento rápido
        textElement.style.opacity = 0;
        setTimeout(() => {
            textElement.innerText = reasons[randomIndex];
            textElement.style.opacity = 1;
        }, 300);
    }

</script>
</body>
</html>
