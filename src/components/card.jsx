import { ArrowCircleRightOutlined, ArrowRight, ArrowRightAltOutlined, ChevronRight } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({title, children, path, linkText}) => {
  return (
    <div className='border-top-[8px] shadow-lg bg-white   w-[100%] md:max-w-[450px]' style={{borderTop: '10px solid #ddaa33'}}>
        <div className='flex justify-between bg-[#ddaa3340] px-3 py-3 text-[15px] sm:text-[16px]'>
        <h4 className=' text-start font-[600]'>{title}</h4>

        {
            linkText && (
                <Link to={`/${path}`} className='text-[#ddaa33]'>{linkText} <span><ArrowRightAltOutlined/></span></Link>
            )
        }

        </div>
    <div className='min-h-[150px]  p-5 '>
    {children}

    </div>
    </div>
  )
}

export default Card