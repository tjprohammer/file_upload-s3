import React from "react";
import "./fileUpload.css";

interface Props {}

interface FileState {
  file: File | null;
  fileName: string;
  fileType?: string | null;
}

const url = "http://localhost:5005/api/upload";

const FileUpload: React.FC<Props> = () => {
  const [previewImage, setPreviewImage] = React.useState<
    string | ArrayBuffer | null
  >(null);
  const [file, setFile] = React.useState<FileState>({
    file: null,
    fileName: "",
    
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFile({
      file: event.target.files ? event.target.files[0] : null,
      fileName: event.target.files ? event.target.files[0].name : "",
      fileType: event.target.files && event.target.files[0].type,
    });

    const imgFile = event.target.files && event.target.files[0];
    if (!imgFile) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      setPreviewImage(event.target && event.target.result);
    };
    reader.readAsDataURL(imgFile);
  };

  const handleUpload = async () => {
    //function that create FormData object
    const data = new FormData();
    //object data needs to appends the file information
    //filename, file, filetype, key
    data.append("Key", file.fileName);
    if (file.fileType) data.append("fileType", file.fileType);
    data.append("file", file.file!);
    //fetch function to POST request to the URL with the data as the body
    const response = await fetch(url, {
      method: "POST",
      body: file.fileName,
    });
    //The response from the server is then processed and stored as imagedata by calling response.json()
    const imageData = await response.json();

    console.log(imageData);
  };
  return (
    <div>
      <input type="file" onChange={handleChange} />
      <button onClick={handleUpload}>Upload</button>
      {previewImage && <img className="image" src={previewImage as string} />}
    </div>
  );
};
export default FileUpload;
