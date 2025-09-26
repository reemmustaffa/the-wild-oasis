import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://yiahpfazdctqljzmmtzx.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlpYWhwZmF6ZGN0cWxqem1tdHp4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg4NzM2NjksImV4cCI6MjA3NDQ0OTY2OX0.A9dxkYUFkcL-rzNhrcd5-baVo9srwS-yHA3qHiHvwSU";

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;
