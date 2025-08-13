import { useSetAtom } from "jotai";
import { DEFAULT_CATEGORIES, toDoAtom, type IToDo } from "../atoms";

function ToDo({ id, text, category }: IToDo) {
  const setToDos = useSetAtom(toDoAtom);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    console.log(name);

    setToDos((toDos) =>
      toDos.map((t) =>
        t.id === id ? { ...t, category: name as IToDo["category"] } : t
      )
    );
  };

  const deleteToDo = () => {
    setToDos((toDos) => toDos.filter((t) => t.id !== id));
  };

  return (
    <li key={id}>
      <span>
        {category} {text}
      </span>

      {category !== DEFAULT_CATEGORIES[1] && (
        <button name={DEFAULT_CATEGORIES[1]} onClick={onClick}>
          Doing
        </button>
      )}
      {category !== DEFAULT_CATEGORIES[0] && (
        <button name={DEFAULT_CATEGORIES[0]} onClick={onClick}>
          To Do
        </button>
      )}
      {category !== DEFAULT_CATEGORIES[2] && (
        <button name={DEFAULT_CATEGORIES[2]} onClick={onClick}>
          Done
        </button>
      )}
      <button style={{ background: "red" }} onClick={deleteToDo}>
        DELETE
      </button>
    </li>
  );
}
export default ToDo;
