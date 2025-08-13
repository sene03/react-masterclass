import { useAtomValue, useSetAtom } from "jotai";
import { useForm } from "react-hook-form";
import { categoryAtom, toDoAtom } from "../atoms";

interface IForm {
  toDo: string;
}

function CreateToDo() {
  const setToDos = useSetAtom(toDoAtom);
  const category = useAtomValue(categoryAtom);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IForm>();

  const onSubmit = ({ toDo }: IForm) => {
    setToDos((prev) => [...prev, { id: Date.now(), text: toDo, category }]);
    reset(); // clear input box
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("toDo", { required: "Please write a To Do" })}
        placeholder="Write a to do"
      />
      <button>Add</button>
      {errors.toDo && <span>{errors?.toDo?.message}</span>}
    </form>
  );
}

export default CreateToDo;
