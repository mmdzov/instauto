import { DiscountListContainer as Container } from "./DiscountCode.styled";
import { Statistic, Row, Col } from "antd";
const { Countdown } = Statistic;

const DiscountList = ({ list = [] }) => {
  const handleFinish = (item) => {
    console.log("ok");
  };
  if (list?.length === 0)
    return (
      <Container>
        <div className="label">تخفیف های فعال</div>

        <div className="discountNotFound">تخفیف فعال ندارید.</div>
      </Container>
    );
  return (
    <Container>
      <div className="label">تخفیف های فعال</div>
      {list?.map((item) => (
        <div className="item">
          <div className="itemTitle">{item?.title}</div>
          <Countdown
            value={Date.now() + item?.expire}
            onFinish={() => handleFinish(item)}
          />
        </div>
      ))}
    </Container>
  );
};

export default DiscountList;
