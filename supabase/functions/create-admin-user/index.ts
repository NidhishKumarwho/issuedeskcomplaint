import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const supabaseAdmin = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    // Create admin user
    const { data: authData, error: authError } = await supabaseAdmin.auth.admin.createUser({
      email: 'admin@issuedesk.gov.in',
      password: 'admin@123',
      email_confirm: true,
      user_metadata: {
        full_name: 'System Administrator',
        aadhaar_number: 'ADMIN000000',
        phone: '0000000000'
      }
    })

    if (authError) {
      // If user already exists, that's okay
      if (authError.message.includes('already registered')) {
        return new Response(
          JSON.stringify({ message: 'Admin user already exists' }),
          { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 200 }
        )
      }
      throw authError
    }

    // Assign admin role
    if (authData.user) {
      const { error: roleError } = await supabaseAdmin
        .from('user_roles')
        .insert({ user_id: authData.user.id, role: 'admin' })
        .select()
        .single()

      if (roleError && !roleError.message.includes('duplicate')) {
        throw roleError
      }
    }

    return new Response(
      JSON.stringify({ message: 'Admin user created successfully', user: authData.user }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 200 }
    )

  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred'
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 400 }
    )
  }
})