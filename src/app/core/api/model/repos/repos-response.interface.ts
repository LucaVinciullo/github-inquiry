import { Repo } from './repo.interface';

export interface ReposResponse {
  total_count: number,
  incomplete_results: boolean,
  items: Repo[]
}
