import React, { useState, useEffect } from 'react'
import { GloablHook } from '../store/context'

export const SearchUser = () => {
  const { searchUser, setserch } = GloablHook()
  const [id, setId] = useState(searchUser.id || '')
  const [name, setName] = useState(searchUser.name || '')

  useEffect(() => {
    console.log(id , name);
    setserch({ id, name })

  }, [id, name])

  return (
    <div className="col-md-8 p-2 rounded-3" style={{ background: '8a828247' }}>
      <form className="row g-2" role="search">
        <div className="col-md-5">
          <input
            className="form-control"
            type="search"
            placeholder="Search by name"
            aria-label="Search by name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="col-md-2">
          <input
            className="form-control"
            type="search"
            placeholder="ID"
            aria-label="Search by ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>
      </form>
    </div>
  )
}
