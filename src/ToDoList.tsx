import { useForm } from "react-hook-form";

interface ITodo {
  todo: string;
}

function ToDoList() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ITodo>();

  const onSubmit = (data: ITodo) => {
    console.log(data);
    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("todo", { required: "Please write a To Do" })}
          placeholder="Write a to do"
        />
        <button>Add</button>
        {errors.todo && <span>{errors?.todo?.message}</span>}
      </form>
    </div>
  );
}

export default ToDoList;
