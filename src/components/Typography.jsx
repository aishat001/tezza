
import React from 'react'

export const H2 = ({children}) => {
  return (
    <h2 className='text-black overview text-lg md:text-xl font-[600]'>
        {children}
    </h2>
  )
}

export const P = ({children, style}) => {
    return (
        <p className={`text-sm sm:text-md text-[#b8bcbf] ${style}`}>
            {children}
        </p>
    )
}

