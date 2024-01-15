import React from 'react'

function Loading({ isReload }) {
    return (
    <>
    <div className='h-screen w-screen fixed top-0 left-0 bg-black/50 z-50'>
        <div className='h-24 w-60 bg-white rounded-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-evenly items-center'>
        {isReload ? (
            <div className="flex flex-col">
            <p>Please Reload..!</p>
            <button
            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none mt-4"
            onClick={ () => window.location.reload()}
            >Reload</button>
            </div>
            ) : (
            <>
            <p>Loading, please wait...</p>
            <span className='loading loading-spinner text-error loading-lg'></span>
            </>
        )}
        </div>
        </div>
        </>
    )
}

export default Loading