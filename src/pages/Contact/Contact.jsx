import { useState } from "react";
import styled from "styled-components";
import Avatar from "../../assets/images/avatar.jpg";
import { Input } from "antd";
import { SendOutlined } from "@ant-design/icons";
import Backdrop from "../../components/Backdrop/Backdrop";
const { TextArea } = Input;
import Modal from "../../components/Modal/Modal";
import ModalAlert from "../../components/ModalAlert/ModalAlert";
import { useHistory } from "react-router";
import { useEffect } from "react";
const Contact = () => {
  const [messages, setMessages] = useState([
    { who: "support", msg: "سلام خوبین؟" },
    { who: "you", msg: "سلام ممنون" },
    { who: "you", msg: "چرا نمیتونم سکه دریافت کنم" },
    { who: "support", msg: "نمیدونم.... یاعلی." },
  ]);
  const [msg, setMsg] = useState("");
  const handleChangeMsg = (e) => {
    const { value } = e.target;
    setMsg(value);
  };
  const [status, setStatus] = useState("connecting");
  const handleSendMsg = () => {
    const msgs = [...messages];
    msgs.push({ who: "you", msg });
    setMessages(msgs);
    setMsg("");
  };
  useEffect(() => {
    let timeout = setTimeout(() => {
      setStatus("connected");
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);
  const history = useHistory();
  return (
    <Container className="container">
      {status ? (
        <ModalAlert
          open={status === "connecting"}
          alert="درحال پیداکردن پشتیبان"
          onCancel={() => history.goBack()}
        />
      ) : null}

      <div className="header">
        <div className="" style={{ position: "relative" }}>
          <img src={Avatar} alt="" />
          <div className="status"></div>
        </div>
        <div className="">پشتیبانی 778</div>
      </div>
      <div className="messageBox">
        {messages?.length > 0 ? (
          <div className="messages" style={{ padding: "0px 10px" }}>
            {messages?.map((item) => (
              <div className={`item ${item?.who}`}>
                <div className={`msg`}>{item?.msg}</div>
              </div>
            ))}
          </div>
        ) : (
          <div className="messageNotfound">
            پیامی نیست! آغاز کننده این گفتگو شما باشید.
          </div>
        )}
        <form action="">
          <TextArea
            placeholder="بنویسید..."
            autoSize={{ maxRows: 4, minRows: 1 }}
            onChange={handleChangeMsg}
            value={msg}
          />
          <SendOutlined onClick={handleSendMsg} />
        </form>
      </div>
    </Container>
  );
};

const Container = styled.div`
  & .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 10px;
    border-bottom: 1px solid #eeee;
    font-size: 0.9rem;
    color: #5d5d5d;
    position: fixed;
    top: 50px;
    width: 100%;
    background: white;
    z-index: 9;
    /* background: #9c27b0; */
    /* color: white; */
    & img {
      width: 50px;
      height: 50px;
      border-radius: 100px;
    }
    & .status {
      position: absolute;
      top: 0;
      right: 0;
      border: 2px solid white;
      width: 15px;
      height: 15px;
      background: #4caf50;
      border-radius: 100px;
    }
  }
  & .messages {
    padding: 0px 10px;
    /* height: 100%; */
    /* position: absolute; */
    padding-bottom: 10px;
    margin-bottom: 73px;
    overflow: auto;
    & .msg {
      margin: 10px 0px;
      padding: 5px 15px;
      max-width: 240px;
      text-align: right;
      width: fit-content;
      font-size: 0.8rem;
      word-break: break-word;
    }
    & .item {
      &.support {
        direction: ltr;
      }
      &.you {
        direction: rtl;
      }
      &.support .msg {
        border-radius: 0px 15px 15px 15px;
        background: #f1f1f1;
      }
      &.you .msg {
        border-radius: 15px 0px 15px 15px;
        background: #2196f3;
        color: white;
      }
    }
  }
  & .messageBox {
    display: flex;
    position: relative;
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 60px;
    position: absolute;
    top: 50px;
    padding-bottom: 37px;
    & .messageNotfound {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 55px;
      direction: rtl;
      font-size: 0.8rem;
      color: #bfbfbf;
    }
  }
  & form {
    display: grid;
    grid-template-columns: 1fr auto;
    /* position: fixed; */
    position: sticky;
    bottom: 0;
    /* bottom: -34px; */
    width: 100%;
    min-height: 50px;
    align-items: flex-end;
    padding: 10px 10px;
    border-top: 1px solid #ccc;
    background: white;
    & > span {
      width: 45px;
      height: 30px;
      align-items: center;
      display: flex;
      justify-content: center;
      font-size: 1.3rem;
      padding-left: 10px;
      color: #3f51b5;
    }
    & textarea {
      direction: rtl;
    }
  }
`;

export default Contact;
