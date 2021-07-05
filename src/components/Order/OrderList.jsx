import toToman from "../../utils/toToman";
import { ContainerOrderList } from "./Order.styled";

const OrderList = ({ title = "لایک", list = [] }) => {
  const persianNumber = (number) => {
    const nm = +number;
    return nm.toLocaleString("fa-IR");
  };
  return (
    <ContainerOrderList className="">
      <div className="title">{title}</div>
      {list?.map((item) => (
        <div className="item">
          <div className="">{persianNumber(item?.amount)}</div>
          <div className="">{toToman(item?.price)}</div>
        </div>
      ))}
    </ContainerOrderList>
  );
};

export default OrderList;
