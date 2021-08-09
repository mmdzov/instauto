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
import { useHistory } from "react-router-dom";

const New = () => {
  const [list] = useState([
    { title: "سفارش", Icon: ShoppingOutlined, url: "/order/plans" },
    { title: "قرعه کشی", Icon: ShakeOutlined, url: "/lottery/new" },
    { title: "کد تخفیف", Icon: PercentageOutlined, url: "/discount-code" },
    { title: "کسب و کار", Icon: WorkOutlineIcon, url: "/work" },
    { title: "گفتگو", Icon: MessageOutlined, url: "/chat" },
    { title: "خرید", Icon: ShoppingCartOutlined, url: "/shop" },
  ]);
  
  const history = useHistory();

  return (
    <Container className="container">
      {list?.map((item) => (
        <div className="item" onClick={() => history.push(item?.url)}>
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
