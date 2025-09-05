import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { assets, products } from '../assets/assets';
import { ShopContext } from '../Context/ShopContext';
import RelatedProduts from '../Components/RelatedProduts';

const Product = () => {
  const [image, setImage] = useState('');
  const { productId } = useParams();
  const { products, currency ,addToCart} = useContext(ShopContext);
  const [size, setSize] = useState('');
  const [productData, setProductData] = useState(false);
  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);

        return null;
      }
    })
  }
  useEffect(() => {
    fetchProductData();
  }, [productId, products])
  return productData ? (
    <div className='border-t-2 pt-3 transition-opacity ease-in duration-500 opacity-100 '>
      {/*------- Product Data--------- */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        {/* ------Product Img------- */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justyfy-normal sm:w-[18.7%] w-full'>
            {
              productData.image.map((item, index) => (
                <img onClick={() => setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' alt="" />
              ))
            }
          </div>
          <div className='w-full sm:w-[80%] lg:w-[70%] '>
            <img className='w-full h-auto rounded-sm' src={image} alt="" />

          </div>
        </div>
        {/* ------Product Info----- */}
        <div className='flex-1 font-medium text-2xl mt-2' >
          <h1>{productData.name}</h1>
          <div className='flex item-center gap-1 mt-2'>
            <img src={assets.star_icon} alt="" className="w-2.5 h-3" />
            <img src={assets.star_icon} alt="" className="w-2.5 h-3" />
            <img src={assets.star_icon} alt="" className="w-2.5 h-3" />
            <img src={assets.star_icon} alt="" className="w-2.5 h-3" />
            <img src={assets.star_dull_icon} alt="" className="w-2.5 h-3" />
            <p className='pl-2 h-3 mt-0'>(122)</p>
          </div>
          <p className='mt-1 text-2xl font-medium '>{currency}{productData.price}</p>
          <p className='mt-1 text-gray-500 md:w-4/5 text-base '>{productData.description}</p>
          {/* Sizing */}
          <div className='flex flex-col gap-4 my-2'>
            <p className='font-medium'>Select Size</p>
            <div className='flex gap-2'>
              {productData.sizes.map((item, index) => (
                <button onClick={() => setSize(item)} className={` text-sm cursor-pointer rounded-full border p-2 bg-gray-100 ${item === size ? ' border-2 border-orange-500' : ''} `} key={index}>{item}</button>
              ))}

            </div>
          </div>
          <button onClick={()=>addToCart(productData._id,size)} className='cursor-pointer rounded-sm bg-black text-white px-6 py-3 text-sm active:bg-gray-700' >ADD TO CART</button>
          <hr className='mt-3 sm:w-4/5' />
          <div className='text-sm text-gray-500 mt-1 flex flex-col gap-1'>

            <p>*100% Orignal Product.</p>
            <p>*Cash On Delivery Available On This Product.</p>
            <p>*Easy Return And Exchange Policy Within 7 Days.</p>
          </div>
        </div>

      </div>
      {/* Description And Review Section */}
      <div className='mt-20'>
        <div className='flex'>
          <b className='cursor-pointer border px-5 py-3 text-sm'>Description</b>
          <p className='cursor-pointer border px-5 py-3 text-sm'>Reviews(123)</p>
        </div>
        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, temporibus!Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, alias!orem ipsum dolor sit amet consectetur adipisicing elit. Placeat, alias!Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, alias!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, alias!Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, alias!</p>
        </div>
      </div>
      {/* -----Display related Products */}
      <RelatedProduts category={productData.category} subCategory={productData.subCategory}/>

    </div>
  ) : <div className='opacity-0'> Loading...</div>
}

export default Product
