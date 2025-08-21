import React, { useEffect, useState } from 'react'
import { Getpost } from '../app3Thapa/ApiProvider';
import { Card } from '../app3Thapa/card';
import { Inputs } from '../app3Thapa/inputs';

export const AppThapa = () => {
  const [post, setPost] = useState([])

  const createFun = async () => {
    try {
      const res = await Getpost()
      setPost(res.data || [])

    } catch (error) {
      console.log(error);
    }

  }

  useEffect(() => {
    createFun()
  }, [])
// console.log(post);

  return (
    <>
      <Inputs setPost={setPost} post={post} nid={post.length}/>
      <Card post={post} setPost={setPost} />
    </>
  )
}
