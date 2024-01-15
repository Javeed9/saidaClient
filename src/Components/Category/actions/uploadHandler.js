import axios from 'axios';

export const uploadHandler = (event, category, description, loadingEffect, setIsLoading, setPhotos) => {
    const files = Array.from(event.target.files);
    if (files) {
      const formData = new FormData();
      const jwtToken = localStorage.getItem('jwt');
      const base64Images = []
      files.map( file => {
        const reader = new FileReader();
        reader.onloadend = function () {
          const base64String = reader.result.split(',')[1];
          base64Images.push({ 
            img: {
              data: base64String,
              contentType: "image/jpeg"
            },
            notDelete: true
          });
        };
        reader.readAsDataURL(file);
        return formData.append('file', file) 
      })
      formData.append('category',category)
      formData.append('description',description)
      loadingEffect(10000);
      axios.post(import.meta.env.VITE_BACKEND_ROUTE + 'catalog', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `jwt ${jwtToken}`,
        },
      })
        .then((res) => {
          setPhotos( prev => {
            console.log("res.data.items",res.data.items);
            console.log("base64Images",base64Images);
            return [...base64Images,...prev];
          })
          setIsLoading(false)
          // window.location.reload()
        })
        .catch((error) => {
          console.error('Error uploading photo:', error);
        });
    }
  };