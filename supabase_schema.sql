-- ========================================================
-- 1. Create public.collaborations table
-- ========================================================
create table if not exists public.collaborations (
  id uuid default gen_random_uuid() primary key,
  label text,
  title text not null,
  image text,
  description text,
  href text,
  read_time text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.collaborations enable row level security;

-- Policies:
-- Allow anyone (public/anon) to select
create policy "Allow public read access on collaborations"
on public.collaborations for select using (true);

-- Allow authenticated users (admin) to manage (insert, update, delete)
create policy "Allow admin to insert collaborations"
on public.collaborations for insert with check (auth.role() = 'authenticated');

create policy "Allow admin to update collaborations"
on public.collaborations for update using (auth.role() = 'authenticated');

create policy "Allow admin to delete collaborations"
on public.collaborations for delete using (auth.role() = 'authenticated');


-- ========================================================
-- 2. Create public.stories table
-- ========================================================
create table if not exists public.stories (
  id uuid default gen_random_uuid() primary key,
  label text,
  title text not null,
  description text,
  href text,
  image text,
  read_time text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.stories enable row level security;

-- Policies:
-- Allow anyone to select
create policy "Allow public read access on stories"
on public.stories for select using (true);

-- Allow admin to manage
create policy "Allow admin to insert stories"
on public.stories for insert with check (auth.role() = 'authenticated');

create policy "Allow admin to update stories"
on public.stories for update using (auth.role() = 'authenticated');

create policy "Allow admin to delete stories"
on public.stories for delete using (auth.role() = 'authenticated');


-- ========================================================
-- 3. Create public.events table (for CMS / Dynamic slider)
-- ========================================================
create table if not exists public.events (
  id uuid default gen_random_uuid() primary key,
  slug text not null unique,
  title text not null,
  label text,
  short_description text,
  long_description text[] default '{}'::text[],
  event_date timestamp with time zone,
  date_string text,
  banner_image_url text,
  video_url text,
  gallery_urls text[] default '{}'::text[],
  speakers jsonb default '[]'::jsonb,
  registration_open boolean default false,
  registration_limit integer,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.events enable row level security;

-- Policies:
-- Allow anyone to select
create policy "Allow public read access on events"
on public.events for select using (true);

-- Allow admin to manage
create policy "Allow admin to insert events"
on public.events for insert with check (auth.role() = 'authenticated');

create policy "Allow admin to update events"
on public.events for update using (auth.role() = 'authenticated');

create policy "Allow admin to delete events"
on public.events for delete using (auth.role() = 'authenticated');


-- ========================================================
-- 4. Create public.tv_items table
-- ========================================================
create table if not exists public.tv_items (
  id uuid default gen_random_uuid() primary key,
  label text,
  title text not null,
  href text,
  image text,
  video text,
  description text,
  read_time text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.tv_items enable row level security;

-- Policies:
-- Allow anyone to select
create policy "Allow public read access on tv_items"
on public.tv_items for select using (true);

-- Allow admin to manage
create policy "Allow admin to insert tv_items"
on public.tv_items for insert with check (auth.role() = 'authenticated');

create policy "Allow admin to update tv_items"
on public.tv_items for update using (auth.role() = 'authenticated');

create policy "Allow admin to delete tv_items"
on public.tv_items for delete using (auth.role() = 'authenticated');


-- ========================================================
-- 5. Create public.showcase_submissions table
-- ========================================================
create table if not exists public.showcase_submissions (
  id uuid default gen_random_uuid() primary key,
  startup_name text not null,
  founder_name text not null,
  email text not null,
  phone text,
  website_url text,
  description text not null,
  public_consent boolean default true,
  status text default 'pending',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.showcase_submissions enable row level security;

-- Policies:
-- Allow anyone to insert (public form submission)
create policy "Allow public to insert showcase_submissions"
on public.showcase_submissions for insert with check (true);

-- Allow authenticated users (admin) to read and manage submissions
create policy "Allow admin to select showcase_submissions"
on public.showcase_submissions for select using (auth.role() = 'authenticated');

create policy "Allow admin to update showcase_submissions"
on public.showcase_submissions for update using (auth.role() = 'authenticated');

create policy "Allow admin to delete showcase_submissions"
on public.showcase_submissions for delete using (auth.role() = 'authenticated');
