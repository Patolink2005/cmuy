import { createClient } from '@supabase/supabase-js'

// Es MUY IMPORTANTE que estas variables de entorno estén configuradas.
// En Vite, puedes crear un archivo .env.local en la raíz de tu proyecto.
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);