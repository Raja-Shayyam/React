import React, { useEffect, useRef, useState } from 'react'
import { PostingData } from './ApiProvider'

export const Inputs = ({ setPost, post }) => {
  // console.log(nid);

  const mytitle = useRef(null)
  const mybody = useRef(null)
  const myid = useRef(null)
  // const [postingdata, setPostingdata] = useState({

  //   title: '',
  //   body: '',
  // })

  const addData = async (postingdata) => {
    try {
      const res = await PostingData(postingdata)
      if (res.status === 201)
        setPost([...post, res.data])
      // setPost((pre)=>[...pre,res.data])
      else
        console.error('not 201');

    } catch (error) {
      console.log(error);
    }
  }

  const handleInputs = (e) => {
    e.preventDefault()

    console.log('çlicked', mytitle.current.value, e);

    const postingdata = {
      id: myid.current.value,
      title: mytitle.current.value,
      body: mybody.current.value,

    }
    console.log(postingdata.id);

    addData(postingdata);
  }

  // useEffect(() => {
  //   console.log(postingdata);
  //   addData();
  // }, [postingdata])

  return (
    <div className='container'>
      <form class="card p-3" onSubmit={handleInputs}>
        <div class="input-group row g-3">
          <div class="">
            <label for="firstName" class="form-label"><strong>Title</strong></label>
            <input type="text" class="form-control" id="firstName"
              // value={postingdata.title}
              ref={mytitle}
            />

            <div class="">
              <label for="lastName" class="form-label"><strong>Body</strong></label>
              <input type="text" class="form-control" id="lastName"
                ref={mybody}
              />
              id:
              <input type="text" class="form-control m-2" id="lastName"
                ref={myid}
              />
            </div>
          </div>
          <button type="submit" class="btn btn-secondary">Redeem</button>
        </div>
      </form>
    </div>
  )
}
