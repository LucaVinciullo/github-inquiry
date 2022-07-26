export interface Repo {
  name: string,
  display_name: string,
  short_description: string,
  description: string,
  created_by: string,
  released: string,
  created_at: Date,
  updated_at: Date,
  featured: boolean,
  curated: boolean,
  score: number
}
