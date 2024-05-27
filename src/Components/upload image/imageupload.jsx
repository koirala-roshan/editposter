

import React, { useState } from 'react';

const ImageUpload = () => {
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div style={styles.container}>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {imagePreview && (
        <div style={styles.imagePreviewContainer}>
          <img src={imagePreview} alt="Preview" style={styles.imagePreview} />
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '20px',
  },
  imagePreviewContainer: {

    width: '150px',
    height: '150px',
    borderRadius: '50%',
    overflow: 'hidden',
    marginTop: '200px',
    border: '2px solid black',
    position: 'relative',
  
  },
  imagePreview: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
};

export default ImageUpload;