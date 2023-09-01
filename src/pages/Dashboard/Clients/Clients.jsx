import { Search, SearchOffOutlined, SearchOutlined } from '@mui/icons-material'
import { Button, Input } from '@mui/material'
import React, { useState } from 'react'
import ClientListTable from '../../../components/Dashboard/ClientListTable'
import { H2, P } from '../../../components/Typography'

const Clients = () => {
      // Column definitions
  const columns = [
    {
      id: 'name', label: 'Name',
      //  minWidth: 150, 
      className: 'name'
    },
    {
      id: 'email', label: 'Email',
      //  minWidth: 150,
      className: 'loanAmount'
    },
    {
      id: 'phone',
      label: 'Phone',
      // minWidth: 150,
      className: 'phone',
    },
    {
      id: 'Resident',
      label: 'Residential Address',
      // minWidth: 150,
      className: 'amountToPay',
    }
  ];


  const [rows, setRows] = useState([
    {
      name: 'Adegoke Oluwadailare',
      email: 'adegokeoluwadailare@gmail.com',
      phone: '08160730668',
      Resident: 'No 2, olonode close, Monatan, Ibadan, Oyo state, Nigeria',
    },
    {
        name: 'Adegoke Oluwadailare',
        email: 'adegokeoluwadailare@gmail.com',
        phone: '08160730668',
        Resident: 'No 2, olonode close, Monatan, Ibadan, Oyo state, Nigeria',
      },
      {
        name: 'Adegoke Oluwadailare',
        email: 'adegokeoluwadailare@gmail.com',
        phone: '08160730668',
        Resident: 'No 2, olonode close, Monatan, Ibadan, Oyo state, Nigeria',
      },
      {
        name: 'Adegoke Oluwadailare',
        email: 'adegokeoluwadailare@gmail.com',
        phone: '08160730668',
        Resident: 'No 2, olonode close, Monatan, Ibadan, Oyo state, Nigeria',
      },
      {
        name: 'Adegoke Oluwadailare',
        email: 'adegokeoluwadailare@gmail.com',
        phone: '08160730668',
        Resident: 'No 2, olonode close, Monatan, Ibadan, Oyo state, Nigeria',
      },
      {
        name: 'Adegoke Oluwadailare',
        email: 'adegokeoluwadailare@gmail.com',
        phone: '08160730668',
        Resident: 'No 2, olonode close, Monatan, Ibadan, Oyo state, Nigeria',
      },
      {
        name: 'Adegoke Oluwadailare',
        email: 'adegokeoluwadailare@gmail.com',
        phone: '08160730668',
        Resident: 'No 2, olonode close, Monatan, Ibadan, Oyo state, Nigeria',
      }
  ]);
  return (
    <div className='w-[100%]'>
        <div>
            <H2>Clients</H2>
            <P>Here's the clients list</P>
        </div>

        <div className='w-[100%] flex flex-row gap-5 mt-8'>
            <div className='border border-1 p-2 items-center flex flex-row rounded-xl flex-1 gap-2'>
                <SearchOutlined className='fill-grey'/>
                <Input type='search' disableUnderline  placeholder='Search by name, email...' className='flex-1'/>

            </div>
            <Button className='!bg-[#ddaa33] !text-white !rounded-xl' >Add new clients</Button>
        </div>

        <div className='mt-16'>
        <ClientListTable columns={columns} rows={rows} />

        </div>
    </div>
  )
}

export default Clients