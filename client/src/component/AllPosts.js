import React from 'react'
import Wrapper from '../css/wrapper/Allposts'
import PostCard from './PostCard'

export const AllPosts = () => {
  return (
    <Wrapper>
    {/* <div>AllPosts</div> */}
    <PostCard/>
    <PostCard/>
    <PostCard/>
    <PostCard/>
    <PostCard/>
    <PostCard/>
    </Wrapper>
  )
}
