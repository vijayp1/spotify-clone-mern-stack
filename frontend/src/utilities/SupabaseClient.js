import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL // your actual project URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY // your anon public key
export const supabase = createClient(supabaseUrl, supabaseKey)