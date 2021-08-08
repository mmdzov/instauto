import { useState } from "react";
import styled from "styled-components";
import {
  ShoppingOutlined,
  ShakeOutlined,
  PercentageOutlined,
  MessageOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import WorkOutlineIcon from "@material-ui/icons/WorkOutline";

const New = () => {
  const [list] = useState([
    { title: "سفارش", Icon: ShoppingOutlined, url: "/order" },
    { title: "قرعه کشی", Icon: ShakeOutlined, url: "/lottery/new" },
    { title: "کد تخفیف", Icon: PercentageOutlined, url: "/discount-code" },
    { title: "کسب و کار", Icon: WorkOutlineIcon, url: "/discount-code" },
    { title: "گفتگو", Icon: MessageOutlined, url: "/chat" },
    { title: "خرید", Icon: ShoppingCartOutlined, url: "/shop" },
  ]);
  return (
    <Container className="container">
      {list?.map((item) => (
        <div className="item">
          <div className="title">{item?.title}</div>
          <item.Icon />
        </div>
      ))}
    </Container>
  );
};

const Container = styled.div`
  margin: 10px 0px;
  & .title {
    font-size: 0.8rem;
  }
  & .item {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    padding: 0px 15px;
    width: 95%;
    margin: 0 auto;
    height: 45px;
    align-items: center;
    border: 1px solid #eaeaea;
    border-radius: 3px;
    background: #fdfdfd;
    cursor: pointer;
    margin-bottom: 5px;
    /* & > span {
      font-size: 1rem;
    } */
    &:hover {
      background: #f7f7f7;
    }
    & svg {
      font-size: 1.3rem;
    }
  }
`;
export default New;
