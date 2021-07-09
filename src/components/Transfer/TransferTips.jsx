import { Alert } from "antd";
import TextLoop from "react-text-loop";

const TransferTips = () => {
  return (
    <div className="" style={{ height: 100, paddingTop: "15px" }}>
      <Alert
        style={{
          width: "90%",
          margin: "0 auto",
          height: "auto",
        }}
        banner
        message={
          <TextLoop mask noWrap={false}>
            <div className="">کارمزد انتقال سکه 5% کسر سکه از شما می باشد</div>
            <div className="">
              سقف مجاز برای حساب رایگان بابت هر انتقال تا 1200 سکه می باشد
            </div>
            <div className="">حداقل تعداد برای انتقال سکه 300 عدد است.</div>
            <div className="">
              حسابتو ویژه کن و تمام محدودیت هارو بشکن. به همراه جوایز و
              پیشنهادات ویژه
            </div>
          </TextLoop>
        }
      />
    </div>
  );
};

export default TransferTips;
