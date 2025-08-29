import React from 'react'
import { ListTable } from "../components/listTable";
import { TABLEhEADER } from './TABLEhEADER.JSX';


export const ListComp = ({ myuser, setuser }) => {
  return (
    <>
      < div className="card-body panel-body table-responsive" >
        <table className="table">
          <TABLEhEADER />
          <tbody>
            {
              myuser.map((u) => (
                <ListTable u={u} setuser={setuser} myuser={myuser} />
              ))
            }
          </tbody>
        </table>
      </div >
    </>
  )
}
