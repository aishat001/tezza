import { Person, Person2, Person2Rounded, Person3, Person4, Person4Rounded, PersonAdd, PersonPin, PersonPinCircle, PersonRounded, PictureAsPdfOutlined } from '@mui/icons-material'
import React from 'react'
import { H2, P } from '../../../components/Typography'
import { height } from '@mui/system'
import { useNavigate } from 'react-router'
import { Button } from '@mui/material'

const ClientDetails = () => {
    const navigate = useNavigate()
    return (
        <div>
            <div>
                <H2>Clients</H2>
                <P>View Client profile here</P>
            </div>

            <div className='bg-white py-10 px-5  mt-5'>
                <div className='bg-[#fafafa] p-4 rounded-lg w-[max-content'>
                    <h4 className='font-[600]'>Client's picture</h4>
                    <div className='flex flex-col sm:flex-row mt-3 items-center gap-3'>
                        <div className='bg-[#efece8] rounded-[100%] mr-auto sm:m-0'>
                            <Person
                            sx={{
                                width: {xs: 50, sm: 100, lg: 100},
                                height: {xs: 50, sm: 100, lg: 100},
                                fill: '#c6c3bd'
                            }}
                            />

                        </div>

                        <div className='flex flex-col gap-2 mr-auto'>
                            <h4 className='font-[600] sm:text-base'>Odusote Mayokun</h4>
                            <P style='!text-sm !text-[#898989]'>adegoketemitope1909@gmail.com</P>
                            <P style='!text-sm !text-[#898989]'>Female  54years old     Nigerian</P>
                        </div>
                    </div>
                </div>


                <div className='mt-10 flex flex-col gap-7'>
                    <div className='flex flex flex-col sm:flex-row gap-5'>
                        <div className='text-start flex-1'>
                            <p className='text-sm text-[#898989] mb-2'>Full Name</p>
                            <h4 className='font-[600] text-sm sm:text-base'>Odusote Mayokun</h4>
                        </div>

                        <div className='text-start flex-1'>
                            <p className='text-sm text-[#898989] mb-2'>Email</p>
                            <h4 className='font-[600] text-sm sm:text-base'>adegoketemitope1909@gmail.com</h4>
                        </div>
                    </div>

                    <div className='flex flex flex-col sm:flex-row gap-5'>
                        <div className='text-start flex-1'>
                        <p className='text-sm text-[#898989] mb-2'>Applicant Fullname <span className='text-[red]'>(as shown in passport)</span></p>
                            <h4 className='font-[600] text-sm sm:text-base'>Odusote Mayokun Kemi</h4>
                        </div>

                        <div className='text-start flex-1'>
                            <p className='text-sm text-[#898989] mb-2'>Gender</p>
                            <h4 className='font-[600] text-sm sm:text-base'>Female</h4>
                        </div>
                    </div>

                    <div className='flex flex flex-col sm:flex-row gap-5'>
                        <div className='text-start flex-1'>
                            <p className='text-sm text-[#898989] mb-2'>Place of Birth</p>
                            <h4 className='font-[600] text-sm sm:text-base'>Nigeria</h4>
                        </div>

                        <div className='text-start flex-1'>
                            <p className='text-sm text-[#898989] mb-2'>Country of Citizenship</p>
                            <h4 className='font-[600] text-sm sm:text-base'>Nigeria, Ungada</h4>
                        </div>
                    </div>

                    <div className='flex flex flex-col sm:flex-row gap-5'>
                        <div className='text-start flex-1'>
                            <p className='text-sm text-[#898989] mb-2'>Marital Status</p>
                            <h4 className='font-[600] text-sm sm:text-base'>Married</h4>
                        </div>

                        <div className='text-start flex-1'>
                            <p className='text-sm text-[#898989] mb-2'>Education <span className='text-[red]'>(Client's highest level of education)</span></p>
                            <h4 className='font-[600] text-sm sm:text-base'>Bachelor's Degree</h4>
                        </div>
                    </div>

                    <div className='flex flex flex-col sm:flex-row gap-5'>
                        <div className='text-start flex-1'>
                            <p className='text-sm text-[#898989] mb-2'>Current Occupation</p>
                            <h4 className='font-[600] text-sm sm:text-base'>Engineer</h4>
                        </div>

                        <div className='text-start flex-1'>
                            <p className='text-sm text-[#898989] mb-2'>Phone Number</p>
                            <h4 className='font-[600] text-sm sm:text-base'>+234(0)8160730668</h4>
                        </div>
                    </div>

                    <div className='flex flex flex-col sm:flex-row gap-5'>
                        <div className='text-start flex-1'>
                        <p className='text-sm text-[#898989] mb-2'>Residential Address Name</p>
                            <h4 className='font-[600] text-sm sm:text-base'>No 2 Oloro Street Bank Olodo, Ibadan, Oyo State</h4>
                        </div>

                        <div className='text-start flex-1'>
                            <p className='text-sm text-[#898989] mb-2'>Mailing Address Name</p>
                            <h4 className='font-[600] text-sm sm:text-base'>No 2 Oloro Street Bank Olodo, Ibadan, Oyo State</h4>
                        </div>
                    </div>

                    <div className='flex flex flex-col sm:flex-row gap-5'>
                        <div className='text-start flex-1'>
                            <p className='text-sm text-[#898989] mb-2'>Country of Interest</p>
                            <h4 className='font-[600] text-sm sm:text-base'>Iceland</h4>
                        </div>

                        <div className='text-start flex-1'>
                            <p className='text-sm text-[#898989] mb-2'>Purpose of Traveling</p>
                            <h4 className='font-[600] text-sm sm:text-base'>Trading</h4>
                        </div>
                    </div>

                </div>

                <div>
                <Button className='!bg-[#ddaa33] !text-white !rounded-lg font-[500] flex w-[150px] !mt-8 sm:!ml-auto' onClick={() => navigate(-1)}>Back</Button>

                </div>
            </div>


        </div>
    )
}

export default ClientDetails