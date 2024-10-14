import { createClient } from "@supabase/supabase-js"

export const supabaseUrl = "https://djfaztojwfbjslvxbdep.supabase.co"
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRqZmF6dG9qd2ZianNsdnhiZGVwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg2NDg0NTQsImV4cCI6MjA0NDIyNDQ1NH0.SsK1PGdxtIiBQ-m5cAgDG6CI8nBmz1Ftxw_w0Ww_Y8I"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
