import { useAtom, useAtomValue } from "jotai";
import ToDo from "./ToDo";
import CreateToDo from "./CreateToDo";
import { categoriesAtom, categoryAtom, toDoSelector } from "../atoms";
import CreateCategory from "./CreateCategory";

function ToDoList() {
  const toDos = useAtomValue(toDoSelector);
  const [category, setCategory] = useAtom(categoryAtom);
  const categories = useAtomValue(categoriesAtom);
  const onInput = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(event.target.value);
  };
  return (
    <div>
      <h1>To Do List</h1>
      <hr />
      <select value={category} onInput={onInput}>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      <div style={{ display: "flex" }}>
        <CreateToDo />
        <CreateCategory />
      </div>
      <ul>
        {toDos.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
