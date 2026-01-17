"use client";
import { useRef, useState } from "react";
import { FiImage, FiTrash2, FiUploadCloud } from "react-icons/fi";

type TFileUploadProps = {
  onFileSelect?: (file: File | null) => void;
};

const FileUpload = ({ onFileSelect }: TFileUploadProps) => {
  const [file, setFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (selectedFile?: File) => {
    if (!selectedFile) return;
    setFile(selectedFile);
    onFileSelect?.(selectedFile);
  };

  const removeFile = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setFile(null);
    onFileSelect?.(null);
  };
  return (
    <div
      onClick={() => fileInputRef.current?.click()}
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => {
        e.preventDefault();
        handleFileChange(e.dataTransfer.files?.[0]);
      }}
      className="flex flex-col justify-center items-center w-full mt-2 py-8 border border-dashed border-primary cursor-pointer"
    >
      <input
        type="file"
        className="hidden"
        ref={fileInputRef}
        accept="image/*"
        onChange={(e) => handleFileChange(e.target.files?.[0])}
      ></input>
      {!file ? (
        <div className="text-center">
          <FiUploadCloud className="text-primary mx-auto"></FiUploadCloud>
          <p className="text-xs">Upload Your Payment Receipt here</p>
        </div>
      ) : (
        <div className="text-center">
          <FiImage className="text-primary mx-auto"></FiImage>
          <p className="text-sm text-primary">{file.name}</p>
          <p className="text-sm text-gray-400">
            {(file.size / 1024).toFixed(1)} KB
          </p>
          <button
            onClick={removeFile}
            className="flex gap-2 bg-primary/50 mt-4 mx-auto rounded "
          >
            <FiTrash2 size={14} className="text-primary "></FiTrash2>
            <span className="text-xs">Remove File</span>
          </button>
        </div>
      )}
    </div>
  );
};
export default FileUpload;
