import {
  FacebookShareButton,
  LineShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  TwitterShareButton,
  ViberShareButton,
  WhatsappShareButton,
} from "react-share";
import styled from "styled-components";
import TelegramIcon from "@material-ui/icons/Telegram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import Modal from "../Modal/Modal";
import { CopyOutlined } from "@ant-design/icons";
import { message } from "antd";

const Share = ({ url = "", setOpen = () => {}, ...props }) => {
  const onCopy = () => {
    var dummy = document.createElement("input"),
      text = url;
    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
    setOpen(false);
    message?.success(".با موفقیت کپی شد");
  };
  return (
    <Modal
      {...props}
      onCancel={() => setOpen(false)}
      submitVisible={false}
      title="اشتراک گذاری"
    >
      <Container>
        <button onClick={onCopy} style={{ color: "#7b7b7b" }}>
          <CopyOutlined />
          <span>کپی</span>
        </button>
        <FacebookShareButton url={url} style={{ color: "#1414e4" }}>
          <FacebookIcon />
          <span>فیسبوک</span>
        </FacebookShareButton>
        <TelegramShareButton url={url} style={{ color: "#03a9f4" }}>
          <TelegramIcon />
          <span>تلگرام</span>
        </TelegramShareButton>
        <LinkedinShareButton url={url} style={{ color: "#0e82de" }}>
          <LinkedInIcon />
          <span>لینکدین</span>
        </LinkedinShareButton>
        <TwitterShareButton url={url} style={{ color: "#00bcd4" }}>
          <TwitterIcon />
          <span>توئیتر</span>
        </TwitterShareButton>
        <WhatsappShareButton url={url} style={{ color: "#4caf50" }}>
          <WhatsAppIcon />
          <span>واتساپ</span>
        </WhatsappShareButton>
      </Container>
    </Modal>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-end;
  margin-top: 20px;
  & > button {
    height: 45px;
    align-items: center;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    cursor: pointer;
    width: 100%;
    background: transparent;
    padding: 0 10px !important;
    &:not(:last-of-type) {
      border-bottom: 1px solid #eee !important;
    }
    &:hover {
      background: #eee !important;
    }
  }
`;

export default Share;
