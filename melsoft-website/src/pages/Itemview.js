import React, { useState } from 'react';
import '../pages/Itemview.css'
import IconOnly from "../assets/Type=Icon Only.png"
import ProductImage from "../assets/Product-Image.png"
import { Rate } from "antd"



const ProductPage = () => {
  const [ setSelectedSize] = useState('S');
  const [ setSelectedPrice] = useState(10);

  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value);
    if (e.target.value === 'S') {
      setSelectedPrice(10);
    } else if (e.target.value === 'M') {
      setSelectedPrice(15);
    } else if (e.target.value === 'L') {
      setSelectedPrice(20);
    }
  }

  return (
        <div className="about">
          <div
            className="aboutTop">
           <div className="product-page">
      <div className="product-image-container">
        <img src={IconOnly} alt="Product Image" />
        <img src={IconOnly} alt="Product Image" />
        <img src={IconOnly} alt="Product Image" />
        <img src={ProductImage} alt="Product Image" />
      </div>
      <div className='flex flex-col gap-4 lg:w-2/4'>
                <div>
                    <h1 className='text-3xl font-bold'>Apple Watch</h1>
                    <span className=' text-grey-700 font-semibold'>Series 5 SE</span>
                    <div><Rate defaultValue={4} allowHalf  style={{color: "green"}}/></div>
                </div> 
                <h6 className='text-4xl font-semibold'>$ 529.99</h6>
                <p className='text-gray-700'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br /> enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br />Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br />Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                </p>
               
                <div className='flex flex-row items-center gap-12'>
                    <button>Add to Bag</button>
                </div>
            
            </div>
        </div>
            
          </div>
          <div className="aboutBottom">
            <hr></hr>
            <h1 className='text-3xl font-bold'> Description</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
              accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut
              molestias architecto voluptate aliquam nihil, eveniet aliquid culpa
              officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum
              nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque
              error repudiandae fuga? Ipsa laudantium molestias eos sapiente
              officiis modi at sunt excepturi expedita sint? Sed quibusdam
              recusandae alias error harum maxime adipisci amet laborum.
              Perspiciatis minima nesciunt dolorem! Officiis iure rerum voluptates a
              cumque velit
            </p>
          </div>
        </div>
      );
    }
    
    




    
    
  


export default ProductPage;