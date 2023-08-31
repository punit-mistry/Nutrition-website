import React from 'react'
import Img from '../../assets/img4.png'
import Img1 from '../../assets/img5.png'
import { Button, TextField } from '@mui/material'
const Contact = () => {
  const button = {
    color:"black",
    width:"250px",
    backgroundColor: "#F28C28",
    "&:hover": {
      backgroundColor: "#FF5F1F",
    },
  };
  return (
    <div className='w-full h-full flex p-20 ' style={{backgroundImage:`url(${Img1})`}}>
      <div className='w-1/2  '>
          <img src={Img} width={1000}/>
      </div>
      <div className='flex w-1/2 text-center flex-col border-black border-4 backdrop-blur-md p-20 shadow hover:shadow-2xl' >
          <div>
            <span className='text-7xl font-serif'> Get in Touch ✨ </span>
          </div>
          <br />
          <div >
            <form className='flex flex-col p-20 gap-10 '>
              <div>
                <TextField id="standard-basic" label="Name" variant="standard" sx={{width:'90%'}}/>
              </div>
   
              <div>
                <TextField id="standard-basic" label="Email Id" variant="standard" sx={{width:'90%'}}/>
              </div>
              <div>
                <TextField id="standard-basic" label="Phone Number" variant="standard" sx={{width:'90%'}}/>
              </div>
              <div>
                <Button variant="contained" sx={button}>
                  Submit 
                </Button>
              </div>
              {/* <label>
                Name:
                <TextField id="standard-basic" label="Standard" variant="standard" />
              </label>
              <label>
                Name:
                <TextField id="standard-basic" label="Standard" variant="standard" />
              </label> */}
            </form>
          </div>
      </div>
    </div>
  )
}

export default Contact