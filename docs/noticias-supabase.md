# Noticias con Supabase y Cloudflare

Esta implementacion deja la web publica leyendo noticias reales desde Supabase y el panel admin protegido por credenciales del servidor.

## Lo que ya hace el proyecto

- La home muestra las ultimas 3 noticias publicadas.
- `/noticias/` muestra todas las noticias publicadas.
- `/admin/noticias/` pide credenciales antes de mostrar el formulario.
- El admin puede crear noticias con imagen opcional y eliminar noticias.
- Si no se sube imagen, se usa la imagen predeterminada del proyecto.

## Variables necesarias

En `.env` local y en Cloudflare Pages > Settings > Environment variables:

- `PUBLIC_SUPABASE_URL`
- `PUBLIC_SUPABASE_ANON_KEY`
- `PUBLIC_SUPABASE_STORAGE_BUCKET`
- `SUPABASE_SERVICE_ROLE_KEY`
- `ADMIN_USERNAME`
- `ADMIN_PASSWORD`

## SQL recomendado en Supabase

```sql
create extension if not exists pgcrypto;

create table if not exists public.noticias (
  id uuid primary key default gen_random_uuid(),
  titulo text not null,
  contenido text not null,
  imagen_url text,
  fecha_publicacion date not null default current_date,
  publicada boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists noticias_set_updated_at on public.noticias;
create trigger noticias_set_updated_at
before update on public.noticias
for each row
execute function public.set_updated_at();

alter table public.noticias enable row level security;

create policy "lectura publica de noticias publicadas"
on public.noticias
for select
to anon
using (publicada = true);
```

## Storage

Crear un bucket publico llamado `noticias` en Supabase Storage.

Si usas otro nombre, ajusta `PUBLIC_SUPABASE_STORAGE_BUCKET`.

## Cloudflare Pages

El proyecto ahora usa renderizado de servidor para ocultar la clave de admin y la `service role`.

En Cloudflare:

1. Conecta el repo al proyecto Pages.
2. Usa `npm run build` como build command.
3. Usa `dist` como output directory.
4. Carga todas las variables de entorno de la lista superior.

## Nota de seguridad

Este panel admin esta protegido con usuario y contrasena del servidor. Es suficiente para un sitio informativo pequeno, pero si luego quieres varios administradores o permisos mas finos, conviene migrar a Supabase Auth o Cloudflare Access.
