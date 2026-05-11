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
      { label: "Directiva", href: rutas.directivas },
      { label: "Programa de Integracion Escolar (PIE)", href: rutas.pie },
      { label: "Departamento de orientacion", href: rutas.orientacion },
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
  {
    titulo: "Taller Programacion y robotica",
    slug: "programacion-robotica",
    href: `${rutas.talleres}programacion-robotica/`,
    imagen: "/images/slide3.png",
    descripcion: [textoTemporal, textoTemporal]
  },
  {
    titulo: "Taller de musica",
    slug: "musica",
    href: `${rutas.talleres}musica/`,
    imagen: "/images/slide1.png",
    descripcion: [textoTemporal, textoTemporal]
  },
  {
    titulo: "Taller de danza",
    slug: "danza",
    href: `${rutas.talleres}danza/`,
    imagen: "/images/slide2.png",
    descripcion: [textoTemporal, textoTemporal]
  },
  {
    titulo: "Taller de Voleibol",
    slug: "voleibol",
    href: `${rutas.talleres}voleibol/`,
    imagen: "/images/slide11.png",
    descripcion: [textoTemporal, textoTemporal]
  },
  {
    titulo: "Taller de Futsal",
    slug: "futsal",
    href: `${rutas.talleres}futsal/`,
    imagen: "/images/slide22.png",
    descripcion: [textoTemporal, textoTemporal]
  }
];

export const directivas = directivasData.directivas.map((directiva) => ({
  ...directiva,
  href: `${rutas.directivas}${directiva.slug}/`
}));

export const documentosOficiales = documentosOficialesData.documentos;

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
    href: "#mision",
    icono: "fa-compass"
  },
  {
    titulo: "Vision de la escuela",
    texto: textoTemporal,
    href: "#vision",
    icono: "fa-eye"
  }
];

export const pieContenido = pieContenidoData;

export const seccionesInstitucionalesPagina = [
  { titulo: "Mision de la escuela", id: "mision" },
  { titulo: "Vision de la escuela", id: "vision" },
  ...documentosOficiales
];
