import React from "react";
import DashboardSidebar from "../components/DashboardSidebar/DashboardSidebar";
import { Link } from "react-router-dom";

const AccountOrders = () => {
  const orders = [
    {
      id: "1647629329",
      date: "March 15, 2025",
      status: "Shipped",
      total: "$120.00",
      items: [
        {
          name: "Wireless Headphones",
          image: "https://via.placeholder.com/100",
        },
        {
          name: "Wireless Headphones",
          image: "https://via.placeholder.com/100",
        },
      ],
    },
    {
      id: "1647629330",
      date: "March 10, 2025",
      status: "Delivered",
      total: "$75.50",
      items: [
        {
          name: "Smart Watch",
          image: "https://via.placeholder.com/100",
        },
      ],
    },
    {
      id: "1647629331",
      date: "March 5, 2025",
      status: "Processing",
      total: "$200.00",
      items: [
        {
          name: "Gaming Mouse",
          image: "https://via.placeholder.com/100",
        },
      ],
    },
  ];

  return (
    <section className="my-orders px-3 px-lg-5">
      <div className="row gx-5">
        <DashboardSidebar activeLink={"/account/orders"} />
        <div className="col-12 col-lg-9 mt-4 mt-lg-0">
          <div className="orders-info">
            <h4 className="pb-2 main-heading">My Orders</h4>
            <hr className="main-border" />

            {orders.map((order) => (
              <div key={order.id} className="order-card">
                <div className="order-strip d-flex justify-content-between justify-content-lg-between align-items-center align-items-lg-center">
                  <div className="d-flex flex-column flex-lg-row">
                    <div>
                      <p className="mb-1">
                        Order ID:{" "}
                        <span className="text-primary">{order.id}</span>
                      </p>
                      <p className="mb-0 text-muted">Placed on {order.date}</p>
                    </div>
                    <p className="mb-0 ms-0 ms-lg-5 text-muted">
                      Total <br /> {order.total}
                    </p>
                  </div>
                  <div className="d-flex flex-column flex-lg-row">
                    <div
                      className={`badge fs-6 ${
                        order.status === "Delivered"
                          ? "bg-success"
                          : order.status === "Shipped"
                          ? "bg-primary"
                          : "bg-warning text-dark"
                      }`}
                    >
                      {order.status}
                    </div>
                    <Link
                      to={`/account/order/${order.id}`}
                      className="order-btn ms-3 mt-3 mt-lg-0"
                    >
                      View Order
                    </Link>
                  </div>
                </div>

                {/* Order Items */}
                {order.items.map((item, index) => (
                  <div key={index} className="border-top p-3 order-item">
                    <img
                      src={
                        "https://angry.shinewebtech.in/assets/uploads/product-images/17410841657549a.webp"
                      }
                      alt={item.name}
                      className="rounded me-3"
                      style={{ width: "80px", height: "80px" }}
                    />
                    <div className="order-item-info">
                      <h6 className="mb-2">{item.name}</h6>
                      <p className="mb-1 text-muted">Size: Large</p>
                      <p className="mb-0 text-muted">Color: blue</p>
                    </div>
                  </div>
                ))}
                {/* Order View */}
                {/* <div className="d-flex justify-content-end border-top p-3">
                  <Link
                    to={`/account/order/${order.id}`}
                    className="order-btn me-2"
                  >
                    View Order
                  </Link>
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccountOrders;
