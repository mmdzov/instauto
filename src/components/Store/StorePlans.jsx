import { useState } from "react";
import Slider from "../Slider/Slider";
import { StorePlansContainer as Container } from "./Store.styled";
import { CheckOutlined } from "@ant-design/icons";
const StorePlans = () => {
  const [plans] = useState([
    {
      title: "پلن لایک",
      options: [
        "اختصاصی",
        "بدون محدودیت زمانی",
        "ویژه کسب و کار",
        "پشتیبانی آنلاین",
        "گارانتی یک ماهه",
        "تست قبل از خرید",
      ],
    },
    {
      title: "پلن فالوور",
      options: [
        "اختصاصی",
        "بدون محدودیت زمانی",
        "ویژه کسب و کار",
        "پشتیبانی آنلاین",
        "گارانتی یک ماهه",
        "تست قبل از خرید",
      ],
    },
    {
      title: "پلن بازدید ویدیو",
      options: [
        "اختصاصی",
        "بدون محدودیت زمانی",
        "ویژه کسب و کار",
        "پشتیبانی آنلاین",
        "گارانتی یک ماهه",
        "تست قبل از خرید",
      ],
    },
    {
      title: "پلن بازدید استوری",
      options: [
        "اختصاصی",
        "بدون محدودیت زمانی",
        "ویژه کسب و کار",
        "پشتیبانی آنلاین",
        "گارانتی یک ماهه",
        "تست قبل از خرید",
      ],
    },
    {
      title: "پلن کامنت",
    },
  ]);
  const [options] = useState([
    "گارانتی سه ماهه بابت هر خرید",
    "بدون نیاز به رمز اینستاگرام",
    "بدون محدودیت زمانی",
    "سفارش و تحویل آنی",
    "تست قبل از خرید",
    "ویژه کسب و کار",
    "پشتیبانی آنلاین",
    "اختصاصی",
  ]);
  return (
    <Container>
      <div className="title">پلن ها</div>
      <div className="description">پلن اختصاصی خودتو بساز.</div>
      <Slider>
        {plans.map((item) => (
          <div className="item">
            <div className="">
              <div className="label" style={{ fontSize: ".8rem" }}>
                {item?.title}
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <div className="optionContainer">
        {/* <div className="optionTitle">مزایای پلن ها</div> */}
        <div className="options">
          {options?.map((option) => (
            <div className="option">
              <span>{option}</span>
              <CheckOutlined />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default StorePlans;
