import { Skeleton } from '@mui/material'
import React from 'react'
import Wrapper from '../../css/wrapper/Shimmer'

export const PostCardShimmer = () => {
  return (
    <Wrapper>
    <div className='card'>
      <div className='card-header'>
        <Skeleton variant="circular" width={40} height={40} animation="wave" />

        <Skeleton 
      variant="text" sx={{ fontSize: '2rem', marginLeft :"1rem" }} animation="wave" width={"100%"} height={"100%"}  />
        
        
      </div>

      <Skeleton variant="rounded" width={"100%"} height={"16rem"} animation="wave" />
    </div>
    </Wrapper>
  )
}
