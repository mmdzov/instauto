import { LoginFormContainer as Container } from "./Login.styled";
import { Input, Space } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLoginUser } from "../../store/actions/userAction";

const LoginForm = () => {
  const [fields, setFields] = useState({ username: "", password: "" });
  const history = useHistory();
  const handleChangeFields = (e) => {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
  };
  const dispatch = useDispatch();
  const handleSubmit = async () => {
    await dispatch(setLoginUser(fields.username, fields.password, history));
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
