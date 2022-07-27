export interface ReposForm {
  searchBy: 'name' | 'issue';
  name: string;
  language: string;
  stars: number;
  issue: string;
}
