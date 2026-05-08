import { getCollection, type CollectionEntry } from "astro:content";

export type Perfil = CollectionEntry<"perfiles">;

export async function listarPerfilesPorGrupo(grupo: string) {
  const perfiles = await getCollection("perfiles");

  return perfiles
    .filter((perfil) => perfil.data.grupo === grupo)
    .sort((a, b) => a.data.orden - b.data.orden)
    .map((perfil) => ({
      nombre: perfil.data.nombre,
      cargo: perfil.data.cargo,
      imagen: perfil.data.imagen,
      descripcion: perfil.data.descripcion
    }));
}
