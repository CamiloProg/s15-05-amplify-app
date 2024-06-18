import React from "react";
import { Label } from "components/common/shadcn/label";
import { Input } from "components/common/shadcn/input";
import { Button } from "components/common/shadcn/button";
interface FileUploadDropzoneProps {
  handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleDragOver: (event: DragEvent<HTMLDivElement>) => void;
  handleDrop: (event: DragEvent<HTMLDivElement>) => void;
}

const FileUploadDropzone: React.FC<FileUploadDropzoneProps> = ({
  handleFileChange,
  handleDragOver,
  handleDrop,
}) => {
  return (
    <div
      className="flex sm:flex-row flex-col items-center justify-between 
    w-full p-4 rounded-md border-2 border-dashed border-gray-500 h-32
     hover:border-white hover:transition-all hover:duration-300"
    >
      <div
        className="flex items-center justify-center flex-col w-full h-full"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <Label className="text-white font-bold text-base">Arrastra tu canción aquí</Label>
        <p className="text-gray-500 text-sm">.mp3 y max 100MB</p>
      </div>
      <Input
        id="file-upload"
        type="file"
        name="file"
        accept=".mp3"
        className="hidden"
        required
        onChange={handleFileChange}
      />
      <Button variant="secondary">
        <Label htmlFor="file-upload" className="font-semibold cursor-pointer text-[0.8rem]">
          SELECCIONE ARCHIVO
        </Label>
      </Button>
    </div>
  );
};

export default FileUploadDropzone;
