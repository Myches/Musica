import React from 'react'

import { loginEndpoint } from './spotify'


function Login(){



    return(
        <div className='flex justify-center mt-[25%]'>
<a href={loginEndpoint}  className='bg-cyan-300 text-black text-4 p-2 border rounded-lg   '>Login with Spotify</a>
        </div>
    )
}



export default Login