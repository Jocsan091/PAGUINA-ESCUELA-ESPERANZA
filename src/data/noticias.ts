export type Noticia = {
  id: string;
  fecha: string;
  imagen: string;
  titulo: string;
  contenido: string;
  publicada: boolean;
};

export const imagenNoticiaPredeterminada = "/images/slide3.png";

export const noticiasSeed: Noticia[] = [];
