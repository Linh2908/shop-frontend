import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { connect } from "react-redux";

import { getAllProduct } from "../../../../action/productAction";
import Product from "./Product";

const SmartPhonePage = ({ infoAllProduct, getAllProduct }) => {
  const [currentProducts, setCurrentProducts] = useState([]);

  const { products } = infoAllProduct;

  useEffect(() => {
    getAllProduct();
  }, []);

  useEffect(() => {
    if (products && products.length !== 0) {
      const _products = products.filter(
        (product) => product.category === "smartphone"
      );
      setCurrentProducts(_products);
    }
  }, [products]);
  return (
    <Container>

        <h3>Quan ly dien thoai :</h3>
        {currentProducts && currentProducts.length !== 0 ? (
        <Table bordered hover className="table-product">
          <thead>
            <tr>
              <th>Stt</th>
              <th>Anh</th>
              <th>Ten</th>
              <th>Thuong hieu</th>
              <th>Loai</th>
              <th>Mieu ta</th>
              <th>Gia</th>
              <th>So luong trong kho</th>
              <th>So luong danh gia</th>
              <th>Hanh dong</th>
            </tr>
          </thead>
          <tbody>
            {currentProducts &&
              currentProducts.map((product, index) => (
                <Product key={product._id} product={product} index={index} />
              ))}
          </tbody>
        </Table>
      ) : <h3>Chua co san pham nao o muc nay !!!</h3>}
    </Container>
  );
};

const mapStateToProps = (state) => ({
  infoAllProduct: state.productRead,
});

export default connect(mapStateToProps, { getAllProduct })(SmartPhonePage);
