import React from "react";
import { CirclePlay, CircleX } from "lucide-react";

interface FileDisplayProps {
  fileName: string;
  onClear: () => void;
}

const FileDisplay: React.FC<FileDisplayProps> = ({ fileName, onClear }) => {
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center justify-center">
        <CirclePlay className="text-white mr-2" size={24} />
        <p className="text-white text-sm font-normal">{fileName}</p>
      </div>
      <div className="flex justify-center items-center gap-2">
        <p className="text-gray-300 text-sm font-medium">DRAFT</p>
        <CircleX className="text-white" size={24} onClick={onClear} />
      </div>
    </div>
  );
};

export default FileDisplay;
