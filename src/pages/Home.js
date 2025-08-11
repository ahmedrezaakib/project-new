import React, { useEffect, useState } from 'react';
import Weblayout from '../layout/Weblayout';
import axios from '../Admin/component/axios';
import { useCart } from "react-use-cart";

function Home () {
  const { addItem } = useCart();

 const [featured,setFeatured]=useState([]);
 const [newCome,setNewCome]=useState([]);
 const [inspired,setInspired]=useState([]);
useEffect(() => {
    getProducts();
  }, []);
 const getProducts = async (e) => {
     let feat = await axios.get(`front_api/products.php?query_type=featured&limit=5`)
     setFeatured(feat.data);
  
     let newC = await axios.get(`front_api/products.php?query_type=new_product&limit=5`)
     setNewCome(newC.data);
   
     let insp = await axios.get(`front_api/products.php?query_type=inspired&limit=5`)
     setInspired(insp.data);
   }

   

  return (
  
<Weblayout>
  <section className="home_banner_area mb-40">
    <div className="banner_inner d-flex align-items-center">
      <div className="container">
        <div className="banner_content row">
          <div className="col-lg-12">
            <p className="sub text-uppercase">men Collection</p>
            <h3><span>Show</span> Your <br />Personal <span>Style</span></h3>
            <h4>Fowl saw dry which a above together place.</h4>
            <a className="main_btn mt-40" href="#">View Collection</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="feature-area section_gap_bottom_custom">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-6">
          <div className="single-feature">
            <a href="#" className="title">
              <i className="flaticon-money"></i>
              <h3>Money back gurantee</h3>
            </a>
            <p>Shall open divide a one</p>
          </div>
        </div>

        <div className="col-lg-3 col-md-6">
          <div className="single-feature">
            <a href="#" className="title">
              <i className="flaticon-truck"></i>
              <h3>Free Delivery</h3>
            </a>
            <p>Shall open divide a one</p>
          </div>
        </div>

        <div className="col-lg-3 col-md-6">
          <div className="single-feature">
            <a href="#" className="title">
              <i className="flaticon-support"></i>
              <h3>Alway support</h3>
            </a>
            <p>Shall open divide a one</p>
          </div>
        </div>

        <div className="col-lg-3 col-md-6">
          <div className="single-feature">
            <a href="#" className="title">
              <i className="flaticon-blockchain"></i>
              <h3>Secure payment</h3>
            </a>
            <p>Shall open divide a one</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="feature_product_area section_gap_bottom_custom">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-12">
          <div className="main_title">
            <h2><span>Featured product</span></h2>
            <p>Bring called seed first of third give itself now ment</p>
          </div>
        </div>
      </div>

      <div className="row">
      {
        featured.length > 0 && featured.map((d, key) =>
            <div className="col-lg-4 col-md-6">
              <div className="single-product">
                <div className="product-img">
                  <img className="img-fluid w-100" src={`${process.env.REACT_APP_API_URL}${d.image}`} alt="" />
                  <div className="p_icon">
                    <a href="#">
                      <i className="ti-eye"></i>
                    </a>
                    <a href="#">
                      <i className="ti-heart"></i>
                    </a>
                    <button className='btn btn-link' onClick={() => addItem(d)}>
                      <i className="ti-shopping-cart"></i>
                    </button>
                  </div>
                </div>
                <div className="product-btm">
                  <a href="#" className="d-block">
                    <h4>{d.name}</h4>
                  </a>
                  <div className="mt-3">
                    <span className="mr-4">{d.price}</span>
                    {/* <del>$35.00</del> */}
                  </div>
                </div>
              </div>
            </div>

        )
      }
        
        
      </div>
    </div>
  </section>
  <section className="offer_area">
    <div className="container">
      <div className="row justify-content-center">
        <div className="offset-lg-4 col-lg-6 text-center">
          <div className="offer_content">
            <h3 className="text-uppercase mb-40">all men’s collection</h3>
            <h2 className="text-uppercase">50% off</h2>
            <a href="#" className="main_btn mb-20 mt-5">Discover Now</a>
            <p>Limited Time Offer</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="new_product_area section_gap_top section_gap_bottom_custom">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-12">
          <div className="main_title">
            <h2><span>new products</span></h2>
            <p>Bring called seed first of third give itself now ment</p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-6">
          <div className="new_product">
            <h5 className="text-uppercase">collection of 2019</h5>
            <h3 className="text-uppercase">Men’s summer t-shirt</h3>
            <div className="product-img">
              <img className="img-fluid" src="assets/img/product/new-product/new-product1.png" alt="" />
            </div>
            <h4>$120.70</h4>
            <a href="#" className="main_btn">Add to cart</a>
          </div>
        </div>

        <div className="col-lg-6 mt-5 mt-lg-0">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="single-product">
                <div className="product-img">
                  <img className="img-fluid w-100" src="assets/img/product/new-product/n1.jpg" alt="" />
                  <div className="p_icon">
                    <a href="#">
                      <i className="ti-eye"></i>
                    </a>
                    <a href="#">
                      <i className="ti-heart"></i>
                    </a>
                    <a href="#">
                      <i className="ti-shopping-cart"></i>
                    </a>
                  </div>
                </div>
                <div className="product-btm">
                  <a href="#" className="d-block">
                    <h4>Nike latest sneaker</h4>
                  </a>
                  <div className="mt-3">
                    <span className="mr-4">$25.00</span>
                    <del>$35.00</del>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="single-product">
                <div className="product-img">
                  <img className="img-fluid w-100" src="assets/img/product/new-product/n2.jpg" alt="" />
                  <div className="p_icon">
                    <a href="#">
                      <i className="ti-eye"></i>
                    </a>
                    <a href="#">
                      <i className="ti-heart"></i>
                    </a>
                    <a href="#">
                      <i className="ti-shopping-cart"></i>
                    </a>
                  </div>
                </div>
                <div className="product-btm">
                  <a href="#" className="d-block">
                    <h4>Men’s denim jeans</h4>
                  </a>
                  <div className="mt-3">
                    <span className="mr-4">$25.00</span>
                    <del>$35.00</del>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="single-product">
                <div className="product-img">
                  <img className="img-fluid w-100" src="assets/img/product/new-product/n3.jpg" alt="" />
                  <div className="p_icon">
                    <a href="#">
                      <i className="ti-eye"></i>
                    </a>
                    <a href="#">
                      <i className="ti-heart"></i>
                    </a>
                    <a href="#">
                      <i className="ti-shopping-cart"></i>
                    </a>
                  </div>
                </div>
                <div className="product-btm">
                  <a href="#" className="d-block">
                    <h4>quartz hand watch</h4>
                  </a>
                  <div className="mt-3">
                    <span className="mr-4">$25.00</span>
                    <del>$35.00</del>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="single-product">
                <div className="product-img">
                  <img className="img-fluid w-100" src="assets/img/product/new-product/n4.jpg" alt="" />
                  <div className="p_icon">
                    <a href="#">
                      <i className="ti-eye"></i>
                    </a>
                    <a href="#">
                      <i className="ti-heart"></i>
                    </a>
                    <a href="#">
                      <i className="ti-shopping-cart"></i>
                    </a>
                  </div>
                </div>
                <div className="product-btm">
                  <a href="#" className="d-block">
                    <h4>adidas sport shoe</h4>
                  </a>
                  <div className="mt-3">
                    <span className="mr-4">$25.00</span>
                    <del>$35.00</del>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="inspired_product_area section_gap_bottom_custom">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-12">
          <div className="main_title">
            <h2><span>Inspired products</span></h2>
            <p>Bring called seed first of third give itself now ment</p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-3 col-md-6">
          <div className="single-product">
            <div className="product-img">
              <img className="img-fluid w-100" src="assets/img/product/inspired-product/i1.jpg" alt="" />
              <div className="p_icon">
                <a href="#">
                  <i className="ti-eye"></i>
                </a>
                <a href="#">
                  <i className="ti-heart"></i>
                </a>
                <a href="#">
                  <i className="ti-shopping-cart"></i>
                </a>
              </div>
            </div>
            <div className="product-btm">
              <a href="#" className="d-block">
                <h4>Latest men’s sneaker</h4>
              </a>
              <div className="mt-3">
                <span className="mr-4">$25.00</span>
                <del>$35.00</del>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6">
          <div className="single-product">
            <div className="product-img">
              <img className="img-fluid w-100" src="assets/img/product/inspired-product/i2.jpg" alt="" />
              <div className="p_icon">
                <a href="#">
                  <i className="ti-eye"></i>
                </a>
                <a href="#">
                  <i className="ti-heart"></i>
                </a>
                <a href="#">
                  <i className="ti-shopping-cart"></i>
                </a>
              </div>
            </div>
            <div className="product-btm">
              <a href="#" className="d-block">
                <h4>Latest men’s sneaker</h4>
              </a>
              <div className="mt-3">
                <span className="mr-4">$25.00</span>
                <del>$35.00</del>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6">
          <div className="single-product">
            <div className="product-img">
              <img className="img-fluid w-100" src="assets/img/product/inspired-product/i3.jpg" alt="" />
              <div className="p_icon">
                <a href="#">
                  <i className="ti-eye"></i>
                </a>
                <a href="#">
                  <i className="ti-heart"></i>
                </a>
                <a href="#">
                  <i className="ti-shopping-cart"></i>
                </a>
              </div>
            </div>
            <div className="product-btm">
              <a href="#" className="d-block">
                <h4>Latest men’s sneaker</h4>
              </a>
              <div className="mt-3">
                <span className="mr-4">$25.00</span>
                <del>$35.00</del>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6">
          <div className="single-product">
            <div className="product-img">
              <img className="img-fluid w-100" src="assets/img/product/inspired-product/i4.jpg" alt="" />
              <div className="p_icon">
                <a href="#">
                  <i className="ti-eye"></i>
                </a>
                <a href="#">
                  <i className="ti-heart"></i>
                </a>
                <a href="#">
                  <i className="ti-shopping-cart"></i>
                </a>
              </div>
            </div>
            <div className="product-btm">
              <a href="#" className="d-block">
                <h4>Latest men’s sneaker</h4>
              </a>
              <div className="mt-3">
                <span className="mr-4">$25.00</span>
                <del>$35.00</del>
              </div>
            </div>
          </div>
        </div>
        
        <div className="col-lg-3 col-md-6">
          <div className="single-product">
            <div className="product-img">
              <img className="img-fluid w-100" src="assets/img/product/inspired-product/i5.jpg" alt="" />
              <div className="p_icon">
                <a href="#">
                  <i className="ti-eye"></i>
                </a>
                <a href="#">
                  <i className="ti-heart"></i>
                </a>
                <a href="#">
                  <i className="ti-shopping-cart"></i>
                </a>
              </div>
            </div>
            <div className="product-btm">
              <a href="#" className="d-block">
                <h4>Latest men’s sneaker</h4>
              </a>
              <div className="mt-3">
                <span className="mr-4">$25.00</span>
                <del>$35.00</del>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6">
          <div className="single-product">
            <div className="product-img">
              <img className="img-fluid w-100" src="assets/img/product/inspired-product/i6.jpg" alt="" />
              <div className="p_icon">
                <a href="#">
                  <i className="ti-eye"></i>
                </a>
                <a href="#">
                  <i className="ti-heart"></i>
                </a>
                <a href="#">
                  <i className="ti-shopping-cart"></i>
                </a>
              </div>
            </div>
            <div className="product-btm">
              <a href="#" className="d-block">
                <h4>Latest men’s sneaker</h4>
              </a>
              <div className="mt-3">
                <span className="mr-4">$25.00</span>
                <del>$35.00</del>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6">
          <div className="single-product">
            <div className="product-img">
              <img className="img-fluid w-100" src="assets/img/product/inspired-product/i7.jpg" alt="" />
              <div className="p_icon">
                <a href="#">
                  <i className="ti-eye"></i>
                </a>
                <a href="#">
                  <i className="ti-heart"></i>
                </a>
                <a href="#">
                  <i className="ti-shopping-cart"></i>
                </a>
              </div>
            </div>
            <div className="product-btm">
              <a href="#" className="d-block">
                <h4>Latest men’s sneaker</h4>
              </a>
              <div className="mt-3">
                <span className="mr-4">$25.00</span>
                <del>$35.00</del>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6">
          <div className="single-product">
            <div className="product-img">
              <img className="img-fluid w-100" src="assets/img/product/inspired-product/i8.jpg" alt="" />
              <div className="p_icon">
                <a href="#">
                  <i className="ti-eye"></i>
                </a>
                <a href="#">
                  <i className="ti-heart"></i>
                </a>
                <a href="#">
                  <i className="ti-shopping-cart"></i>
                </a>
              </div>
            </div>
            <div className="product-btm">
              <a href="#" className="d-block">
                <h4>Latest men’s sneaker</h4>
              </a>
              <div className="mt-3">
                <span className="mr-4">$25.00</span>
                <del>$35.00</del>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="blog-area section-gap">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-12">
          <div className="main_title">
            <h2><span>latest blog</span></h2>
            <p>Bring called seed first of third give itself now ment</p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-4 col-md-6">
          <div className="single-blog">
            <div className="thumb">
              <img className="img-fluid" src="assets/img/b1.jpg" alt=""/>
            </div>
            <div className="short_details">
              <div className="meta-top d-flex">
                <a href="#">By Admin</a>
                <a href="#"><i className="ti-comments-smiley"></i>2 Comments</a>
              </div>
              <a className="d-block" href="single-blog.html">
                <h4>Ford clever bed stops your sleeping
                  partner hogging the whole</h4>
              </a>
              <div className="text-wrap">
                <p>
                  Let one fifth i bring fly to divided face for bearing the divide unto seed winged divided light
                  Forth.
                </p>
              </div>
              <a href="#" className="blog_btn">Learn More <span className="ml-2 ti-arrow-right"></span></a>
            </div>
          </div>
        </div>
        
        <div className="col-lg-4 col-md-6">
          <div className="single-blog">
            <div className="thumb">
              <img className="img-fluid" src="assets/img/b2.jpg" alt=""/>
            </div>
            <div className="short_details">
              <div className="meta-top d-flex">
                <a href="#">By Admin</a>
                <a href="#"><i className="ti-comments-smiley"></i>2 Comments</a>
              </div>
              <a className="d-block" href="single-blog.html">
                <h4>Ford clever bed stops your sleeping
                  partner hogging the whole</h4>
              </a>
              <div className="text-wrap">
                <p>
                  Let one fifth i bring fly to divided face for bearing the divide unto seed winged divided light
                  Forth.
                </p>
              </div>
              <a href="#" className="blog_btn">Learn More <span className="ml-2 ti-arrow-right"></span></a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6">
          <div className="single-blog">
            <div className="thumb">
              <img className="img-fluid" src="assets/img/b3.jpg" alt=""/>
            </div>
            <div className="short_details">
              <div className="meta-top d-flex">
                <a href="#">By Admin</a>
                <a href="#"><i className="ti-comments-smiley"></i>2 Comments</a>
              </div>
              <a className="d-block" href="single-blog.html">
                <h4>Ford clever bed stops your sleeping
                  partner hogging the whole</h4>
              </a>
              <div className="text-wrap">
                <p>
                  Let one fifth i bring fly to divided face for bearing the divide unto seed winged divided light
                  Forth.
                </p>
              </div>
              <a href="#" className="blog_btn">Learn More <span className="ml-2 ti-arrow-right"></span></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </Weblayout>
  
  );
}

export default Home;
