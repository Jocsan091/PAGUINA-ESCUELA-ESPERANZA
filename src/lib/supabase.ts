import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;
const supabaseServiceRoleKey = import.meta.env.SUPABASE_SERVICE_ROLE_KEY;

export function hasPublicSupabaseConfig() {
  return Boolean(supabaseUrl && supabaseAnonKey);
}

export function hasServiceSupabaseConfig() {
  return Boolean(supabaseUrl && supabaseServiceRoleKey);
}

export function getPublicSupabaseClient() {
  if (!hasPublicSupabaseConfig()) {
    throw new Error("Faltan variables PUBLIC_SUPABASE_URL o PUBLIC_SUPABASE_ANON_KEY.");
  }

  return createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false
    }
  });
}

export function getServiceSupabaseClient() {
  if (!hasServiceSupabaseConfig()) {
    throw new Error("Falta SUPABASE_SERVICE_ROLE_KEY para operaciones de admin.");
  }

  return createClient(supabaseUrl, supabaseServiceRoleKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false
    }
  });
}

export function getNewsBucketName() {
  return import.meta.env.PUBLIC_SUPABASE_STORAGE_BUCKET || "noticias";
}
