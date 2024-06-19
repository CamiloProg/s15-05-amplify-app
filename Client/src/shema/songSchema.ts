import { z } from "zod";

const songShema = z.object({
  name: z
    .string()
    .min(3, {
      message: "Nombre debe tener al menos 3 caracteres",
    })
    .max(30, {
      message: "Nombre debe tener menos de 30 caracteres",
    }),
  genre: z
    .string()
    .min(3, {
      message: "Género debe tener al menos 3 caracteres",
    })
    .max(30, {
      message: "Género debe tener menos de 30 caracteres",
    }),
  album: z
    .string()
    .min(3, {
      message: "Album debe tener al menos 3 caracteres",
    })
    .max(30, {
      message: "Album debe tener menos de 30 caracteres",
    }),
});

export default songShema;
