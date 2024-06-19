import React, { JSX, useState, ChangeEvent, Suspense } from "react";
import { Button } from "components/common/shadcn/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "components/common/shadcn/dialog";
import { Input } from "components/common/shadcn/input";
import { FormData } from "./UploadMusicModal.types";
import handleUploadCloudinary from "../../../services/uploadCloudinaryService";
import FormComponent from "./components/FormComponent";
import toast, { Toaster } from "react-hot-toast";
import { Skeleton } from "../shadcn/skeleton";
import FileDisplay from "./components/FileDisplay";
import WelcomeMessage from "./components/WelcomeMessage";
import FileUploadDropzone from "./components/FileUploadDropzone";
import convertUrlToFile from "../../../utils/convertUrlToFile";

const coverDefault =
  "https://res.cloudinary.com/drwwbw0ih/image/upload/v1718670701/Assets/cover.png";

function UploadMusicModal(): JSX.Element {
  const [open, setOpen] = useState<boolean>(false);
  const [fileName, setFileName] = useState<string>("");
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [cover, setCover] = useState<string>(coverDefault);
  const [coverFile, setCoverFile] = useState<File | null>(null);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    genre: "",
    album: "",
  });

  const handleDialog = (): void => {
    setOpen(true);
  };

  const checkFileSize = (file: File): boolean => {
    if (file.size > 100 * 1024 * 1024) {
      // 100MB in bytes
      toast.error("El archivo es demasiado grande. El tamaño máximo es 100MB.", {
        position: "top-right",
        duration: 3000,
      });
      return false;
    }
    return true;
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      if (!checkFileSize(file)) {
        return;
      }
      setFileName(file.name);
      setAudioFile(file);
    }
  };

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      setCoverFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setCover(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>): void => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>): void => {
    event.preventDefault();
    event.stopPropagation();
    if (event.dataTransfer.files && event.dataTransfer.files.length > 0) {
      const file = event.dataTransfer.files[0];
      if (!checkFileSize(file)) {
        return;
      }
      setFileName(file.name);
      setAudioFile(file);
      event.dataTransfer.clearData();
    }
  };

  const publishTheEntry = async (data: FormData): Promise<void> => {
    const formDataLowerCase = {
      ...data,
      name: data.name.toLowerCase(),
      genre: data.genre.toLowerCase(),
      album: data.album.toLowerCase(),
    };

    if (audioFile) {
      const audioUrl = await handleUploadCloudinary(audioFile, "video", formDataLowerCase);
      if (audioUrl) {
        setFileName("");
        setAudioFile(null);
        console.log("Audio URL:", audioUrl);
      }
    }
    if (coverFile) {
      const coverUrl = await handleUploadCloudinary(coverFile, "image", formDataLowerCase);
      if (coverUrl) {
        setCover(coverDefault);
        setCoverFile(null);
        console.log("Cover URL:", coverUrl);
      }
    } else {
      const defaultCoverFile = await convertUrlToFile(coverDefault);
      if (defaultCoverFile) {
        const coverUrl = await handleUploadCloudinary(defaultCoverFile, "image", formDataLowerCase);
        if (coverUrl) {
          console.log("Default Cover URL:", coverUrl);
        }
      }
    }
  };

  const handleClearData = (): void => {
    setFileName("");
    setAudioFile(null);
    setCover(coverDefault);
    setCoverFile(null);
    setFormData({
      name: "",
      genre: "",
      album: "",
    });
  };

  const handleFormSubmit = async (data: FormData): Promise<void> => {
    await publishTheEntry(data);
  };

  return (
    <div className="hidden lg:block">
      <Button
        variant="secondary"
        onClick={handleDialog}
        className="bg-white text-black px-3 py-2 rounded-md hidden lg:block whitespace-nowrap"
      >
        Subir Música
      </Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:w-[550px] w-80 bg-[#121212]">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-white dark:text-white">
              Subir Música
            </DialogTitle>
            <DialogDescription className="text-sm text-white dark:text-white">
              Seleccione el archivo de su canción y proporcione los detalles antes de subirla.
            </DialogDescription>
          </DialogHeader>

          {!fileName && (
            <FileUploadDropzone
              handleFileChange={handleFileChange}
              handleDragOver={handleDragOver}
              handleDrop={handleDrop}
            />
          )}

          {!fileName && <WelcomeMessage />}

          {fileName && (
            <div>
              <FileDisplay fileName={fileName} onClear={handleClearData} />
              <div className="my-4 border-b border-gray-500"></div>

              <div className="flex w-full py-4">
                <div
                  className="flex sm:flex-row flex-col 
                  justify-between items-start gap-4 w-full"
                >
                  <div
                    title="cover upload"
                    aria-hidden="true"
                    className="relative sm:w-60 w-full
                      flex justify-end items-center flex-col"
                    onClick={() => document.getElementById("cover-upload")?.click()}
                  >
                    <Suspense fallback={<Skeleton className="sm:w-full w-32 rounded-md mx-auto" />}>
                      <img
                        src={cover}
                        alt="cover"
                        className="sm:w-full w-32 rounded-md text-white mx-auto
                         hover:cursor-pointer"
                        aria-hidden="true"
                        role="presentation"
                      />
                      {!coverFile && (
                        <div
                          className="absolute font-medium sm:w-full w-32 bg-black 
          bg-opacity-65 text-gray-300 p-2 rounded-b-md uppercase text-[0.7rem] text-center"
                        >
                          Cover Upload
                        </div>
                      )}
                      <Input
                        id="cover-upload"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleImageChange}
                      />
                    </Suspense>
                  </div>
                  <FormComponent formData={formData} publishTheEntry={handleFormSubmit} />
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
      <Toaster />
    </div>
  );
}

export default UploadMusicModal;
