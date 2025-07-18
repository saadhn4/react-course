import axios from "axios";
import { useEffect, useState, Fragment } from "react";

import Header from "../../components/Header";
import "./OrdersPage.css";
import { OrdersGrid } from "./OrdersGrid";

const OrdersPage = ({ cart }) => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const fetchOrders = async () => {
      const response = await axios.get("/api/orders?expand=products");
      setOrders(response.data);
    };
    fetchOrders();
  }, []);
  return (
    <>
      <link rel="icon" type="image/svg+xml" href="orders-favicon.png" />
      <title>Orders</title>
      <Header cart={cart} />
      <div className="orders-page">
        <div className="page-title">Your Orders</div>

        <OrdersGrid orders={orders} />
      </div>
    </>
  );
};

export default OrdersPage;
