import persianNumber from "../../utils/persianNumber";
import {
  OrderNotFound,
  OrderTrackingListContainer,
} from "./OrderTracking.styled";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import ReportModal from "../ReportModal/ReportModal";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
const OrderTrackingList = ({ list }) => {
  const orderStatus = (status) => {
    if (status === "doing")
      return { color: "#2196f3", title: "درحال انجام..." };
    else if (status === "done")
      return { color: "#4caf50", title: "انجام شده." };
    else if (status === "awaitingApproval")
      return { color: "#9e9e9e", title: "در انتظار تأیید..." };
    else if (status === "canceled") return { color: "red", title: "لغو شده" };
  };
  const history = useHistory();
  const handleGoUserProfile = (username) => {
    history.push(`/profile/${username}`);
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
  if (list?.length === 0)
    return (
      <OrderNotFound className="addOrder">
        هنوز سفارشی ثبت نکردی!
        <div className="addOrderButton" onClick={() => history.push("/order")}>
          ثبت سفارش
        </div>
      </OrderNotFound>
    );
  return (
    <OrderTrackingListContainer className="">
      <ReportModal
        open={openReport}
        title={`گزارش سفارش :`}
        code={` ${orderCode}#`}
        setOpen={setOpenReport}
        callback={onReport}
      />
      <div className="addOrderBox" onClick={() => history.push("/order")}>
        <div className="">ثبت سفارش</div>
        <div className="">
          <ShoppingBasketIcon />
        </div>
      </div>
      {list?.map((item) => (
        <div className="item" key={~~(Math.random() * 9999999)}>
          <div className="row">
            <div className="subItem" style={{ fontSize: "1rem" }}>
              سفارش : <span style={{ fontSize: ".8rem" }}>{item?.type}</span>
            </div>
            <div className="subItem">
              کد :{" "}
              <span
                onClick={() => handleGoReportOrder(item?.order)}
                style={{
                  fontSize: ".8rem",
                  color: "#1ba3f3",
                  cursor: "pointer",
                }}
              >
                {persianNumber(item?.order, false)}#
              </span>
            </div>
          </div>
          <div className="subItem">
            وضعیت :{" "}
            <span
              style={{
                color: orderStatus(item?.status)?.color,
                fontSize: ".8rem",
              }}
            >
              {orderStatus(item?.status)?.title}
            </span>
          </div>
          <div className="subItem">
            کاربر :{" "}
            <span
              onClick={() => handleGoUserProfile(item?.username)}
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                color: "#5a5a5a",
                cursor: "pointer",
              }}
            >
              {item?.username}
            </span>
          </div>
          <div className="subItem">
            تعداد سفارش : <span>{persianNumber(item?.count, false)}</span>
          </div>
          <div className="row">
            <div className="subItem">
              انجام شده : <span>{persianNumber(item?.trackCount, false)}</span>
            </div>
            <div
              className="seeMore"
              onClick={() =>
                history.push(`/order/${item?.username}/${item?.order}`)
              }
            >
              نمایش جزئیات
            </div>
          </div>
        </div>
      ))}
    </OrderTrackingListContainer>
  );
};

export default OrderTrackingList;
