import { Box, Button, Divider } from '@mui/material'
import React, { useEffect, useState } from 'react'
import './dashboard.scss'
import Card from '../../components/card'
import { H2, P } from '../../components/Typography'


const Dashboard = () => {


  return (
    <div className='dashboard bg-'>
    
      <Box className='w-[100%] flex flex-col items-start gap-3 mt-5'>
      <H2>Your Workspace</H2>
    <P>Welcome, XXX</P>
    </Box>

    <Box mt={5}>
      
      <h3 className='text-lg font-[600] my-4'>overview</h3>
    </Box>

    <div className='flex flex-row flex-wrap gap-10'>

 

    <Card title={"Today's Agenda"}>
      <div className='min-h-[150px] flex justify-center items-center text-center'>
      <p>You dont have any event schedule for today. <button className='font-[600] text-[#ddaa33]'>Add</button></p>

      </div>

    </Card>

    <Card title={'Activity Report'} linkText={'View full activity report'}>
      <div>
        <div className='flex flex-row text-[#b8bcbf]'>
        <div className='border-b border-b-[3px] w-[200px] h-[20px] mt-[-7px]'></div> <p>Tuesday(18th sept, 2019)</p>

        </div>
          <p className='text-[#817777]'>You added a new client</p>

          <div className='ml-8 w-[max-content] text-end'>
            <p className='text-[#ddaa33]'>Odusote Mayokun</p>
            <span className='border-l border-l-[2px] border-[#ddaa33] text-sm bg-[#ddaa3340] p-2 text-[#817777]'>Status: pending</span>
          </div>
      </div>

    </Card>

    <Card title={'Tasks that are due'} linkText={'Create task'}>
        <div className='bg-[#ddaa3340] p-3 rounded-lg'>
          <div className='font-[600]'>Follow up on <span className='text-[#ddaa33] text-sm'>Odusote</span></div>
          <div className='flex flex-row'>
            <p>Due on: 1/21/2021</p>
            <p>Created on: 1/15/2021</p>

          </div>
        </div>
    </Card>

    </div>
    </div >
  )
}

export default Dashboard