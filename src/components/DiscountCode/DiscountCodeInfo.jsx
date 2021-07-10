import { useState } from "react";
import { DiscountCodeInfoContainer as Container } from "./DiscountCode.styled";
import { Switch, Alert } from "antd";

const DiscountCodeInfo = ({ joined, setJoin = () => {} }) => {
  const [message] = useState("خرید های خود را با تخفیف انجام بدید.");
  const handleChange = () => {
    setJoin((prev) => !prev);
  };
  return (
    <Container>
      <Alert message={message} type="info" />{" "}
      <div className="informing">
        <div className="switchContainer">
          {!joined ? (
            <span onClick={handleChange}>برای عضویت کلیک کنید.</span>
          ) : (
            <span onClick={handleChange}>شما عضو خبررسانی اینستاتو شدید.</span>
          )}
          <Switch onChange={handleChange} checked={joined} />
        </div>
      </div>
    </Container>
  );
};

export default DiscountCodeInfo;
