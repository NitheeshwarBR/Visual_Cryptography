import styles from "./UploadImage.module.css"

import React, { useRef, useState } from 'react';
import { Typography } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';

function UploadImage({ onUploadSuccess }) {
  const fileInputRef = useRef(null);
  const [imageSrc, setImageSrc] = useState(null);
  const [isUploaded, setIsUploaded] = useState(false);

  const handleUpload = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      setImageSrc(e.target.result);
      setIsUploaded(true);
      onUploadSuccess();
    };

    reader.readAsDataURL(file);
  };

  return (
    <div>

      <div className={styles.container}>
        <label htmlFor="file-upload">
          <div>
            <AddIcon style={{ cursor: 'pointer' }} onClick={handleUpload} disabled={isUploaded} />
            <Typography>Upload Image</Typography>
          </div>
          <input
            type="file"
            accept=".png, .jpg, .jpeg"
            ref={fileInputRef}
            onChange={handleFileChange}
            id="file-upload"
            hidden
          />
        </label>
      </div>

    </div>
  );
}

export default UploadImage;
