import React from 'react';



function AlbumImage({url}) {
    console.log(url)
    return(
        <div className='flex justify-center items-center  '>
<img src={url} alt="album" className='m-8 lg:w-[50%] lg:h-50  border rounded-sm border-8 border-cyan-300  p-4 ' />

        </div>
    )
}

export default AlbumImage;