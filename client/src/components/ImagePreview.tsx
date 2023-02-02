import React, { useState } from "react";

const ImagePreview: React.FC = () => {
  const [previewImage, setPreviewImage] = useState<string | ArrayBuffer | null>("");

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      setPreviewImage(e.target && e.target.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div>
      <input type="file" onChange={handleImageChange} />
      {previewImage && <img src={previewImage as string} alt="Preview" />}
    </div>
  );
};

export default ImagePreview;
