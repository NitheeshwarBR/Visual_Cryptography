import React, { useRef, useState } from 'react';
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
      <div className='upload' style={{ border: '1px dotted #000', padding: '10px', display: 'inline-block' }}>
        {imageSrc && <img src={imageSrc} alt="Uploaded" style={{ maxWidth: '200px', maxHeight: '200px' }} />}
        <input
          type="file"
          accept=".png, .jpg, .jpeg"
          style={{ display: 'none' }}
          ref={fileInputRef}
          onChange={handleFileChange}
        />
        <AddIcon style={{ cursor: 'pointer' }} onClick={handleUpload} disabled={isUploaded} />
        <h3>Upload Image</h3>
      </div>
    </div>
  );
}

export default UploadImage;
