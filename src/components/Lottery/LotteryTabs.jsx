import { LotteryTabContainer as Container } from "./Lottery.styled";
import { useState } from "react";
import Switch from "../Switch/Switch";
import { UserOutlined } from "@ant-design/icons";
import { Input, Button } from "antd";

const LotteryTabs = () => {
  const [switchValue, setSwitch] = useState(false);
  const [tabs] = useState([
    { title: "قرعه کشی لایک" },
    { title: "قرعه کشی کامنت" },
  ]);
  const handleChange = (e) => {
    console.log(e);
  };
  const handleSubmit = () => {};
  return (
    <Container>
      <form action="" onSubmit={(e) => e.preventDefault()}>
        <Switch
          switchValue={switchValue}
          setSwitch={setSwitch}
          title2="قرعه کشی لایک"
          title1="قرعه کشی کامنت"
        />
        <Input
          size="large"
          placeholder="نام کاربری..."
          prefix={<UserOutlined />}
        />
        <Input placeholder="پیوند رسانه را وارد کنید..." />
        <Button type="primary" onClick={handleSubmit}>
          قرعه کشی
        </Button>
      </form>
    </Container>
  );
};

export default LotteryTabs;
