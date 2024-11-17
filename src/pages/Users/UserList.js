import React from 'react';
import { useState } from 'react';
import { userRows } from '../../datas';
import './UserList.css'
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
export default function UserLIst() {
  const [userDatas , setUserDatas] = useState(userRows)


  const userDelete = userID =>{
    setUserDatas(userDatas.filter(user => user.id != userID))
  }
      const colums = [
        { 
          field : 'id' ,
          headerName : 'ID',
          width:90
        },
        {
          field : 'user' ,
          headerName : 'User' ,
           width:200 ,
           renderCell:(params)=>{
            return(
              <Link to='/' className='link'>
              <div className='userListUser'>
                <img src={params.row.avatar} alt='' className='userListImg'/>
                {params.row.username}
              </div>
            </Link>
            )
           }  
        },
        {
        field : 'email',
        headerName : 'Email',
        width : 200
        },
        {
          field : 'status',
          headerName : "Status",
          width : 120
        },
        {
          field : 'transaction',
          headerName : 'Transaction',
          width : 160
        },
        {
          field : 'action',
          headerName : 'Action',
          width : 150,
          renderCell : (params)=>{
              return (
              <>
                <Link to={`user/${params.row.id}`} className='Link'>
                  <button className='userListEdit'>Edit</button>
                </Link>
                <DeleteOutlinedIcon 
                className='userListDelete'
                onClick ={()=> userDelete(params.row.id) }
                />
              </>
              )
          }
        }
      ]
  return (
    <div className='userList'>
        <DataGrid 
        rows={userDatas}
        columns={colums}
        pageSize={6}
        disableSelectionOnClick
        />
    </div>
  )
}
