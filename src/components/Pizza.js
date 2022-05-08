import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';

export default function Pizza({ pizza }) {
  const [quantity, setquantity] = useState(1);
  const [varient, setvarient] = useState('small');
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <div
        className="card text-center m-3 shadow p-3 mb-5 bg-body rounded"
        style={{ width: '23rem', height: '30rem' }}
      >
        <div className="card-body">
          <div onClick={handleShow}>
            <h5 className="card-title">{pizza.name}</h5>
            <img
              src={pizza.image}
              style={{ width: '200px', height: '200px' }}
              className="card-img-top img-fluid"
              alt="..."
            />
          </div>
          <div className="row">
            <div className="col">
              <p>Varients</p>
              <select
                value={varient}
                onChange={(e) => {
                  setvarient(e.target.value);
                }}
              >
                {pizza.varient.map((varient) => {
                  return <option value={varient}>{varient}</option>;
                })}
              </select>
            </div>
            <div className="col">
              <p>Quantity</p>
              <select
                value={quantity}
                onChange={(e) => {
                  setquantity(e.target.value);
                }}
              >
                {[...Array(10).keys()].map((x, i) => {
                  return <option value={i + 1}>{i + 1}</option>;
                })}
              </select>
            </div>
          </div>
          <div className="row mt-3 d-flex align-items-center">
            <div className="col">
              <p>Price</p>
              <h5>{pizza.prices[0][varient] * quantity} Rs/- </h5>
            </div>
            <div className="col">
              <a
                href="#"
                style={{ width: '150px', height: '40px' }}
                className="btn btn-primary"
              >
                Add to cart
              </a>
            </div>
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img src={pizza.image} style={{ width: '200px', height: '200px' }} />
          <p className="card-text m-3">{pizza.description}</p>
        </Modal.Body>

        <Modal.Footer>
          <button className="btn" onClick={handleClose}>
            CLOSE
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
