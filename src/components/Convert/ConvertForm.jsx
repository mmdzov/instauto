import { ConvertFormContainer as Container } from "./Convert.styled.js";
import { Input } from "antd";
import { Button } from "antd";

const ConvertForm = ({
  count,
  setCount,
  convertSwitch,
  setSwitch = () => {},
}) => {
  const handleChange = (e) => {
    const { value } = e.target;
    const filtered = value.match(/[0-9]/g);
    setCount(filtered?.join("") || "");
  };
  return (
    <Container onSubmit={(e) => e.preventDefault()}>
      <div className="box">
        <Input
          type="tel"
          value={count}
          onChange={handleChange}
          placeholder={`تعداد ${!convertSwitch ? "سکه" : "الماس"} را وارد کنید`}
        />
        <Button type="primary">تبدیل</Button>
      </div>
      <div className="tip">
        {convertSwitch && +count < 2 && +count > 0
          ? "تعداد الماس انتخاب شده کمتر از 2 است"
          : !convertSwitch && +count < 300 && +count > 0
          ? "تعداد سکه انتخاب شده کمتر از 300 است"
          : convertSwitch && +count > 10
          ? "تعداد الماس انتخاب شده بیش از حد مجاز است"
          : !convertSwitch && +count > 1200
          ? "تعداد سکه انتخاب شده بیش از حد مجاز است"
          : null}
      </div>
    </Container>
  );
};

export default ConvertForm;
