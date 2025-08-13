import { atom } from "jotai";

export type Category = string;

export const DEFAULT_CATEGORIES = ["TO_DO", "DOING", "DONE"];

export interface IToDo {
  id: number;
  text: string;
  category: Category;
}
export const toDoAtom = atom<IToDo[]>([]);

export const categoryAtom = atom<Category>(DEFAULT_CATEGORIES[0]); // 현재 선택된 카테고리
export const categoriesAtom = atom<string[]>([...DEFAULT_CATEGORIES]); // 카테고리 전체

export const toDoSelector = atom((get) => {
  const cat = get(categoryAtom);
  const toDos = get(toDoAtom);
  return toDos.filter((t) => t.category === cat);
});
