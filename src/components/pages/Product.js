import React from 'react'
import Laptops from "./../Laptops";
import Card from "./../product/Card";

const Product = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  ">
        {Laptops.map((laptop, index) => <Card key={laptop.id} laptop={laptop} /> )}
      </div>
    </div>
  )
}

export default Product