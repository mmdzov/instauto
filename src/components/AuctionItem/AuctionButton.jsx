import { FireFilled, PlayCircleFilled, StopFilled } from "@ant-design/icons";
import styled from "styled-components";

const AuctionButton = ({
  item = {},
  onOpen = () => {},
  onStart = () => {},
  onEnd = () => {},
}) => {
  return (
    <OpenAuction>
      {item?.isAdmin ? (
        item?.isStarted ? (
          <div className="finish" onClick={() => onEnd(true)}>
            <span>اتمام فوری مزایده</span>
            <StopFilled />
          </div>
        ) : item?.isFinish ? (
          <div className="closed">
            <div>مزایده شما اتمام رسید.</div>
          </div>
        ) : (
          <div className="start" onClick={() => onStart(true)}>
            <span>شروع مزایده</span>
            <PlayCircleFilled />
          </div>
        )
      ) : item?.isFinish ? (
        <div className="closed">
          <div>مزایده به اتمام رسید.</div>
        </div>
      ) : (
        <div className="open" onClick={() => onOpen(true)}>
          <span>ورود به مزایده</span>
          <FireFilled />
        </div>
      )}
    </OpenAuction>
  );
};

const OpenAuction = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row-reverse;
  bottom: 10px;
  width: 100%;
  left: 0;
  & > div {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    margin: 0 auto;
    height: inherit;
    align-items: center;
    padding: 0 10px;
    margin-right: 20px;
    width: 100%;
    margin-left: 5px;
    height: 45px;
    color: white;
    border-radius: 100px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &.open {
      background: #2196f3;
      &:hover {
        background: #3f51b5;
      }
    }
    &.start {
      background: #4caf50;
      &:hover {
        background: #2d9831;
      }
    }
    &.finish {
      background: #f44336;
      &:hover {
        background: #e22c1e;
      }
    }
    &.closed {
      justify-content: center !important;
      direction: rtl !important;
      background: #4e4e4e;
      cursor: default;
      /* &:hover {
        background: black;
      } */
    }
    padding: 0 16px;
    & > span:last-of-type {
      font-size: 1.2rem;
    }
  }
`;
export default AuctionButton;
