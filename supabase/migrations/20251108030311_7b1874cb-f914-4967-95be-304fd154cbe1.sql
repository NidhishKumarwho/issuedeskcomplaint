-- Create admin user account if it doesn't exist
-- Note: This creates the admin entry in user_roles table
-- The actual auth.users entry needs to be created manually through Supabase dashboard or signup

-- First, check if admin role exists, if not this will be used after manual user creation
-- Insert admin role for the admin user (this will be linked after the user signs up)
-- We'll use a known email: admin@issuedesk.gov.in

-- For now, we just ensure the role enum and structure is ready
-- The admin user will need to be created through the Supabase Auth interface with:
-- Email: admin@issuedesk.gov.in
-- Password: admin@123

-- Create a helper function to assign admin role after user creation
CREATE OR REPLACE FUNCTION public.assign_admin_role()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  admin_user_id uuid;
BEGIN
  -- Get the user ID for admin@issuedesk.gov.in
  SELECT id INTO admin_user_id 
  FROM auth.users 
  WHERE email = 'admin@issuedesk.gov.in'
  LIMIT 1;
  
  -- If user exists and doesn't have admin role, assign it
  IF admin_user_id IS NOT NULL THEN
    INSERT INTO public.user_roles (user_id, role)
    VALUES (admin_user_id, 'admin'::app_role)
    ON CONFLICT (user_id, role) DO NOTHING;
  END IF;
END;
$$;

-- Note: After creating the admin user in Supabase Auth dashboard,
-- run: SELECT public.assign_admin_role();