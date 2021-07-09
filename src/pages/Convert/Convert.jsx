import { useState } from "react";
import ConvertForm from "../../components/Convert/ConvertForm";
import ConvertHeader from "../../components/Convert/ConvertHeader";

import ConvertTips from "../../components/Convert/ConvertTips";

const Convert = () => {
  const [convertSwitch, setConvertSwitch] = useState(true);
  const [count, setCount] = useState("");
  return (
    <div className="container">
      <ConvertHeader
        convertSwitch={convertSwitch}
        setSwitch={setConvertSwitch}
        count={count}
        setCount={setCount}
      />
      <ConvertForm
        count={count}
        setCount={setCount}
        convertSwitch={convertSwitch}
        setSwitch={setConvertSwitch}
      />
      <ConvertTips />
    </div>
  );
};

export default Convert;
