'use server';

import { redirect } from 'next/navigation';

export async function searchInput(formData: FormData) {
  const searchQuery = formData.get('searchQuery');

  if (typeof searchQuery !== 'string' || !searchQuery) {
    redirect('/');
  }

  redirect(`/search?searchQuery=${searchQuery}`);
}
