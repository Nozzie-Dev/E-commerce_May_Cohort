import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateItemQuantity } from "../Redux/cartSlice";

const CheckBag = () => {
  // Access the cart items from the Redux store
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  // Function to decrease quantity
  const decreaseQuantity = (item) => {
    if (item.quantity > 1) {
      dispatch(updateItemQuantity({ id: item.id, quantity: item.quantity - 1 }));
    }
  };

  // Function to increase quantity
  const increaseQuantity = (item) => {
    dispatch(updateItemQuantity({ id: item.id, quantity: item.quantity + 1 }));
  };

  return (
    <div className="container p-4 mt-5">
      <h3>Check your Bag Items</h3>
      {cartItems.length === 0 ? (
        <p>Your bag is empty.</p>
      ) : (
        cartItems.map((item, index) => (
          <div key={index} className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={item.image}
                  className="img-fluid rounded-start"
                  alt={item.name}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text text-muted">{item.description}</p>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      ★★★★★ <span>4.5/5</span>
                    </small>
                  </p>
                  <div className="d-flex align-items-center justify-content-between">
                    <p className="card-text mb-0">
                      ${item.price} x <span>{item.quantity}</span>
                    </p>
                    <div className="d-flex align-items-center">
                      <button
                        className="btn btn-outline-danger border-0 me-2"
                        onClick={() => decreaseQuantity(item)}
                      >
                        -
                      </button>
                      <span className="mx-2">{item.quantity}</span>
                      <button
                        className="btn btn-outline-success border-0 ms-2"
                        onClick={() => increaseQuantity(item)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default CheckBag;
