import axios from 'axios';

export const deleteItem = async (id, loadingEffect, setIsLoading, setPhotos) => {
    if (!id) return
    try {
      loadingEffect(5000);
      await axios.delete(import.meta.env.VITE_BACKEND_ROUTE + `catalog/${id}`)
      setIsLoading(false)
      setPhotos( prev => prev.filter( item => item.id!=id ))
    } catch (error) {
      console.error('Error fetching catalog items:', error);
    }
  }