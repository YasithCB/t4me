import React from 'react';

class Product extends React.Component {
  render() {
    const product = this.props.product;

    return (
      <div>
        <h2>{product.name}</h2>
        <p>{product.desc}</p>
        <p>${product.price}</p>
      </div>
    );
  }
}

export default Product;
