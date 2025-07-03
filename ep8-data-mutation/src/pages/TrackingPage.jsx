// idk how to do this bs
import { Link, useParams } from "react-router";
import Header from "../components/Header";
import "./TrackingPage.css";
import axios from "axios";
import { useEffect, useState } from "react";

export const TrackingPage = ({ cart }) => {
  const [orderData, setOrderData] = useState(null);
  const params = useParams();
  const { orderId, productId } = params;
  console.log(params);
  useEffect(() => {
    const getTrackingData = async () => {
      const response = await axios.get(
        `/api/orders/${orderId}?expand=products`
      );
      setOrderData(response.data);
    };
    getTrackingData();
  }, [orderId]);

  if (!orderData) {
    return null;
  }
  return (
    <>
      <title>Tracking</title>

      <Header cart={cart} />

      <div className="tracking-page">
        <div className="order-tracking">
          <Link className="back-to-orders-link link-primary" href="/orders">
            View all orders
          </Link>

          <div className="delivery-date">Arriving on Monday, June 13</div>

          <div className="product-info">
            Black and Gray Athletic Cotton Socks - 6 Pairs
          </div>

          <div className="product-info">Quantity: 1</div>

          <img
            className="product-image"
            src="images/products/athletic-cotton-socks-6-pairs.jpg"
          />

          <div className="progress-labels-container">
            <div className="progress-label">Preparing</div>
            <div className="progress-label current-status">Shipped</div>
            <div className="progress-label">Delivered</div>
          </div>

          <div className="progress-bar-container">
            <div className="progress-bar"></div>
          </div>
        </div>
      </div>
    </>
  );
};
