import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export type Category = string;

export const DEFAULT_CATEGORIES = ["TO_DO", "DOING", "DONE"];

export interface IToDo {
  id: number;
  text: string;
  category: Category;
}
export const toDoAtom = atomWithStorage<IToDo[]>("toDos", []);

export const categoryAtom = atomWithStorage<Category>(
  "currentCategory",
  DEFAULT_CATEGORIES[0]
); // 현재 선택된 카테고리
export const categoriesAtom = atomWithStorage<string[]>("categories", [
  ...DEFAULT_CATEGORIES,
]); // 카테고리 전체

export const toDoSelector = atom((get) => {
  const cat = get(categoryAtom);
  const toDos = get(toDoAtom);
  return toDos.filter((t) => t.category === cat);
});
