import { LoginFormContainer as Container } from "./Login.styled";
import { Input, Space } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const LoginForm = () => {
  const [fields, setFields] = useState({ username: "", password: "" });
  const handleChangeFields = (e) => {
    const { name, value } = e.target;
    setFields({ [name]: value });
  };
  const history = useHistory();
  const handleSubmit = () => {
    history.replace("/");
  };
  return (
    <Container className="" onSubmit={(e) => e.preventDefault()}>
      <Input
        placeholder="نام کاربری"
        name="username"
        type="text"
        autoComplete="off"
        onChange={handleChangeFields}
        value={fields?.username}
      />
      <Space direction="vertical">
        <Input.Password
          onChange={handleChangeFields}
          placeholder="رمز عبور"
          value={fields?.password}
          name="password"
          autoComplete="off"
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
        />
      </Space>
      <button className="" onClick={handleSubmit}>
        ورود
      </button>
    </Container>
  );
};

export default LoginForm;
