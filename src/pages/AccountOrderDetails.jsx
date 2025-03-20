import React from "react";
import DashboardSidebar from "../components/DashboardSidebar/DashboardSidebar";
import { Link, useParams } from "react-router-dom";

const AccountOrderDetails = () => {
  const { orderid } = useParams(); // Get order ID from URL

  // Sample Order Data (Replace with API data)
  const order = {
    id: orderid,
    date: "March 15, 2025",
    status: "Shipped",
    total: "$250.00",
    shippingCost: "$10.00",
    paymentMethod: "Credit Card",
    address: {
      name: "John Doe",
      street: "123 Main Street",
      city: "New York",
      state: "NY",
      zip: "10001",
      country: "USA",
    },
    items: [
      {
        name: "Wireless Headphones",
        price: "$120.00",
        quantity: 1,
        image: "https://via.placeholder.com/100",
      },
      {
        name: "Gaming Mouse",
        price: "$60.00",
        quantity: 1,
        image: "https://via.placeholder.com/100",
      },
      {
        name: "Smart Watch",
        price: "$70.00",
        quantity: 1,
        image: "https://via.placeholder.com/100",
      },
    ],
  };

  return (
    <section className="my-orders px-3 px-lg-5">
      <div className="row gx-5">
        <DashboardSidebar activeLink={"/account/order/:orderid"} />
        <div className="col-12 col-lg-9 mt-4 mt-lg-0">
          <div className="orders-details">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h4 className="pb-2 main-heading">
                  Order ID: <span className="text-dark">{order.id}</span>
                </h4>
                <p className="mb-2 text-muted">Order date: {order.date}</p>
              </div>
              <span
                className={`badge fs-6 ${
                  order.status === "Delivered"
                    ? "bg-success"
                    : order.status === "Shipped"
                    ? "bg-primary"
                    : "bg-warning text-dark"
                }`}
              >
                {order.status}
              </span>
            </div>
            <hr className="main-border" />

            {/* Order Products */}
            <div className="order-items p-3">
              <h5 className="mb-3">Order Items</h5>
              {order.items.map((item, index) => (
                <div
                  key={index}
                  className="d-flex align-items-center justify-content-between border-bottom pb-3 mb-3"
                >
                  <div className="d-flex align-items-center">
                    <img
                      src={
                        "https://angry.shinewebtech.in/assets/uploads/product-images/17410841657549a.webp"
                      }
                      alt={item.name}
                      className="rounded me-3"
                      style={{ width: "80px", height: "80px" }}
                    />
                    <div className="flex-grow-1">
                      <h6
                        style={{ fontSize: "18px", fontWeight: "500" }}
                        className="mb-1"
                      >
                        {item.name}
                      </h6>
                      <p className="mb-1 text-muted">Size: Large</p>
                      <p className="mb-0 text-muted">Color: blue</p>
                    </div>
                  </div>
                  <div>
                    <p
                      className="mb-1"
                      style={{ fontSize: "16px", fontWeight: "500" }}
                    >
                      {" "}
                      {item.price}
                    </p>
                    <p className="mb-0 text-muted">Qty: {item.quantity}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Delivery Address */}
            <div className="order-items p-3">
              <div className="d-flex justify-content-between mb-2">
                <h5 className="mb-3">Delivery Address</h5>
                <div className="mt-2">
                  <Link to="/account/address" className="order-btn">
                    Edit Address
                  </Link>
                </div>
              </div>
              <div>
                <p className="mb-1">
                  <strong>{order.address.name}</strong>
                </p>
                <p className="mb-1">
                  {order.address.street}, {order.address.city}
                </p>
                <p className="mb-1">
                  {order.address.state}, {order.address.zip}
                </p>
                <p className="mb-0">{order.address.country}</p>
              </div>
            </div>

            {/* Order Summary */}
            <div className="order-items p-3">
              <h5 className="mb-3">Order Summary</h5>
              <div className="d-flex justify-content-between mb-2">
                <span>Subtotal:</span>
                <span>$250.00</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Shipping:</span>
                <span>{order.shippingCost}</span>
              </div>
              <div className="d-flex justify-content-between fw-bold">
                <span>Total:</span>
                <span>{order.total}</span>
              </div>
              <p className="text-muted mt-2">Paid via {order.paymentMethod}</p>
            </div>

            {/* Back to Orders Button */}
            <div className="mt-4">
              <Link to="/account/orders" className="order-btn">
                Back to My Orders
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccountOrderDetails;
