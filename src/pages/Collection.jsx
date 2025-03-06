import React,{useEffect} from "react";

import bannerImage from "../assets/img/product-img/p-banner.jpg";
import img1 from "../assets/img/s-1.jpg";
import img2 from "../assets/img/s-1-1.jpg";
import img3 from "../assets/img/s-2.jpg";
import img4 from "../assets/img/s-2-2.jpg";
import img5 from "../assets/img/s-3.jpg";
import img6 from "../assets/img/s-3-3.jpg";
import { useDispatch,useSelector } from "react-redux";
import { fetchCategory ,fetchMidCategory, fetchTrendingProducts} from "../redux/ProductSlice/ProductSlice";

const Collection = () => {
  const dispatch = useDispatch();
  const {topCategory,midCategory}=useSelector((state)=>state.products);
  useEffect(() => {
    dispatch(fetchCategory());
    dispatch(fetchMidCategory());
  },[]);
  // console.log(topCategory,midCategory,"-----top Category ---  ---  ");
  return (
    <div>
      <div class="p-banner">
        <img src={bannerImage} class="w-100" alt="" />
      </div>

      <div className="container-fluid py-5">
        {/* filters */}
       
     
        <div className="row mt-4">
          <div className="col-lg-3 my-col">
          
          </div>
          <div className="col-lg-3 col-md-4 col-sm-12 col-12">
            <div className="side-img">
              <div className="right-img">
                <img src={img1} className="img-fluid" alt />
              </div>
              <div className="silder-txt">
                <a href="#">
                  SLUGGER Corporate combo of White Batting Leg guards/Pads and
                  White Gloves (2 products)
                </a>
                <p className="mt-2">Rs. 4,099.00</p>
              </div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 col-12 mt-5">
              <div className="side-img">
                <div className="right-img">
                  <img src={img2} className="img-fluid" alt />
                </div>
                <div className="silder-txt">
                  <a href="#">
                    SLUGGER Corporate combo of White Batting Leg guards/Pads and
                    White Gloves (2 products)
                  </a>
                  <p className="mt-2">Rs. 4,099.00</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-12 col-12">
            <div className="side-img">
              <div className="right-img">
                <img src={img3} className="img-fluid" alt />
              </div>
              <div className="silder-txt">
                <a href="#">
                  SLUGGER Corporate combo of White Batting Leg guards/Pads and
                  White Gloves (2 products)
                </a>
                <p className="mt-2">Rs. 4,099.00</p>
              </div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 col-12 mt-5">
              <div className="side-img">
                <div className="right-img">
                  <img src={img4} className="img-fluid" alt />
                </div>
                <div className="silder-txt">
                  <a href="#">
                    SLUGGER Corporate combo of White Batting Leg guards/Pads and
                    White Gloves (2 products)
                  </a>
                  <p className="mt-2">Rs. 4,099.00</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-12 col-12">
            <div className="side-img">
              <div className="right-img">
                <img src={img5} className="img-fluid" alt />
              </div>
              <div className="silder-txt">
                <a href="#">
                  SLUGGER Corporate combo of White Batting Leg guards/Pads and
                  White Gloves (2 products)
                </a>
                <p className="mt-2">Rs. 4,099.00</p>
              </div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 col-12 mt-5">
              <div className="side-img">
                <div className="right-img">
                  <img src={img6} className="img-fluid" alt />
                </div>
                <div className="silder-txt">
                  <a href="#">
                    SLUGGER Corporate combo of White Batting Leg guards/Pads and
                    White Gloves (2 products)
                  </a>
                  <p className="mt-2">Rs. 4,099.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pagination */}
        <div className="mypagi mt-5">
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">«</span>
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">»</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Collection;
