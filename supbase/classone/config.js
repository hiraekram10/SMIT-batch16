import {createClient} from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'


const supUrl = 'https://nbgiefenbmmkkqbunnvw.supabase.co'
const supKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5iZ2llZmVuYm1ta2txYnVubnZ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA3MTY1MTgsImV4cCI6MjA3NjI5MjUxOH0.PaAqz3-afJIk6LfpuM4FdV2V-riSeiwrTey8V0-KEfw'


//intialize
const supabase = createClient(supUrl,supKey)


export default supabase;
