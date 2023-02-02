import React from 'react';

interface Props {}

interface FileState {
    file: File | null;
    fileName: string;
}

const url = 'http://localhost:5005/api/upload'

const FileUpload: React.FC<Props> = () => {
  const [previewImage, setPreviewImage] = React.useState<string | ArrayBuffer | null>("");
    const [file, setFile] = React.useState<FileState>({
        file: null,
        fileName: ''
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFile({
            file: event.target.files ? event.target.files[0] : null,
            fileName: event.target.files ? event.target.files[0].name : ''
        });

        const imgFile = event.target.files && event.target.files[0];
        if (!imgFile) return;

        const reader = new FileReader();
        reader.onload = event => {
          setPreviewImage(event.target && event.target.result);
        };
        reader.readAsDataURL(imgFile);
    };

    const handleUpload = () => {
        const formData = new FormData();
        formData.append('file', file.file as Blob, file.fileName);
    formData.append('fileName', file.fileName);

    fetch(url, {
        method: 'POST',
        body: formData
      })
        .then(response => response.json())
        .then(data => {
          const presignedUrl = data.presignedUrl;
          fetch(presignedUrl, {
            method: 'PUT',
            body: file.file as Blob
          }).then(response => {
            if (response.status === 200) {
              console.log('File uploaded');
            }
          });
        });
    };

    
    return (
        <div> 
      <input type="file" onChange={handleChange} />
      <button onClick={handleUpload}>Upload</button>
      <img src={previewImage as string} />
    </div>
    )
};
export default FileUpload