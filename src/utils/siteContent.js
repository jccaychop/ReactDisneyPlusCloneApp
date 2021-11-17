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
        title: "Inicia sesión con tu correo",
        form: {
            placeholder: "Correo electrónico",
            button: "Continuar",
        },
        group: {
            text: "¿Primera vez en Disney+?",
            link: "Suscribirse",
        },
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
        title: "Log in with your email",
        form: {
            placeholder: "Email",
            button: "Continue",
        },
        group: {
            text: "New to Disney+?",
            link: "Sign up",
        },
    },
};

export const siteContent = [langES, langEN];
