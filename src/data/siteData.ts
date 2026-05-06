import { rutas } from "../lib/rutas";

export const menu = [
  { label: "INICIO", href: rutas.inicio },
  { label: "QUIENES SOMOS", href: rutas.quienesSomos },
  { label: "TALLERES", href: rutas.talleres },
  { label: "DIRECTIVAS", href: rutas.directivas },
  { label: "NOTICIAS", href: rutas.noticias }
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
    image: "/images/slide2.png",
    title: "Visita Nuestra escuela\nY encontraras esperanza",
    subtitle: "Escuela Esperanza",
    extra: "",
    button: "Leer mas",
    href: rutas.quienesSomos
  },
  {
    image: "/images/slide3.png",
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
  imagen: "/images/slide2.png"
};

export const quienesSomosDetalle = {
  titulo: "Escuela Esperanza",
  texto: [textoTemporal, textoTemporal, textoTemporal],
  imagen: "/images/slide2.png"
};

export const talleres = [
  "Taller Programacion y robotica",
  "Taller de musica",
  "Taller de danza",
  "Taller de Voleibol",
  "Taller de Futsal"
];

export const directivas = [
  {
    titulo: "Equipo directivo",
    slug: "equipo-directivo",
    href: `${rutas.directivas}equipo-directivo/`,
    integrantes: [
      {
        nombre: "Ines Arias Quintero",
        cargo: "Directora",
        imagen: "/images/DirectoraInesAriasQuintero.jpeg",
        descripcion: textoTemporal
      },
      {
        nombre: "Juan Carlos",
        cargo: "Inspector",
        imagen: "/images/IspectorJuanCarlos.jpeg",
        descripcion: textoTemporal
      },
      {
        nombre: "Teresa Rojas",
        cargo: "Jefa UTP",
        imagen: "/images/JefaUtpTeresaRojas.jpeg",
        descripcion: textoTemporal
      }
    ],
    descripcion: [textoTemporal, textoTemporal]
  },
  {
    titulo: "Centro general de padres y apoderados",
    slug: "centro-padres",
    href: `${rutas.directivas}centro-padres/`,
    integrantes: [
      {
        nombre: "Escuela Esperanza",
        cargo: "Presidencia",
        imagen: "/images/logo-escuela.png",
        descripcion: textoTemporal
      },
      {
        nombre: "Escuela Esperanza",
        cargo: "Secretaria",
        imagen: "/images/logo-escuela.png",
        descripcion: textoTemporal
      },
      {
        nombre: "Escuela Esperanza",
        cargo: "Tesoreria",
        imagen: "/images/logo-escuela.png",
        descripcion: textoTemporal
      }
    ],
    descripcion: [textoTemporal, textoTemporal]
  },
  {
    titulo: "Centro general de alumnos",
    slug: "centro-alumnos",
    href: `${rutas.directivas}centro-alumnos/`,
    integrantes: [
      {
        nombre: "Escuela Esperanza",
        cargo: "Presidencia",
        imagen: "/images/logo-escuela.png",
        descripcion: textoTemporal
      },
      {
        nombre: "Escuela Esperanza",
        cargo: "Secretaria",
        imagen: "/images/logo-escuela.png",
        descripcion: textoTemporal
      },
      {
        nombre: "Escuela Esperanza",
        cargo: "Delegacion",
        imagen: "/images/logo-escuela.png",
        descripcion: textoTemporal
      }
    ],
    descripcion: [textoTemporal, textoTemporal]
  }
];

export const seccionesInstitucionales = [
  {
    titulo: "Nuestra historia",
    id: "nuestra-historia",
    href: "/documentos/nuestra-historia.pdf"
  },
  {
    titulo: "Sellos educativos",
    id: "sellos-educativos",
    href: "/documentos/sellos-educativos.pdf"
  },
  {
    titulo: "Nuestras actividades escolares",
    id: "actividades-escolares",
    href: "/documentos/actividades-escolares.pdf"
  },
  {
    titulo: "PEI (Proyecto educativo institucional)",
    id: "pei",
    href: "/documentos/pei.pdf"
  },
  {
    titulo: "Reglamento de evaluacion",
    id: "reglamento-evaluacion",
    href: "/documentos/reglamento-evaluacion.pdf"
  },
  {
    titulo: "Reglamento interno",
    id: "reglamento-interno",
    href: "/documentos/reglamento-interno.pdf"
  },
  {
    titulo: "RICE (Reglamento interno de convivencia escolar)",
    id: "rice",
    href: "/documentos/rice.pdf"
  }
];

export const instagramInicio = {
  cuenta: "@escuela_esperanzatalca",
  nombre: "Escuela Esperanza",
  href: "https://www.instagram.com/escuela_esperanzatalca/",
  publicaciones: [
    "/images/slide1.png",
    "/images/slide2.png",
    "/images/slide3.png",
    "/images/slide11.png",
    "/images/slide22.png",
    "/images/slide33.png"
  ]
};

export const accesosCircularesInicio = [
  {
    titulo: "Mision de la escuela",
    texto: textoTemporal,
    href: `${rutas.institucional}#mision`,
    icono: "fa-compass"
  },
  {
    titulo: "Vision de la escuela",
    texto: textoTemporal,
    href: `${rutas.institucional}#vision`,
    icono: "fa-eye"
  }
];

export const seccionesInstitucionalesPagina = [
  { titulo: "Mision de la escuela", id: "mision" },
  { titulo: "Vision de la escuela", id: "vision" },
  ...seccionesInstitucionales
];
