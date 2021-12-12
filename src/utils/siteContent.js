import { entertainmentURL, gadgetsURL, originalsURL, utilityURL } from "./siteImagesURL";

const langES = {
    buttons: {
        login: "iniciar sesión",
        signup: "suscríbete ahora",
    },
    hero: {
        img_mobile: utilityURL[3],
        img_web: utilityURL[5],
        title: "Con Combo+, aprovecha lo mejor de Disney+ y Star+ a un precio único.",
        combo: utilityURL[2],
        button: "Suscribirme por pen 44.90*",
        text: "* El precio podría variar en caso de que el pago se realice en otras monedas, plataformas o medios de pago. Podrían aplicar cargos de terceros.",
        link: "Suscribirme solo a Disney+",
        cost: "PEN 25.90/mes* o PEN 259.90/año*",
    },
    features: [
        {
            img: utilityURL[7],
            title: "Cuando quieras, donde quieras",
            text: "Disfrútalo en tu pantalla favorita, ya sea tu TV, tableta, computadora, teléfono y otros. Vive una experiencia única con una amplia selección de títulos en 4K. Además, puedes ver en cuatro pantallas en simultáneo para que nadie se quede afuera.",
        },
        {
            img: utilityURL[11],
            title: "",
            text: "Solo Combo+ puede darte una oferta tan completa con Disney+ y Star+. Las series, películas y los deportes de ESPN que conoces y amas para ver cuando quieras y donde quieras.",
            button: "quiero suscribirme",
        }
    ],
    productions: {
        originals: {
            title: "Originales Disney+ exclusivos",
            text: "Disfruta de películas, series y documentales nunca antes vistos. Solo en Disney+.",
            images: [
                originalsURL[0], originalsURL[1], originalsURL[3], originalsURL[4], originalsURL[5], originalsURL[6], originalsURL[8], originalsURL[9], originalsURL[11]
            ]
        },
        entertainment: {
            title: "Entretenimiento sin fin",
            text: "Descubre las mejores historias de Disney, Pixar, Marvel, Star Wars y National Geographic, todo en un mismo lugar. Desde nuevos lanzamientos y Originales Disney+ hasta clásicos inolvidables. Un lugar con entretenimiento para todos.",
            images: [
                entertainmentURL[0], entertainmentURL[1], entertainmentURL[2], entertainmentURL[3], entertainmentURL[5], entertainmentURL[6], entertainmentURL[7], entertainmentURL[9], entertainmentURL[10]
            ]
        },
    },
    promotion: {
        img: utilityURL[10],
        title: "Descarga series y películas",
        text: "Descargas ilimitadas para ver lo que quieras, cuando quieras. Lleva tus historias favoritas siempre contigo, incluso sin conexión.",
        logo: utilityURL[8],
    },
    gadget: {
        title: "Disponible en tus dispositivos favoritos",
        content: [
            {
                ...gadgetsURL[0],
                group: "TV",
                list: ['Amazon Fire TV', 'Android TV', 'Apple TV', 'Chromecast', 'LG', 'Roku', 'Samsung'],
            },
            {
                ...gadgetsURL[1],
                group: "Computadoras",
                list: ['Chrome OS', 'MacOS', 'PC Windows'],
            },
            {
                ...gadgetsURL[2],
                group: "Celulares y tabletas",
                list: ['Tabletas Amazon Fire', 'Celulares y tabletas Android', 'iPhone & iPad'],
            },
            {
                ...gadgetsURL[3],
                group: "Consolas",
                list: ['PS4', 'PS5', 'Xbox One', 'Xbox Series X', 'Xbox Series S'],
            },
        ]
    },
    footer: {
        links: [
            {
                text: "Acuerdo de suscripción",
                to: "https://www.disneyplus.com/es-419/legal/acuerdo-de-suscripción",
            },
            {
                text: "Política de privacidad",
                to: "https://www.disneyplus.com/es-419/legal/política-de-privacidad",
            },
            {
                text: "Publicidad personalizada",
                to: "https://preferences-mgr.trustarc.com/?pid=disney01&aid=disneyplus01&type=disneyplus",
            },
            {
                text: "Dispositivos compatibles",
                to: "https://help.disneyplus.com/csp?id=csp_article_content_international&sys_kb_id=eac89167db3048900a2af56e0f96193b",
            },
            {
                text: "Ayuda",
                to: "https://help.disneyplus.com/csp",
            },
            {
                text: "Acerca de Disney+",
                to: "https://help.disneyplus.com/csp?id=csp_article_content_international&sys_kb_id=8d061aaadb7004903c0cf158bf9619ed",
            }
        ],
        text_1: "© 2021 Disney y su familia de compañías afiliadas. Todos los derechos reservados.",
        text_2: "Disney+ es un servicio por suscripción de pago, su contenido está sujeto a disponibilidad. El servicio Disney+ es comercializado por Disney DTC LATAM, Inc., 2400 W Alameda AVE., Burbank CA 91521.",
    },
    login: {
        step_1: {
            id: 1,
            title: "Inicia sesión con tu correo",
            form: {
                placeholder: "Correo electrónico",
                button: "Continuar",
            },
            group: {
                text: "¿Primera vez en Disney+?",
                link: "Suscribirse",
            },
            email_error: "Lo sentimos, tenemos problemas para crear tu cuenta. Vuelve a escribir tu correo electrónico y/o contraseña e intenta de nuevo. Si el problema continúa, comunícate con Atención al Cliente de Disney+ (código de error 6).",
            email_not_exist: {
                error: "Correo electrónico desconocido. Verifica si está bien escrito.",
                title: "No hay cuenta para ese correo",
                text: "¿Está bien escrito? Si es así, visita disneyplus.com/loginhelp. Si es tu primera vez en Disney+, suscríbete.",
                button: {
                    signup: "suscribirse",
                    try: "intentar de nuevo",
                },
            },
        },
        step_2: {
            id: 2,
            title: "Escribe tu contraseña",
            form: {
                placeholder: "Contraseña",
                button: "Iniciar sesión",
                suggestion_password: "Distingue mayúsculas y minúsculas.",
            },
            password_error: "Contraseña incorrecta. Intenta de nuevo; si el problema continúa, puedes restablecerla con la opción ¿Olvidaste la contraseña? (código de error 14).",
            suggestion_password: "Usa al menos ocho caracteres, al menos una letra mayúscula, una letra minúscula, un número y un carácter especial.",
            link: "¿Olvidaste la contraseña?",
        }
    },
    signup: {
        step_1: {
            id: 1,
            step_label: "PASO 1 DE 4",
            title: "Escribe tu correo electrónico",
            form: {
                placeholder: "Correo electrónico",
                button: "Continuar",
            },
            email_error: "Lo sentimos, tenemos problemas para crear tu cuenta. Vuelve a escribir tu correo electrónico y/o contraseña e intenta de nuevo. Si el problema continúa, comunícate con Atención al Cliente de Disney+ (código de error 6).",
            offers: "¡Sí! Quiero recibir actualizaciones, ofertas especiales y otra información de Disney+ y la Familia de Compañías Walt Disney.",
            privacy_1: "Disney usará tus datos para personalizar y mejorar tu experiencia en Disney+ y para enviarte información sobre Disney+. Puedes cambiar tus preferencias de comunicación en cualquier momento. Podemos usar tus datos tal como se describe en nuestra Política de privacidad.",
            privacy_2: "Al hacer clic en Continuar, reconoces que has leído nuestra Política de privacidad",
        },
        step_2: {
            id: 2,
            step_label: "PASO 2 DE 4",
            title: "Acuerdo de suscripción",
            subscription: ``,
            confirmation: "Al hacer clic en Aceptar y continuar, confirmas que has leído y aceptas el Acuerdo de suscripción en su totalidad.",
            form: {
                button: "Aceptar y continuar",
            }
        },
        step_3: {
            id: 3,
            step_label: "PASO 3 DE 4",
            title: "Crea una contraseña",
            form: {
                placeholder: "Contraseña",
                button: "Continuar",
                suggestion_password: "Usa al menos ocho caracteres, al menos una letra mayúscula, una letra minúscula, un número y un carácter especial.",
                suggestion_email: "Tienes que usar este correo para iniciar sesión:"
            },
            password_error: "Lo sentimos, tenemos problemas para crear tu cuenta. Vuelve a escribir tu correo electrónico y/o contraseña e intenta de nuevo. Si el problema continúa, comunícate con Atención al Cliente de Disney+ (código de error 6).",
        },
        step_4: {
            id: 4,
            step_label: "PASO 4 DE 4",
            title: "Selecciona un plan y configura el pago",
            warning: "INGRESO DE DATOS DESHABILITADO, SOLO SE PERMITE GENERAR DATA FALSA",
            fake_button: "Clic para generar data falsa",
            cancellation: "La cancelación puede hacerse en cualquier momento y entrará en vigor cuando termine el período de facturación.",
            confirmation: "Al seleccionar Aceptar y suscribirse, aceptas que tu suscripción comenzará de inmediato. No recibirás un reembolso por las suscripciones mensuales o anuales si cancelas el contrato y ya usaste el contenido digital. Te enviaremos un aviso de renovación 30 días antes de que entren en vigor las renovaciones anuales. Te cobraremos el cargo mensual o anual estándar de forma recurrente según tu método de pago registrado. La cancelación puede hacerse en cualquier momento y entrará en vigor cuando termine el período de facturación.",
            form: {
                full_name: "nombre en la tarjeta",
                card_number: "número de la tarjeta",
                date: "fecha de vencimiento",
                cvv: "código de seguridad",
                button: "aceptar y suscribirse",
            },
            billing_error: {
                full_name: "Escribe el nombre que figura en la tarjeta.",
                card_number: "Escribe un número de tarjeta de crédito válido.",
                date: "Escribe una fecha de vencimiento válida.",
                cvv: "Escribe el código de seguridad.",
            }
        }
    },
    no_match: {
        title: "No se puede encontrar la página que buscaba.",
        text: "Vaya a la página de inicio de Disney+ haciendo clic en el botón de abajo.",
        button: {
            text: "Disney+ inicio",
        },
    },
    media: {
        tags: {
            season: "temporadas"
        },
        button: {
            play: "Ver ahora",
            trailer: "Trailer"
        },
        tabs: {
            episode: "Episodios",
            suggestions: "Sugerencias",
            extra: "Extras",
            detail: "Detalles",
        },
        detail_tags: {
            duration: "Duración",
            release_date: "Fecha de estreno",
            genre: "Género",
            rating: "Clasificación",
            starring: "Elenco",
            creator: "Creado por",
            director: "Dirigido por",
        },
        serie: "Series",
        movie: "Películas",
    },
};

const langEN = {
    buttons: {
        login: "log in",
        signup: "sign up now",
        signup2: "save on 12 months",
    },
    hero: {
        img_mobile: utilityURL[4],
        img_web: utilityURL[6],
        title: "The greatest stories, all in one place.",
        text: "*Price may vary depending on the currency, platform or payment method used. Third-party fees may apply.",
        cost: "PEN 25.90",
        period: "/month*",
        cost2: "PEN 259.90",
        period2: "/year*",
    },
    features: [
        {
            img: utilityURL[7],
            title: "Watch the way you want",
            text: "Enjoy the big screen experience on your TV, or watch on your tablet, laptop, phone and more. You can watch an ever-growing selection of titles in 4K. Plus, you can stream on 4 screens at once, so everyone’s happy.",
        },
    ],
    productions: {
        originals: {
            title: "Exclusive Disney+ Originals",
            text: "Watch never-before-seen movies, series, shorts and more from the world’s greatest storytellers – only available on Disney+",
            images: [
                originalsURL[13], originalsURL[14], originalsURL[2], originalsURL[0], originalsURL[4], originalsURL[5], originalsURL[7], originalsURL[10], originalsURL[12]
            ]
        },
        entertainment: {
            title: "Endless entertainment",
            text: "Discover the best stories from Disney, Pixar, Marvel, Star Wars and National Geographic in one place. From hit movies to timeless classics and new originals – there's something for everyone.",
            images: [
                entertainmentURL[0], entertainmentURL[1], entertainmentURL[2], entertainmentURL[4], entertainmentURL[5], entertainmentURL[6], entertainmentURL[8], entertainmentURL[9], entertainmentURL[11]
            ]
        },
    },
    promotion: {
        img: utilityURL[10],
        title: "Download any series or movie",
        text: "Download whatever you want and watch whenever you want. Your favorites will always stay with you, even if your Wi-Fi won’t.",
        logo: utilityURL[9],
    },
    gadget: {
        title: "Available on your favorite devices",
        content: [
            {
                ...gadgetsURL[0],
                group: "TV",
                list: ['Amazon Fire TV', 'Android TV', 'Apple TV', 'Chromecast', 'LG TVs', 'Roku', 'Samsung'],
            },
            {
                ...gadgetsURL[1],
                group: "Computer",
                list: ['Chrome OS', 'MacOS', 'Windows PC'],
            },
            {
                ...gadgetsURL[2],
                group: "Mobile & Tablet",
                list: ['Amazon Fire Tablets', 'Android Phones & Tablets', 'iPhone & iPad'],
            },
            {
                ...gadgetsURL[3],
                group: "Game Consoles",
                list: ['PS4', 'PS5', 'Xbox One', 'Xbox Series X', 'Xbox Series S'],
            },
        ]
    },
    footer: {
        links: [
            {
                text: "Subscriber Agreement",
                to: "https://www.disneyplus.com/legal/subscriber-agreement",
            },
            {
                text: "Privacy Policy",
                to: "https://www.disneyplus.com/legal/privacy-policy",
            },
            {
                text: "Interest-Based Ads",
                to: "https://preferences-mgr.trustarc.com/?pid=disney01&aid=disneyplus01&type=disneyplus",
            },
            {
                text: "Supported Devices",
                to: "https://help.disneyplus.com/csp?id=csp_article_content_international&sys_kb_id=eac89167db3048900a2af56e0f96193b",
            },
            {
                text: "Help",
                to: "https://help.disneyplus.com/",
            },
            {
                text: "About Us",
                to: "https://help.disneyplus.com/csp?id=csp_article_content_international&sys_kb_id=8d061aaadb7004903c0cf158bf9619ed",
            },
        ],
        text_1: "© 2021 Disney and its family of affiliated companies. All rights reserved.",
        text_2: "Disney+ is a paid subscription service, its content is subject to availability. The Disney+ service is marketed by Disney DTC LATAM, Inc., 2400 W Alameda AVE., Burbank CA 91521.",
    },
    login: {
        step_1: {
            id: 1,
            title: "Log in with your email",
            form: {
                placeholder: "Email",
                button: "Continue",
            },
            group: {
                text: "New to Disney+?",
                link: "Sign up",
            },
            email_error: "Sorry, we are having trouble creating your account. Please re-enter your email and password and try again. If the problem persists, contact Disney+ Support (Error Code 6).",
            email_not_exist: {
                error: "Unknown email. Please check your spelling.",
                title: "We couldn't find an account for that email",
                text: "Check for typos. If you think this is an error, visit disneyplus.com/loginhelp. If you're new to Disney+, sign up.",
                button: {
                    signup: "sign up",
                    try: "try again",
                },
            },
        },
        step_2: {
            id: 2,
            title: "Enter your password",
            form: {
                placeholder: "Password",
                button: "Log in",
                suggestion_password: "(case sensitive)",
            },
            password_error: 'Incorrect Password. Please reenter your password and try again. If the problem persists, try resetting your password by selecting "Forgot Password?" (Error Code 14).',
            suggestion_password: "Use at least eight characters, at least one uppercase letter, one lowercase letter, one number, and one special character.",
            link: "Forgot Password?",
        }
    },
    signup: {
        step_1: {
            id: 1,
            step_label: "STEP 1 OF 4",
            title: "Enter your email",
            form: {
                placeholder: "Email",
                button: "Continue",
            },
            email_error: "Sorry, we are having trouble creating your account. Please re-enter your email and password and try again. If the problem persists, contact Disney+ Support (Error Code 6).",
            offers: "Yes! I would like to receive updates, special offers, and other information from Disney+ and The Walt Disney Family of Companies.",
            privacy_1: 'Disney will use your data to personalize and improve your Disney+ experience and to send you information about Disney+. You can change your communication preferences anytime. We may use your data as described in our Privacy Policy.',
            privacy_2: 'By clicking "Continue," you acknowledge that you have read our Privacy Policy.',
        },
        step_2: {
            id: 2,
            step_label: "STEP 2 OF 4",
            title: "Subscriber Agreement",
            subscription: ``,
            confirmation: 'By clicking "Agree & Continue", you confirm that you have read in full and agree to our Subscriber Agreement.',
            form: {
                button: "Agree & continue",
            }
        },
        step_3: {
            id: 3,
            step_label: "STEP 3 OF 4",
            title: "Create a password",
            form: {
                placeholder: "Password",
                button: "Continue",
                suggestion_password: "Use a minimum of 6 characters (case sensitive) with at least one number or special character.",
                suggestion_email: "You'll be using this email to log in:"
            },
            password_error: "Sorry, we are having trouble creating your account. Please re-enter your email and password and try again. If the problem persists, contact Disney+ Support (Error Code 6).",
        },
        step_4: {
            id: 4,
            step_label: "STEP 4 OF 4",
            title: "Select plan and set up payment",
            warning: "DATA ENTRY DISABLED, IT IS ONLY ALLOWED TO GENERATE FAKE DATA",
            fake_button: "Click to generate fake data",
            cancellation: "Cancel anytime, effective at the end of the billing period.",
            confirmation: 'By selecting "Agree & Subscribe", you agree to start your subscription immediately, and that you will not be able to withdraw from the contract and receive a refund for monthly or yearly subscriptions upon performance of the digital content. We will send you a renewal notice 30 days prior to yearly renewals becoming effective. We will charge the standard monthly or annual fee to your stored payment method on a recurring basis. You can cancel at any time, effective at the end of the billing period. ',
            form: {
                full_name: "name on card",
                card_number: "card number",
                date: "expiration date",
                cvv: "security code",
                button: "agree & subscribe",
            },
            billing_error: {
                full_name: "Enter the name on your Card",
                card_number: "Enter a valid Credit Card Number",
                date: "Enter a valid expiration date",
                cvv: "Enter Security Code",
            }
        }
    },
    no_match: {
        title: "The page you were looking for cannot be found.",
        text: "Please go to the Disney+ home page by clicking the button below",
        button: {
            text: "Disney+ home",
        },
    },
    media: {
        tags: {
            season: "seasons"
        },
        button: {
            play: "Play now",
            trailer: "Trailer"
        },
        tabs: {
            episode: "Episodes",
            suggestions: "Suggestions",
            extra: "Extras",
            detail: "Details",
        },
        detail_tags: {
            duration: "Duration",
            release_date: "Release Date",
            genre: "Genre",
            rating: "Rating",
            starring: "Starring",
            creator: "Creator",
            director: "Director",
        },
        serie: "Series",
        movie: "Movies",
    },
};

export const siteContent = [langES, langEN];
