import DiscountCodeInfo from "../../components/DiscountCode/DiscountCodeInfo";
import DiscountCodeForm from "../../components/DiscountCode/DiscountCodeForm";
import { useState } from "react";
import styled from "styled-components";
import DiscountList from "../../components/DiscountCode/DiscountList";

const DiscountCode = () => {
  const [successJoin, setSuccessJoin] = useState(false);
  const [code, setCode] = useState("");
  const [list, setList] = useState([
    {
      code: "4FZ2Jsj",
      title: "تخفیف 50% بر روی تمام قیمت ها",
      expire: 1000 * (60 * 60 * 24 * 10),
    },
    {
      code: "5GfseJsj",
      title: "تخفیف خرید الماس تا پایان ماه",
      expire: 1000 * (60 * 10 * 4 - 35) * 30,
    },
  ]);
  return (
    <Container className="container">
      <DiscountCodeInfo joined={successJoin} setJoin={setSuccessJoin} />
      <DiscountCodeForm code={code} setCode={setCode} />
      {!successJoin ? (
        <div className="title">
          در خبررسانی ما عضو شید و از جدید ترین اخبار اینستاتو بهمراه اطلاع
          رسانی کد های تخفیف بهره مند شوید.
        </div>
      ) : null}
      <DiscountList list={list} />
    </Container>
  );
};
const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-top: 20px;
  & .title {
    text-align: right;
    /* height: 75px; */
    direction: rtl;
    padding: 12px 10px;
    line-height: 25px;
    background: #ff5656;
    color: white;
    border-radius: 10px;
    font-size: 0.8rem;
    margin-top: 7px;
  }
`;
export default DiscountCode;
