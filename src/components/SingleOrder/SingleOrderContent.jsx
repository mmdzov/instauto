import { useState } from "react";
import { useHistory } from "react-router-dom";
import persianNumber from "../../utils/persianNumber";
import Question from "../Question/Question";
import ReportModal from "../ReportModal/ReportModal";
import { SingleOrderContentContainer as Container } from "./SingleOrder.styled";

const SingleOrderContent = ({ data }) => {
  const history = useHistory();
  const orderStatus = (status) => {
    if (status === "doing")
      return { color: "#2196f3", title: "درحال انجام..." };
    else if (status === "done")
      return { color: "#4caf50", title: "انجام شده." };
    else if (status === "awaitingApproval")
      return { color: "#9e9e9e", title: "در انتظار تأیید..." };
    else if (status === "canceled") return { color: "red", title: "لغو شده" };
  };
  const [orderCode, setOrderCode] = useState(0);
  const [openReport, setOpenReport] = useState(false);
  const onReport = (mode) => {
    if (mode === "close") return setOrderCode(0);
  };
  const handleGoReportOrder = (code) => {
    setOrderCode(code);
    setOpenReport(true);
  };
  const [openQuestion, setOpenQuestion] = useState(false);
  const handleCancelOrder = (mode) => {
    if (mode === "submit") {
      console.log("submit cancel order");
    }
  };
  return (
    <Container>
      <ReportModal
        open={openReport}
        title={`گزارش سفارش :`}
        code={` ${orderCode}#`}
        setOpen={setOpenReport}
        callback={onReport}
      />
      <Question
        open={openQuestion}
        setOpen={setOpenQuestion}
        callback={handleCancelOrder}
      />
      <div className="row">
        <div className="item">
          <span style={{ fontSize: "1rem" }}>سفارش : </span>{" "}
          <span>{data?.type}</span>
        </div>
        <div className="item">
          <span style={{ fontSize: "1rem" }}>کد پیگیری : </span>
          <span
            onClick={() => handleGoReportOrder(data?.order)}
            style={{ color: "#1ba3f3", cursor: "pointer" }}
          >
            {persianNumber(data?.order, false)}#
          </span>
        </div>
      </div>
      <div className="item">
        <span>وضعیت : </span>
        <span style={{ color: orderStatus(data?.status)?.color }}>
          {orderStatus(data?.status)?.title}
        </span>
      </div>
      <div className="item">
        <span>تعداد درخواست : </span>
        <span className="countNumber">{persianNumber(data?.count, false)}</span>
      </div>
      <div className="item">
        <span>انجام شده : </span>
        <span className="countNumber">
          {persianNumber(data?.trackCount, false)}
        </span>
      </div>
      <div className="item" style={{ marginTop: "10px" }}>
        <div
          className="orderBottom"
          style={{ background: "#ff4c4c" }}
          onClick={() => setOpenQuestion(true)}
        >
          لغو سفارش
        </div>
        <div
          className="orderBottom"
          style={{ background: "#3ea5f3" }}
          onClick={() => history.push("/order/plans")}
        >
          سفارش جدید
        </div>
      </div>
    </Container>
  );
};

export default SingleOrderContent;
