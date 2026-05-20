import { rutas } from "../lib/rutas";
import directivasData from "./directivas.json";
import documentosOficialesData from "./documentosOficiales.json";
import pieContenidoData from "./pieContenido.json";

export const menu = [
  { label: "Inicio", href: rutas.inicio },
  {
    label: "Nuestra Escuela",
    href: rutas.quienesSomos,
    children: [
      { label: "Quienes somos", href: rutas.quienesSomos },
      { label: "Historia", href: rutas.historia },
      { label: "Mision y vision", href: rutas.misionVision },
      { label: "Sellos educativos", href: rutas.sellosEducativos }
    ]
  },
  {
    label: "Comunidad escolar",
    href: rutas.directivas,
    children: [
      { label: "Equipo directivo", href: `${rutas.directivas}equipo-directivo/` },
      { label: "Centro General de Padres y Apoderados (CGPA)", href: `${rutas.directivas}centro-padres/` },
      { label: "Centro de Estudiantes", href: `${rutas.directivas}centro-alumnos/` },
      { label: "Programa de Integracion Escolar (PIE)", href: rutas.pie },
      { label: "Orientación y convivencia escolar", href: rutas.convivenciaEscolar },
      { label: "Departamento de informatica", href: rutas.informatica }
    ]
  },
  {
    label: "Documentos oficiales",
    href: rutas.documentos,
    children: documentosOficialesData.documentos.map((documento) => ({
      label: documento.titulo,
      href: documento.href,
      external: true
    }))
  },
  { label: "Talleres", href: rutas.talleres },
  { label: "Noticias", href: rutas.noticias },
  { label: "Contacto", href: rutas.contacto }
];

export const slides = [
  {
    image: "/images/slide1.png",
    title: "Bienvenido a tu\nEscuela Esperanza",
    subtitle: "Escuela Esperanza",
    extra: "",
    button: "",
    href: rutas.inicio
  },
  {
    image: "/images/slide5.jpeg",
    title: "Donde Los Sueños Comienzan",
    subtitle: "Escuela Esperanza",
    extra: "",
    button: "Leer mas",
    href: rutas.quienesSomos
  },
  {
    image: "/images/slide9.jpeg",
    title: "Talleres\nExtraescolares 2026",
    subtitle: "Educacion basica - Escuela Esperanza",
    extra: "",
    button: "Leer mas",
    href: rutas.talleres
  }
];

export const textoTemporal =
  "Escuela Esperanza Escuela Esperanza Escuela Esperanza Escuela Esperanza Escuela Esperanza Escuela Esperanza Escuela Esperanza Escuela Esperanza.";

export const quienesSomosResumen = {
  titulo: "Quienes somos?",
  subtitulo: "Escuela Esperanza",
  texto: textoTemporal,
  boton: "Leer mas",
  href: rutas.quienesSomos,
  imagen: "/images/slide8.jpeg"
};

export const quienesSomosDetalle = {
  titulo: "Escuela Esperanza",
  texto: [textoTemporal, textoTemporal, textoTemporal],
  imagen: "/images/slide7.jpeg"
};

export const talleres = [
  {
    titulo: "Taller de Programación y Robótica",
    slug: "programacion-robotica",
    href: `${rutas.talleres}programacion-robotica/`,
    imagen: "/images/slide6.jpeg",
    descripcion: [
      "El taller de programación y robótica, utilizamos plataformas de Ofimática para que nuestros alumnos puedan comprender su uso y la importancia en su enseñanza en general, utilizamos Code.org el cual es una plataforma que por bloques nuestros alumnos aprenden a programar además de revisar código de los trabajos que realizan, utilizamos nuestros Robots LEGO Y VEX.",
      "Nuestros alumnos participan de las ferias de Robótica realizadas en distintos establecimientos de la región obteniendo resultados enriquecedores, conociendo proyectos de otros colegios, liceos y universidades , aportando conocimientos y adquiriendo experiencia, además de participar de concursos de robot’s etc. Con los cuales han tenido buenas experiencias.",
      "Los alumnos utilizan software el cual funciona con bloques en el uso de robots conocen su mecanismo y armado de piezas, entienden su lógica y funcionamiento, además de instalar en Tablet los programas necesarios para su funcionamiento en dispositivos.",
      "Los alumnos aprenden lo esencial en programación como lo es diagramas de flujos pseudocodigo con software libre Pseint.",
      "Utilizamos Arduino  que  es una plataforma de hardware libre basada en una sencilla placa con un microcontrolador y un entorno de desarrollo (IDE) que permite escribir código y cargarlo directamente en la placa el cual ofrece un entorno activo y práctico ideal para desarrollar habilidades STEAM (ciencia, tecnología, ingeniería, arte y matemáticas).",
      "Los Alumnos aprenden a construir y programar robots, mejorando su pensamiento lógico, creatividad y capacidad de resolución de problemas de manera divertida.",
      "En resumen, es un espacio que transforma la tecnología de un concepto abstracto a herramientas tangible y creativa para niños y adolescentes de nuestra escuela Esperanza."
    ],
    aspectosClaves: [
      {
        titulo: "Enfoque Práctico",
        texto: "Se basa en \"aprender haciendo\" (learning by doing), donde los estudiantes construyen modelos y programan sensores para darles vida, lo que facilita la comprensión de conceptos abstractos."
      },
      {
        titulo: "Aprendizaje Progresivo",
        texto: "Las actividades suelen ir desde la manipulación motriz fina hasta la programación en bloque o textual de mayor complejidad."
      },
      {
        titulo: "Habilidades Blandas",
        texto: "Fomentan el trabajo colaborativo, la paciencia y la constancia al enfrentar retos técnicos."
      },
      {
        titulo: "Impacto Educativo",
        texto: "Estudios sugieren que la participación mejora la motivación y puede elevar el rendimiento académico en asignaturas relacionadas."
      },
      {
        titulo: "Temáticas Comunes",
        texto: "Uso de programación visual intuitiva (ej. CODE), diseño de mecanismos, sensores y también, introducción a la impresión 3D."
      }
    ]
  },
  {
    titulo: "Taller de musica",
    slug: "musica",
    href: `${rutas.talleres}musica/`,
    imagen: "/images/slide8.jpeg",
    descripcion: [
      "El taller de música está orientado a que los alumnos puedan desarrollar sus habilidades artísticas, motrices e intelectuales a través de la música. El objetivo de este taller es formar una banda con los estudiantes y que cada uno de ellos pueda ejecutar un instrumento musical.",
      "Se trabaja con distintos instrumentos, entre ellos trompetas, saxofón, pianos, guitarras, bajos y batería. Se forma al alumno en su instrumento de manera particular y grupal, realizando ensayos y presentaciones que ayudan a aprender a trabajar en equipo, fomentan el respeto y fortalecen la integración entre compañeros.",
      "Las presentaciones de la banda ayudan a que los alumnos pierdan el miedo al público y desarrollen más personalidad al ejecutar su instrumento. También permiten hacer visible el trabajo de los estudiantes ante sus pares, apoderados y profesores, como ocurre en las licenciaturas de los alumnos que egresan de octavo básico.",
      "El arte, y en especial la música, tiene grandes beneficios en el desarrollo de los alumnos, ayudando a la concentración, el respeto y la constancia, además de fortalecer la disciplina y el compromiso."
    ]
  },
  {
    titulo: "Taller de danza",
    slug: "danza",
    href: `${rutas.talleres}danza/`,
    imagen: "/images/slide3.png",
    descripcion: [
      "Aun no se cuenta con informacion oficial sobre este taller. Agradecemos su comprension y le invitamos a contactarse con nosotros ante cualquier duda o consulta."
    ],
    sinInformacion: true
  },
  {
    titulo: "Taller de Voleibol",
    slug: "voleibol",
    href: `${rutas.talleres}voleibol/`,
    imagen: "/images/slide2.png",
    ciclo: "2° ciclo",
    descripcion: [
      "Este taller está enfocado en la enseñanza y práctica del voleibol como deporte colectivo, comenzando desde sus fundamentos básicos. A lo largo de las sesiones se trabajan habilidades técnicas como el pase, saque y recepción, junto con aspectos tácticos simples del juego. Además, se promueve de manera constante el trabajo en equipo, la comunicación y el respeto entre compañeros, favoreciendo un ambiente de aprendizaje colaborativo y participativo."
    ]
  },
  {
    titulo: "Taller de Futsal",
    slug: "futsal",
    href: `${rutas.talleres}futsal/`,
    imagen: "/images/slide5.jpeg",
    ciclo: "2° ciclo",
    descripcion: [
      "El taller de futsal tiene como objetivo desarrollar las habilidades propias de este deporte colectivo, iniciando desde lo más básico. Se trabajan fundamentos técnicos como el control del balón, pase, conducción y finalización, incorporando progresivamente situaciones de juego real. Al igual que en voleibol, se fomenta el trabajo en equipo, la toma de decisiones y el compañerismo, promoviendo valores deportivos dentro y fuera de la cancha."
    ]
  },
  {
    titulo: "Taller Deportivo",
    slug: "deportivo",
    href: `${rutas.talleres}deportivo/`,
    imagen: "/images/slide7.jpeg",
    ciclo: "1° ciclo",
    descripcion: [
      "Este taller está orientado al desarrollo de las habilidades motrices básicas en estudiantes de primer ciclo, tales como correr, saltar, lanzar y coordinar movimientos. A través de una metodología lúdica y dinámica, se busca fortalecer el compañerismo y la participación activa. Las actividades se organizan de manera alternada, intercalando una semana de futsal y otra de handball, con el propósito de estimular tanto las habilidades óculo-podales como las óculo-manuales, favoreciendo un desarrollo integral en los estudiantes."
    ]
  },
  {
    titulo: "Taller de ingles",
    slug: "ingles",
    href: `${rutas.talleres}ingles/`,
    imagen: "/images/slide9.jpeg",
    ciclo: "2° ciclo",
    descripcion: [
      "El Taller de Idioma Inglés está orientado a estudiantes de segundo ciclo básico y tiene como propósito fortalecer el aprendizaje del idioma de manera dinámica, participativa y cercana a la realidad de los niños y niñas. A través de actividades lúdicas, juegos, canciones, diálogos, proyectos y uso de recursos audiovisuales, se busca desarrollar habilidades comunicativas básicas en comprensión y expresión oral y escrita.",
      "El taller promueve un ambiente inclusivo y motivador, donde los estudiantes pueden adquirir vocabulario y estructuras simples del idioma inglés relacionadas con situaciones cotidianas, favoreciendo la confianza, la creatividad y el trabajo colaborativo. Asimismo, se fomenta el interés por otras culturas y el desarrollo de competencias necesarias para enfrentar los desafíos educativos y sociales del mundo actual.",
      "La metodología considera estrategias activas y contextualizadas, adecuadas a la etapa de desarrollo de los estudiantes de segundo ciclo, fortaleciendo el aprendizaje significativo y el gusto por el idioma inglés como herramienta de comunicación global."
    ]
  }
];

export const directivas = directivasData.directivas.map((directiva) => ({
  ...directiva,
  href: `${rutas.directivas}${directiva.slug}/`
}));

export const documentosOficiales = documentosOficialesData.documentos;

export const contactoEscuela = {
  telefono: "(71) 224 4049",
  telefonoHref: "tel:+56712244049",
  correo: "escuelaesperanza@daemtalca.cl",
  correoHref: "mailto:escuelaesperanza@daemtalca.cl",
  horario: "Lunes a jueves: 08:30 - 17:30 hrs · Viernes: 08:30 - 14:00 hrs",
  direccion: "Calle 9 Nte. S/N, Talca, Chile",
  mapaSrc:
    "https://www.google.com/maps?q=Calle%209%20Nte.%202274%2C%20Talca%2C%20Chile&output=embed"
};

export const instagramInicio = {
  cuenta: "@escuela_esperanzatalca",
  nombre: "Escuela Esperanza",
  href: "https://www.instagram.com/escuela_esperanzatalca/",
  publicaciones: [
    "/images/ig1.png",
    "/images/ig2.png",
    "/images/ig3.png",
    "/images/ig4.png",
    "/images/ig5.png",
    "/images/ig6.png"
  ]
};

export const accesosCircularesInicio = [
  {
    titulo: "Mision de la escuela",
    texto:
      "Promover una educacion que ofrezca experiencias de aprendizaje creativas e innovadoras.",
    href: rutas.misionVision,
    icono: "fa-compass"
  },
  {
    titulo: "Vision de la escuela",
    texto:
      "Ser reconocida por su formacion academica sustentada en un trabajo creativo, innovador y de excelencia.",
    href: rutas.misionVision,
    icono: "fa-eye"
  }
];

export const pieContenido = pieContenidoData;

export const seccionesInstitucionalesPagina = [
  { titulo: "Mision de la escuela", id: "mision" },
  { titulo: "Vision de la escuela", id: "vision" },
  ...documentosOficiales
];

export const misionVisionDetalle = {
  subtitulo: "Nuestra Escuela",
  titulo: "Mision y vision",
  lema: "Escuela Esperanza: “Compromiso y Acción”",
  secciones: [
    {
      titulo: "Misión de la escuela",
      icono: "fa-compass",
      texto: [
        "Promover una educación que ofrezca experiencias de aprendizaje creativas e innovadoras, que proporcionen a los estudiantes el desarrollo de las habilidades para el siglo XXI y herramientas tecnológicas, medioambientales, idiomáticas, deportivas y artísticas, para insertarse en la educación media con autonomía, responsabilidad e integridad."
      ]
    },
    {
      titulo: "Visión de la escuela",
      icono: "fa-eye",
      texto: [
        "La Escuela Esperanza será reconocida por su formación académica, la cual estará sustentada en un trabajo creativo, innovador y de excelencia que permitirá a los estudiantes desarrollar la autonomía, responsabilidad e integridad para poder desenvolverse adecuadamente en la sociedad del siglo XXI o Sociedad Digital."
      ]
    }
  ]
};

export const sellosEducativosDetalle = {
  subtitulo: "Nuestra Escuela",
  titulo: "Sellos educativos",
  introduccion:
    "Los sellos educativos orientan el Proyecto Educativo Institucional de la Escuela Esperanza y expresan los compromisos formativos que guian la vida escolar.",
  sellos: [
    {
      numero: "1",
      titulo: "Educación Integral",
      icono: "fa-people-group",
      texto:
        "superación académica a partir de una educación inclusiva, integral y participativa."
    },
    {
      numero: "2",
      titulo: "Autonomía y Responsabilidad",
      icono: "fa-person-chalkboard",
      texto:
        "promoción y desarrollo de la autonomía y responsabilidad de la comunidad educativa, para mejorar la calidad de la educación que impartimos."
    },
    {
      numero: "3",
      titulo: "Educación Medioambiental",
      icono: "fa-leaf",
      texto: "educación para el desarrollo de la conciencia ambiental."
    },
    {
      numero: "4",
      titulo: "Idioma Inglés",
      icono: "fa-language",
      texto:
        "adquisición de herramientas idiomáticas básicas por parte de los estudiantes de nuestra escuela como parte de su formación personal y posteriormente profesional y laboral."
    }
  ]
};
