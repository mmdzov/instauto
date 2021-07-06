import { useState } from "react";
import OrderTrackingList from "../../components/OrderTracking/OrderTrackingList";

const OrderTracking = () => {
  const [list] = useState([
    {
      order: 436577,
      type: "لایک",
      username: "mmdzov",
      trackCount: 81,
      count: 200,
      status: "doing",
    },
    {
      order: 436577,
      type: "فالوور",
      username: "mmdzov",
      trackCount: 23,
      count: 5000,
      status: "done",
    },
    {
      order: 436577,
      type: "کامنت",
      username: "mmdzov",
      trackCount: 2435,
      count: 3000,
      status: "awaitingApproval",
    },
    {
      order: 436577,
      type: "ویو",
      username: "mmdzov",
      trackCount: 32,
      count: 100,
      status: "canceled",
    },
  ]);
  return (
    <div className="container">
      <OrderTrackingList list={list} />
    </div>
  );
};

export default OrderTracking;
