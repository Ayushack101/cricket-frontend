import React from "react";

const Card = ({img1, img2, product_name, product_current_price}) => {
  return <div className="col-lg-4 col-md-6 col-12 mt-3">
                  <div className="my-badge">
                    <div className="image-slider">
                      <img src={img1} className="image-one" alt="Image 1" />
                      <img src={img2} className="image-two" alt="Image 2" />
                    </div>
                    <span className="badge rounded-pill bg-dark">sale</span>
    
                    <div className="silder-txt">
                      <a href="#">
                        {product_name}
                      </a>
                      <p className="mt-2">Rs. {product_current_price}</p>
                    </div>
                  </div>
                </div>
};

export default Card;
