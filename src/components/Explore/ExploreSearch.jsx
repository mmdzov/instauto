import { ExploreSearchContainer as Container } from "./Explore.styled";
import { SearchOutlined } from "@ant-design/icons";
import { useState } from "react";
const ExploreSearch = () => {
  const [search, setSearch] = useState("");
  const handleChange = (e) => {
    const { value } = e.target;
    setSearch(value);
    const filtered = value?.split("")[0]?.match(/[0-9a-z]/gi);
    if (filtered) {
      e.target.style.direction = "ltr";
    } else {
      e.target.style.direction = "rtl";
    }
  };
  const handleSearch = () => {
    console.log("search :" + search);
  };
  return (
    <Container>
      <form action="" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          value={search}
          onChange={handleChange}
          placeholder="جستجو کنید..."
        />
        <button type="submit" onClick={handleSearch}>
          <SearchOutlined style={{ fontSize: "1.2rem" }} />
        </button>
      </form>
    </Container>
  );
};

export default ExploreSearch;
