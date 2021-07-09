import { Alert } from "antd";
import TextLoop from "react-text-loop";

const ConvertTips = () => {
  return (
    <Alert
      style={{
        width: "90%",
        margin: "0 auto",
        height: "auto",
      }}
      banner
      message={
        <TextLoop mask noWrap={false}>
          <div className="">
            سقف مجاز برای حساب رایگان بابت هر تبدیل تا 1200 سکه معادل 4 الماس
            میباشد
          </div>
          <div className="">
            حداقل تعداد برای تبدیل سکه به الماس 300 سکه است.
          </div>
          <div className="">
            حداقل تعداد برای تبدیل الماس به سکه 5 الماس است.
          </div>
        </TextLoop>
      }
    />
  );
};

export default ConvertTips;
