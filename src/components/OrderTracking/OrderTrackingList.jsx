import { OrderTrackingListContainer } from "./OrderTracking.styled";

const OrderTrackingList = ({ list }) => {
  return (
    <OrderTrackingListContainer className="">
      {list?.map((item) => (
        <div className="item">
          <div className="subItem">
            سفارش : <span>{item?.type}</span>
          </div>
          <div className="subItem">
            کد : <span>{item?.order}</span>
          </div>
          <div className="subItem">
            کاربر : <span>{item?.username}</span>
          </div>
          <div className="subItem">
            تعداد سفارش : <span>{item?.count}</span>
          </div>
          <div className="subItem">
            تعداد انجام شده : <span>{item?.trackCount}</span>
          </div>
          <div className="subItem">
            وضعیت : <span>{item?.status}</span>
          </div>
        </div>
      ))}
    </OrderTrackingListContainer>
  );
};

export default OrderTrackingList;
