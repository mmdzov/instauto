import { ConvertHeaderContainer as Container } from "./Convert.styled";
import { useState } from "react";
import { Alert } from "antd";
import Switch from "../Switch/Switch";
const ConvertHeader = ({ setCount, convertSwitch, setSwitch = () => {} }) => {
  const [alert] = useState({
    title: "توجه!",
    message:
      "به ازای هر تبدیل , به عنوان کارمزد 5 سکه از حساب شما کسر میشود برای رفع تمام محدودیت ها از جمله محدودیت های سقف مجاز برای تبدیل میتوانید حساب خود را ویژه کنید.",
  });
  const handleChangeSwitch = () => {
    setSwitch((prev) => !prev);
    setCount("");
  };
  return (
    <Container className="">
      <Alert
        message={alert?.title}
        description={alert?.message}
        type="info"
        showIcon
      />
      <Switch
        setSwitch={setSwitch}
        switchValue={convertSwitch}
        title1="سکه به الماس"
        title2="الماس به سکه"
        afterChange={() => setCount("")}
      />
    </Container>
  );
};

export default ConvertHeader;
