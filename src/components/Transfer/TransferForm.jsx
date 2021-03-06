import { TransferFormContainer as Container } from "./Transfer.styled";
import { Button, Input } from "antd";
import { useState } from "react";

const TransferForm = () => {
  const [val, setValue] = useState("");
  const [uid, setUid] = useState("");
  const handleChange = (e) => {
    const { value, name } = e.target;
    const filtered = value.match(/[0-9]/g);
    setValue(filtered?.join("") || "");
  };
  const handleChangeUid = (e) => {
    const { value, name } = e.target;
    const filtered = value.match(/[0-9]/g);
    const uidFiltered = filtered?.join("") || "";
    if (name === "userId" && uidFiltered && value.length <= 9) {
      setUid(value);
    }
  };
  const handleTransfer = () => {
    console.log(uid, val);
  };
  return (
    <Container onSubmit={(e) => e.preventDefault()}>
      <Input
        type="tel"
        value={uid}
        name="userId"
        onChange={handleChangeUid}
        placeholder={`آیدی عددی شخص را وارد کنید`}
      />
      <div className="box">
        <Input
          type="tel"
          value={val}
          onChange={handleChange}
          placeholder={`تعداد سکه را وارد کنید`}
        />
        <Button type="primary" onClick={handleTransfer}>
          انتقال
        </Button>
      </div>
      <div className="tip">
        {+val < 300 && +val > 0
          ? "تعداد سکه انتخاب شده کمتر از 300 است"
          : +val > 1200
          ? "تعداد سکه انتخاب شده بیشتر از 1200 است"
          : null}
      </div>
    </Container>
  );
};

export default TransferForm;
