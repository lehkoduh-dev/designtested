create table public.reviews (
  id uuid primary key default gen_random_uuid(),
  tool_slug text not null,
  user_id uuid not null references auth.users(id) on delete cascade,
  rating int not null check (rating between 1 and 5),
  body text check (char_length(body) <= 800),
  status text not null default 'pending' check (status in ('pending','approved','rejected')),
  created_at timestamptz not null default now(),
  unique (tool_slug, user_id)
);
alter table public.reviews enable row level security;
create policy "read approved" on public.reviews for select using (status = 'approved');
create policy "own insert" on public.reviews for insert with check (auth.uid() = user_id and status = 'pending');
create policy "own update" on public.reviews for update using (auth.uid() = user_id) with check (auth.uid() = user_id and status = 'pending');
