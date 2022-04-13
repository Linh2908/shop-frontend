import React from "react";
import { Button, Modal } from "react-bootstrap";
import { connect } from "react-redux";

import { deleteProductFromCart } from "../../../action/cartAction";

function DeleteOrderModal({ product, isShow, onClose, deleteProductFromCart }) {
  const handleClose = () => {
    onClose && onClose();
  };

  const handleDeleteItem = (id) => {
    deleteProductFromCart(id);
  };
  return (
    <Modal show={isShow} onHide={() => handleClose()}>
      <Modal.Header closeButton>Xoá sản phẩm trong giỏ hàng !!!</Modal.Header>
      <Modal.Body>
        Bạn có muốn xóa <strong>{product.name}</strong> trong giỏ hàng ?
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success" onClick={() => handleDeleteItem(product._id)}>
          Ok
        </Button>
        <Button variant="danger" onClick={() => handleClose()}>
          Thoát
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { deleteProductFromCart })(
  DeleteOrderModal
);
