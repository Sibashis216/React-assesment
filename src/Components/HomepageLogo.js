import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function HomepageLogo() {
  return (
    <div style={{position: "absolute",left: "20px",top: "20px"}}>
        <Link to="/">
            <Button variant="contained" color="success">
        Homepage
      </Button>
      </Link>
    </div>
  )
}

export default HomepageLogo