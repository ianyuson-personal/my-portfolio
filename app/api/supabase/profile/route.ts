import { NextResponse } from 'next/server';
import { createClient } from '@/utils/supabase/server';

export async function GET(request: Request) {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase.from('profile').select('*');

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    const response = NextResponse.json({ profiles: data });

    // Caching for 5 minutes on Vercel edge
    response.headers.set('Cache-Control', 's-maxage=300, stale-while-revalidate=60');

    return response;
  } catch (err) {
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}


// // to add things on the table profile. This can use in future
// export async function POST(request: Request) {
//     const supabase = await createClient()
//   try {
//     const body = await request.json();

//     // Insert a new profile into the `profile` table
//     const { data, error } = await supabase.from('profile').insert([body]);

//     if (error) {
//       return NextResponse.json({ error: error.message }, { status: 500 });
//     }

//     return NextResponse.json({ profile: data });
//   } catch (err) {
//     return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
//   }
// }
