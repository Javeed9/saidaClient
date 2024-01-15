import axios from 'axios';

export const fetchCatalogItems = async (category, setPhotos, loadingEffect, setIsLoading ,pageNumber, incrementPageNumber, setShowMore) => {
  try {
        loadingEffect(5000);
        const response = await axios.get(import.meta.env.VITE_BACKEND_ROUTE + `catalog/${category}`,
            {  params: {
              pageNumber: pageNumber,
                        }
            });
          setPhotos( prev => {
            // const newItems = response.data.filter(newItem => !prev.some(existingItem => existingItem.id === newItem.id));
            return [...prev, ...response.data];
          })
        if (response.data[0].showMore){
          incrementPageNumber()
          console.log(pageNumber, response.data[0].showMore);
        }
        setShowMore(response.data[0].showMore)
        setIsLoading(false)
      } catch (error) {
        if (error.response && error.response.status === 404){
          setIsLoading(false);
          console.log('Catalog not found:', error);
        } else {
          console.error('Error fetching catalog items:', error);
        }
      }
    };
  