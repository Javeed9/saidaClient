import React from 'react';
import useAuth from '../../Shared/Hooks/Auth';

function CategoryCard({ photo, index, deleteItem }) {
    const {isAdmin} = useAuth();
    if (!photo || !photo.img) return null
    const notDelete = photo.notDelete || false
  return (
    <div className='box-border p-4 text-center bg-slate-300 transform transition duration-300 ease-in-out hover:scale-110 hover:border-2 hover:border-orange-700 '>
      <img className='h-100 w-80 object-cover' src={`data:${photo.img.contentType};base64,${photo.img.data}`} alt={`categoryImage ${index}`} />
      <p className='text-black text-xl'>{photo.description}</p>
      {
        (isAdmin && !notDelete) && (
          <button
          onClick={deleteItem}
          className="btn btn-error m-1"
          >Delete</button>
          )
      }{
        (notDelete && <button
          onClick={deleteItem}
          className="btn btn-primary m-1 cursor-not-allowed bg-gray-500"
          >Refresh to deleteItem</button>)
      }
    </div>
  );
}

export default CategoryCard;
