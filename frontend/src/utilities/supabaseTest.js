import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL // your actual project URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY // your anon public key
const supabase = createClient(supabaseUrl, supabaseKey)
const fileBuffer = fs.readFileSync('./Kannullona.mp3')

const { data, error } = await supabase
  .storage
  .from('spotify-songs')
  .upload('Retro/Kannullona.mp3', fileBuffer, {
    contentType: 'audio/mpeg',
    upsert: false
  })

if (error) console.error(error)
else console.log("Uploaded:", data)