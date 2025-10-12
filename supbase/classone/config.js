import {createClient} from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'


const supUrl = 'https://pvyxmmturmsxfckajbbu.supabase.co'
const supKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB2eXhtbXR1cm1zeGZja2FqYmJ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjAxOTcyMjYsImV4cCI6MjA3NTc3MzIyNn0.Y0zbjZ1e9ZWsjD-cVaZxOOz28J33HgKo7hkhDEDxics'


//intialize
const supabase = createClient(supUrl,supKey)


export default supabase;
