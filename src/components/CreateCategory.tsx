import { useSetAtom } from "jotai";
import { useForm } from "react-hook-form";
import { categoriesAtom } from "../atoms";

interface ICategory {
  category: string;
}

function CreateCategory() {
  const { register, handleSubmit, reset } = useForm<ICategory>();
  const setCategories = useSetAtom(categoriesAtom);
  const onValid = ({ category }: ICategory) => {
    setCategories((prev) => [...prev, category]);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onValid)}>
      <span>new category</span>
      <input
        {...register("category", { required: true })}
        placeholder="Add new category"
      />
      <button>Add</button>
    </form>
  );
}

export default CreateCategory;
