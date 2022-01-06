import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
	'https://ausndosrikwsnbptgwyt.supabase.co',
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MTQ3MjAzNSwiZXhwIjoxOTU3MDQ4MDM1fQ.oovQ4XAdImV8wrQO-etw7il-ejm6iVj3Cz93_H3i6tk'
);
