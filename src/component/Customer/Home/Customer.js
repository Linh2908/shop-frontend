import React, { memo } from "react";
import { Container } from "react-bootstrap";

import "./Customer.scss";
import CarouselProduct from "../Owl-carousel/Carousel";
import iphone13 from "../../../image/Iphone 13 series.jpg";
import samsung from "../../../image/sam samsung.jpg";
import macbook from "../../../image/macbook.jpg";
import airpods from "../../../image/airpods.jpg";
import HotProducts from "../HotProduct/HotProducts";


function Customer() {

  return (
    <Container className="my-3">
      <div className="carousel-box">
        <div className="home-left">
          <CarouselProduct />
        </div>

        <div className="home-right">
          <div>
            <img src={iphone13} alt="iphone 13" />
            <img src={samsung} alt="samsung" />
          </div>
          <div>
            <img src={macbook} alt="macbook" />
            <img src={airpods} alt="airpods" />
          </div>
        </div>
      </div>
      <div>
        <h3>Sản phẩm bán chạy nhất tuần :</h3>
        <HotProducts keyword={''} num={"12"} />
      </div>
    </Container>
  );
};



export default memo(Customer);
