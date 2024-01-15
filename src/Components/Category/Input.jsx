import React from 'react'

function Input({description, setDescription, uploadHandler, category, loadingEffect, setIsLoading, setPhotos}) {
    return (
    <form className='bg-white flex flex-wrap justify-center p-2'>
        <input
        type="text"
        name="description"
        onChange={(e) => setDescription(e.target.value)}
        maxLength={30}
        placeholder="Description: Type Upto 30 Characters"
        className='w-72'
        />
        <input
        accept="image/*"
        type="file"
        name="files"
        onChange={ (event) => {uploadHandler(event, category, description, loadingEffect, setIsLoading, setPhotos)}}
        multiple
        className='ml-16 my-1'
        />
        </form>
    )
}

export default Input