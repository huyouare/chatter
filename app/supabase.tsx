import { createClient } from "@supabase/supabase-js"
const SUPABASE_PROJECT_URL = "https://tfolutgisktalwzrgcrh.supabase.co"
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRmb2x1dGdpc2t0YWx3enJnY3JoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDMzNTU0MzAsImV4cCI6MjAxODkzMTQzMH0.Om38bbdIfCGpvXDfI6PZhJllsweguN3OhUzB9Z2Wp1w"
export default createClient(SUPABASE_PROJECT_URL, SUPABASE_ANON_KEY);
