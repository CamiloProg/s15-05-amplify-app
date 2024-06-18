import React from "react";
import { Input } from "components/common/shadcn/input";
import { Button } from "components/common/shadcn/button";
import { FormData } from "../UploadMusicModal.types";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import songShema from "../../../../shema/songSchema";

interface FormComponentProps {
  formData: FormData;
  publishTheEntry: (data: FormData) => Promise<void>;
}

const FormComponent: React.FC<FormComponentProps> = ({ publishTheEntry }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(songShema),
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    await publishTheEntry(data);
  };

  return (
    <form
      className="flex items-center justify-between flex-col w-full gap-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="w-full">
        <Input
          id="name"
          placeholder="Song name"
          className="w-full bg-gray-500 border-gray-500 placeholder:text-gray-400
         text-gray-300 outline-none focus:border-gray-400"
          {...register("name")}
        />
        {errors.name?.message && <p className="text-red-500 text-sm">{errors.name?.message}</p>}
      </div>

      <div className="w-full">
        <Input
          id="genre"
          placeholder="Genre"
          className="w-full bg-gray-500 border-gray-500 placeholder:text-gray-400
         text-gray-300 outline-none focus:border-gray-400"
          {...register("genre")}
        />
        {errors.genre?.message && <p className="text-red-500 text-sm">{errors.genre?.message}</p>}
      </div>

      <div className="w-full">
        <Input
          id="album"
          placeholder="Add album"
          className="w-full bg-gray-500 border-gray-500 placeholder:text-gray-400
         text-gray-300 outline-none focus:border-gray-400"
          {...register("album")}
        />
        {errors.album?.message && <p className="text-red-500 text-sm">{errors.album?.message}</p>}
      </div>
      <Button type="submit" className="sm:ml-auto sm:w-auto w-full" variant="secondary">
        Subir Música
      </Button>
    </form>
  );
};

export default FormComponent;
