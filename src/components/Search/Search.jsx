import styled from "styled-components";
import { Input } from "antd";
import { useState } from "react";
const { Search: SearchInput } = Input;

const Search = ({ onSearch = () => {} }) => {
  const [value, setValue] = useState("");
  const handleSearch = () => {
    onSearch(value);
  };
  return (
    <Container>
      <SearchInput
        placeholder="جستجو کنید..."
        onSearch={handleSearch}
        enterButton
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </Container>
  );
};

const Container = styled.form`
  width: 90%;
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 100px;
  overflow: hidden;
  border: 1px solid #eee;

  & .ant-input {
    height: 40px;
    border: 0px;
  }

  & .ant-btn {
    height: 40px;
    border: 0px;
    margin-left: -4px;
    font-size: 1.4rem;
    width: 50px;
    padding-top: 5px !important;
    padding-left: 4px;
    padding-right: 0;
  }
`;

export default Search;
