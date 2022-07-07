export interface IRoom {
  id: string;
  owner: IUser;
  name: string;
  image_url: string;
  stats: {
    hits: number;
    failures: number;
  }
  official: boolean;
  reset_hour: number;
  current_word: IWord;
  all_words: IWord[];
  created_at: string;
  updated_at: string;
}

export type Difficulty = "easy" | "medium" | "hard" | "expert";

export interface IWord {
  name: string;
  difficulty: Difficulty;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  avatar_url: string;
}