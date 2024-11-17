import React from 'react';
import { Link } from 'react-router-dom';
import Chart from '../../components/chart/Chart';
import { ProductsData } from '../../datas';
import PublishIcon from '@mui/icons-material/Publish';
import './Product.css'
const Product = () => {
    return (
        <div className='product'>
         <div className='productTitleContainer'>
            <h1>Product</h1>
            <Link to='newProduct'>
            <button className='productAddButton'>Create</button>
            </Link>
         </div>


        <div className="productTop">

            
            <div className="productTopLeft">
                <Chart title='Sale in Month' data={ProductsData} dataKey="sales"/>
            </div>

            <div className="productTopRight">
                <div className='productInfoTop'>
                    <img src="/images/delll.jpg" alt="product"className='productInfoImg' />
                    <span className='productName'>Dell Laptop</span>
                </div>

                <div className="productInfoButtom">
                    <div className='productInfoItem'>
                        <div className="productInfoKey">ID: </div>
                        <div className='productInfoValue'>132</div>
                    </div>
                    <div className='productInfoItem'>
                        <div className="productInfoKey">Name: </div>
                        <div className='productInfoValue'>Dell Laptop</div>
                    </div>
                    <div className='productInfoItem'>
                        <div className="productInfoKey">Sales: </div>
                        <div className='productInfoValue'>$88540</div>
                    </div>
                    <div className='productInfoItem'>
                        <div className="productInfoKey">Active: </div>
                        <div className='productInfoValue'>Yes</div>
                    </div>
                    <div className='productInfoItem'>
                        <div className="productInfoKey">In stock: </div>
                        <div className='productInfoValue'>No</div>
                    </div>
                </div>

            </div>
        </div>
        <div className="productBottom">
            <form  className='productForm'>
                <div className='productFormLeft'>
                    <label>Product Name</label>
                    <input type="text" placeholder='Dell Laptop' />

                <label >in Stock</label>
                <select id="inStock">
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>

                <label>Active</label>
                <select id="inStock">
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
                
                </div>
                <div className='productFormRight'>
                    <div className="productUploader">
                        <img src="/images/delll.jpg" alt="profile photo" className='productUploaderImg' />
                        <label>
                            <PublishIcon/>
                        </label> 
                        <input type="file" style={{display:'none'}} />   
                    </div>
                    <button className='productButton'>Upload</button>
                </div>

            </form>
        </div>
        </div>
    );
}

export default Product;
