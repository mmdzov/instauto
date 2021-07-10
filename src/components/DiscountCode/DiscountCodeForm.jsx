import { DiscountCodeFormContainer as Container } from "./DiscountCode.styled";
import { Input, Button } from "antd";
import { useState } from "react";

const DiscountCodeForm = ({ code, setCode = () => {} }) => {
  const [loading, setLoading] = useState(false);
  function enterLoading() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 6000);
  }
  const handleChange = (e) => {
    const { value } = e.target;
    const filtered = value.match(/[0-9a-z]/gi);
    setCode(filtered?.join("") || "");
  };
  return (
    <Container>
      <Input
        placeholder="کد تخفیف را وارد کنید..."
        onChange={handleChange}
        type="tel"
        value={code}
      />
      <Button type="primary" loading={loading} onClick={enterLoading}>
        اعمال
      </Button>
    </Container>
  );
};

export default DiscountCodeForm;
