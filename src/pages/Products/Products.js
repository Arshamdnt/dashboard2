import React from 'react';
import { useState } from 'react';
import { Products } from '../../datas';
import './Products.css'
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
export default function UserLIst() {
  const [ProductsDatas , setProductsDatas] = useState(Products)


  const ProductsDelete = ProductID =>{
    setProductsDatas(ProductsDatas.filter(Product => Product.id != ProductID))
  }
      const colums = [
        { 
          field : 'id' ,
          headerName : 'ID',
          width:90
        },
        {
          field : 'title' ,
          headerName : 'name' ,
           width:200 ,
           renderCell:(params)=>{
            return(
              <Link to='/' className='link'>
              <div className='userListUser'>
                <img src={params.row.avatar} alt='' className='userListImg'/>
                {params.row.title}
              </div>
            </Link>
            )
           }  
        },
        {
          field : 'price',
          headerName : "price",
          width : 120
        },
        {
          field : 'action',
          headerName : 'Action',
          width : 150,
          renderCell : (params)=>{
              return (
              <>
                <Link to={`product/${params.row.id}`} className='Link'>
                  <button className='userListEdit'>Edit</button>
                </Link>
                <DeleteOutlinedIcon 
                className='userListDelete'
                onClick ={()=> ProductsDelete(params.row.id) }
                />
              </>
              )
          }
        }
      ]
  return (
    <div className='userList'>
        <DataGrid 
        rows={ProductsDatas}
        columns={colums}
        pageSize={3}
        disableSelectionOnClick
        checkboxSelection
        />
    </div>
  )
}
