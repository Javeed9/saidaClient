import React, { useState, useEffect } from 'react';
import CategoryCard from './CategoryCard';
import Loading from './Loading';
import Input from './Input';
import useAuth from '../../Shared/Hooks/Auth'
import { useParams } from 'react-router-dom';
import { uploadHandler, fetchCatalogItems, deleteItem } from './actions';

const Category = () => {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isReload, setIsReload] = useState(false);
  const [description, setDescription] = useState("");
  const [showMore, setShowMore] = useState(false)
  const [pageNumber, setPageNumber] = useState(1);
  const incrementPageNumber = () => {
    setPageNumber(prev => prev + 1);
  }

  const { isAdmin } = useAuth();
  const { category } = useParams();

  const loadingEffect = (time) => {
    setIsLoading(true)
    setTimeout(
      () => {
        setIsReload(true)
      } , time
    )
  }

  useEffect(() => {
    fetchCatalogItems(category, setPhotos, loadingEffect, setIsLoading, pageNumber, incrementPageNumber, setShowMore);
  }, []);

  return (
    <>
    <div className='flex flex-wrap justify-around'>
      {photos.map((photo, index) => (
        <div className='inline-flex items-center my-8 md:m-8 md:w-auto'
          key = {photo.id}>
          <CategoryCard
          index = {index}
          photo = {photo}
          deleteItem={ () => {deleteItem(photo.id, loadingEffect, setIsLoading, setPhotos)} }
          />
        </div>
        ))}
        </div>
    { isLoading && <Loading isReload={isReload}/> }
    { showMore && <div className='w-full'>
      <button
      className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 focus:outline-none -translate-x-1/2 mb-4"
      style={{marginLeft:"50%"}}
      onClick={ () => {
        fetchCatalogItems(category, setPhotos, loadingEffect, setIsLoading, pageNumber, incrementPageNumber, setShowMore);
      }}
      >Show more...</button>
    </div>}
    { isAdmin && (
      <Input
      description = {description}
      setDescription = {setDescription}
      uploadHandler = {uploadHandler}
      category = {category}
      loadingEffect = {loadingEffect}
      setIsLoading = {setIsLoading}
      setPhotos = {setPhotos}
      />
    )}
  </>
  );
};

export default Category;