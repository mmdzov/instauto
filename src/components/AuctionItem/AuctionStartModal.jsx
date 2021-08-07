import styled from "styled-components";
import Modal from "../../components/Modal/Modal";
import { InputNumber } from "antd";
import { useState } from "react";

const AuctionStartModal = ({
  open = false,
  setItem = () => {},
  setOpen = () => {},
}) => {
  const [timer, setTimer] = useState({
    minutes: 1,
    seconds: 0,
  });
  const [delayPerOffer, setDelayPerOffer] = useState({
    minutes: 1,
    seconds: 0,
  });
  const handleChangeTimer = (name, value, maxValue) => {
    if (+value < maxValue + 1) {
      setTimer((prev) => ({ ...prev, [name]: value }));
    }
  };
  const handleChangeDelayPerOffer = (name, value, maxValue, minValue) => {
    if (+value < maxValue + 1) {
      setDelayPerOffer((prev) => ({ ...prev, [name]: value }));
    }
  };
  const handleStartAuction = () => {
    setItem((prev) => ({
      ...prev,
      expire: 1000 * (60 * timer?.minutes + timer?.seconds),
      delayPerOffer:
        1000 * (60 * delayPerOffer?.minutes + delayPerOffer?.seconds),
      isStarted: true,
      status: "open",
    }));
  };
  return (
    <Modal
      title="شروع مزایده"
      okText="شروع"
      setOpen={setOpen}
      open={open}
      onSubmit={handleStartAuction}
    >
      <AuctionStart
        style={{ marginTop: "20px" }}
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="row">
          <div className="title">انتخاب زمان</div>
          <div className="">
            <div className="">
              <div className="label">دقیقه</div>
              <InputNumber
                min={0}
                max={10}
                name="minutes"
                value={timer.minutes}
                onChange={(e) => handleChangeTimer("minutes", e, 10)}
                style={{
                  height: "40px",
                  borderRadius: "5px",
                  fontSize: ".8rem",
                }}
                placeholder="دقیقه..."
              />
            </div>
            <div className="">
              <div className="label">ثانیه</div>
              <InputNumber
                min={0}
                max={60}
                name="seconds"
                value={timer.seconds}
                onChange={(e) => handleChangeTimer("seconds", e, 60)}
                style={{
                  height: "40px",
                  borderRadius: "5px",
                  fontSize: ".8rem",
                }}
                placeholder="ثانیه..."
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="title">وقفه در هر پیشنهاد</div>
          <div className="">
            <div className="">
              <div className="label">دقیقه</div>
              <InputNumber
                min={1}
                max={10}
                name="minutes"
                value={delayPerOffer.minutes}
                onChange={(e) => handleChangeDelayPerOffer("minutes", e, 10, 1)}
                style={{
                  height: "40px",
                  borderRadius: "5px",
                  fontSize: ".8rem",
                }}
                placeholder="دقیقه..."
              />
            </div>
            <div className="">
              <div className="label">ثانیه</div>
              <InputNumber
                min={0}
                max={60}
                name="seconds"
                value={delayPerOffer.seconds}
                onChange={(e) => handleChangeDelayPerOffer("seconds", e, 60, 0)}
                style={{
                  height: "40px",
                  borderRadius: "5px",
                  fontSize: ".8rem",
                }}
                placeholder="ثانیه..."
              />
            </div>
          </div>
        </div>
      </AuctionStart>
    </Modal>
  );
};

export default AuctionStartModal;
const AuctionStart = styled.form`
  & .ant-input-number {
    display: flex;
    align-items: center;
    width: 100%;
  }
  & .ant-input-number-rtl .ant-input-number-input {
    direction: rtl !important;
  }
  & .row > div:last-of-type {
    margin-top: 10px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
  }
  & .row:not(:last-of-type) {
    margin-bottom: 35px;
  }
  & .row .title {
    font-size: 1rem;
  }
`;
