import { Fragment } from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { OrderPlanItemContainer as Container } from "../../components/Order/Order.styled";
import Slider from "react-rangeslider";
import "react-rangeslider/lib/index.css";
import { Input, Button } from "antd";
import Gem from "../../assets/images/icons8-jewel-48.png";
import Gold from "../../assets/Icons/CoinRewardIcon.svg";

const OrderPlan = () => {
  const { plan } = useParams();
  const { plans } = useSelector(({ order }) => order);
  const [list, setList] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    const index = plans?.findIndex((item) => item.type === plan);
    if (plan === "custom") {
      setTitle("سفارشی");
      return;
    }
    // if (list.length === 0 && plans[index].list?.length > 0) {
    setList(plans[index]?.list);
    setTitle(plans[index]?.title);
    // }
    return () => setList([]);
  }, [plan]);
  const [customRanges, setCustomRanges] = useState([
    { title: "لایک", name: "like", value: "50" },
    { title: "فالوور", name: "follower", value: "50" },
    { title: "آنفالو", name: "unfollow", value: "50" },
    { title: "بازدید پست", name: "postView", value: "50" },
  ]);
  const handleChange = (name, value) => {
    const range = [...customRanges];
    const index = range.findIndex((item) => item.name === name);
    range[index].value = value;
    setCustomRanges(range);
  };
  return (
    <Container className="container">
      <div className="title">پلن {title}</div>
      {plan !== "custom" ? (
        <div className="list">
          {list?.map((item) => (
            <div className="item">
              <div className="">
                <span>تعداد: </span>
                {Number(item?.count).toLocaleString("fa-IR")}
              </div>
              <div className="price">
                <div
                  className=""
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "flex-end",
                  }}
                >
                  {Number(item?.gold).toLocaleString("fa-IR")}{" "}
                  <span style={{ marginRight: "5px" }}>
                    <img
                      src={Gold}
                      alt=""
                      style={{ width: "20px", height: "20px" }}
                    />
                  </span>
                </div>
                <div
                  className=""
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "flex-end",
                    lineHeight: "13px",
                  }}
                >
                  {Number(item?.gem).toLocaleString("fa-IR")}{" "}
                  <span style={{ marginRight: "5px" }}>
                    <img
                      src={Gem}
                      alt=""
                      style={{
                        width: "20px",
                        height: "20px",
                        transform: "rotate(45deg)",
                      }}
                    />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <form
          onSubmit={(e) => e.preventDefault()}
          style={{ direction: "rtl", padding: "0 15px", marginBottom: "20px" }}
        >
          {customRanges.map((item) => (
            <div className="custom item">
              <div className="title">{item?.title}</div>
              <div className="inputs">
                <Slider
                  min={50}
                  max={5000}
                  value={item?.value}
                  orientation="horizontal"
                  onChange={(e) => handleChange(item?.name, e)}
                />
                <Input
                  placeholder={"تعداد"}
                  type="tel"
                  value={item?.value}
                  onChange={({ target: { value } }) =>
                    handleChange(item?.name, value)
                  }
                />
              </div>
            </div>
          ))}
          <Button type="primary">ثبت سفارش</Button>
        </form>
      )}
    </Container>
  );
};

export default OrderPlan;
