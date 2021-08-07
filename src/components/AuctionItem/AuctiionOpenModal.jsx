import Modal from "../../components/Modal/Modal";
import { useEffect, useState } from "react";
import { Input } from "antd";
import styled from "styled-components";
import Avatar from "../../assets/images/avatar.jpg";

const AuctionOpenModal = ({
  open,
  item = {},
  setItem = () => {},
  setOpen = () => {},
}) => {
  const [price, setPrice] = useState(1000);
  const handleChangePrice = (e) => {
    const { value } = e.target;
    const pattern = value.match(/[0-9]/g)?.join("") || "";
    setPrice(pattern);
  };
  const [lastPrice, setLastPrice] = useState(0);
  const [msg, setMsg] = useState("");
  const handleOpenAuction = () => {
    let users = item?.users;
    const newData = {
      username: "mmdzov",
      avatar: Avatar,
      lastPrice: price,
      ultimatum: true,
      dissatisfiedPeople: 2,
    };
    if (+price > lastPrice) {
      users = users.map((item) => {
        item.ultimatum = false;
        return item;
      });
      users.unshift(newData);
      setItem((prev) => ({
        ...prev,
        users,
        expire: item?.delayPerOffer,
      }));
      setPrice(1000);
      setMsg("");
      setOpen(false);
    } else if (+price < 1000) {
      setMsg("قیمت پیشنهادی شما باید بیشتر از ۱٬۰۰۰ تومان باشد.");
    } else {
      setMsg("قیمت پیشنهادی شما از تازه ترین پیشنهاد پایین تر است.");
    }
  };
  useEffect(() => {
    let users = item?.users;
    let getLastPrice = users.sort((a, b) => a.lastPrice - b.lastPrice);
    getLastPrice = getLastPrice.slice(-1)[0];
    setLastPrice(getLastPrice?.lastPrice);
  }, [item]);
  return (
    <Modal
      title="ورود به مزایده"
      okText="ورود"
      onCancel={() => setOpen(false)}
      // setOpen={setOpen}
      onSubmit={handleOpenAuction}
      open={open}
    >
      <Form style={{ marginTop: "20px" }} onSubmit={(e) => e.preventDefault()}>
        <div className="lastPrice">
          <div className="title">
            آخرین پیشنهاد:{" "}
            <span>{Number(lastPrice).toLocaleString("fa-IR")} تومان</span>
          </div>
        </div>
        <Input
          style={{
            height: "40px",
            borderRadius: "5px",
            fontSize: ".8rem",
          }}
          placeholder="قیمت پیشنهادی را وارد کنید..."
          onChange={handleChangePrice}
          value={price}
        />
        <div className="price">
          {Number(price).toLocaleString("fa-IR")} تومان
        </div>
        <div className="msg">{msg}</div>
      </Form>
    </Modal>
  );
};

const Form = styled.form`
  & .lastPrice {
    font-size: 1rem;
    margin-bottom: 20px;
  }
  & .price {
    margin-top: 5px;
    text-align: left;
  }
  & .msg {
    min-height: 50px;
    font-size: 0.8rem;
    color: #f44336;
    margin-top: 20px;
  }
`;

export default AuctionOpenModal;
