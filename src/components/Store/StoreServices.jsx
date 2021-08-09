import { useState } from "react";
import { StoreServicesContainer as Container } from "./Store.styled";

const StoreServices = () => {
  const [services] = useState([
    { title: "coin", amount: 100, price: 3000 },
    { title: "coin", amount: 500, price: 5000 },
    { title: "coin", amount: 1000, price: 10000 },
    { title: "gem", amount: 100, price: 10000 },
    { title: "gem", amount: 500, price: 25000 },
    { title: "gem", amount: 1000, price: 45000 },
  ]);
  return (
    <Container>
      <div className="title">خدمات</div>
      {services.map((item) => (
        <div
          className="item"
          style={{
            background: item?.title === "coin" ? "#ffc107" : "#9c27b0",
            color: item?.title === "gem" ? "white" : "black",
          }}
        >
          <div className="" style={{ display: "flex" }}>
            <div className="amount" style={{ marginLeft: "5px" }}>
              {item?.amount}
            </div>
            <div className="itemTitle">
              {item?.title === "coin" ? "سکه" : "الماس"}
            </div>
          </div>
          <div className="price">
            {Number(item?.price).toLocaleString("fa-IR")} تومان
          </div>
        </div>
      ))}
    </Container>
  );
};

export default StoreServices;
