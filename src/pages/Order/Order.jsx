import { useState } from "react";
import { Container } from "../../components/Order/Order.styled";
import OrderList from "../../components/Order/OrderList";

const Order = () => {
  const [list] = useState([
    {
      title: "لایک",
      type: "like",
      token: ~~(Math.random() * 999999),
      list: [
        { amount: "100", price: "3000", token: ~~(Math.random() * 99999) },
        { amount: "200", price: "5000", token: ~~(Math.random() * 99999) },
        { amount: "600", price: "10000", token: ~~(Math.random() * 99999) },
      ],
    },
    {
      title: "فالوور",
      type: "follower",
      token: ~~(Math.random() * 999999),
      list: [
        { amount: "100", price: "3000", token: ~~(Math.random() * 99999) },
        { amount: "200", price: "5000", token: ~~(Math.random() * 99999) },
        { amount: "600", price: "10000", token: ~~(Math.random() * 99999) },
      ],
    },
    {
      title: "کامنت",
      type: "comment",
      token: ~~(Math.random() * 999999),
      list: [
        { amount: "100", price: "3000", token: ~~(Math.random() * 99999) },
        { amount: "200", price: "5000", token: ~~(Math.random() * 99999) },
        { amount: "600", price: "10000", token: ~~(Math.random() * 99999) },
      ],
    },
    {
      title: "ویو پست",
      type: "postView",
      token: ~~(Math.random() * 999999),
      list: [
        { amount: "100", price: "3000", token: ~~(Math.random() * 99999) },
        { amount: "200", price: "5000", token: ~~(Math.random() * 99999) },
        { amount: "600", price: "10000", token: ~~(Math.random() * 99999) },
      ],
    },
    {
      title: "لایک کامنت",
      type: "commentLike",
      token: ~~(Math.random() * 999999),
      list: [
        { amount: "100", price: "3000", token: ~~(Math.random() * 99999) },
        { amount: "200", price: "5000", token: ~~(Math.random() * 99999) },
        { amount: "600", price: "10000", token: ~~(Math.random() * 99999) },
      ],
    },
  ]);
  return (
    <Container className="container">
      {list?.map((item) => (
        <OrderList
          title={item?.title}
          item={item}
          list={item?.list}
          key={item?.token}
        />
      ))}
    </Container>
  );
};

export default Order;
