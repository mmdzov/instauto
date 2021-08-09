import { useState } from "react";
import { StoreAccountsContainer as Container } from "./Store.styled";

const StoreAccounts = () => {
  const [accounts] = useState([
    { title: "شارژ کیف پول", token: "errdgdgdf4tsd" },
    { title: "اشتراک ویژه یک ماهه", token: "erfsdf34tsd" },
    { title: "اشتراک ویژه شش ماهه", token: "erdfsvxcf34tsd" },
    { title: "اشتراک ویژه یک ساله", token: "erasdas34tsd" },
  ]);
  return (
    <Container>
      <div className="title">ویژه</div>
      <div className="description">
        محدودیت هارو بشکن و سطح امتیازتو ارتقاع بده.
      </div>
      {accounts?.map((item, index) => (
        <div
          className="item"
          style={{
            background:
              index === 0
                ? "#4caf50"
                : index === 1
                ? "#bf4e4e"
                : index === 2
                ? "#3f51b5"
                : index === 3
                ? "#673ab7"
                : "black",
          }}
        >
          {item?.title}
        </div>
      ))}
    </Container>
  );
};

export default StoreAccounts;
