import { useState, Fragment } from "react";
import Modal from "../../components/Modal/Modal";
import { Input } from "antd";
import { Container } from "./Report.styled";
const { TextArea } = Input;
const Report = ({ onSubmit = () => {}, ...props }) => {
  const [state, setState] = useState([
    { title: "هرزنامه", token: "3sreret4rdfgx" },
    { title: "کلاهبرداری", token: "3sreret4rdfgx", type: "input" },
    { title: "ایرادات و مشکلات", token: "3sreret4rdfgx", type: "input" },
  ]);
  const [selected, setSelected] = useState(state[0]);
  const handleSelect = (e, item) => {
    const items = document.querySelectorAll(".reportTitleItem");
    items.forEach((item) => {
      item.style.background = "white";
    });
    e.target.style.background = "whitesmoke";
    setSelected(item);
  };
  const handleChange = (e) => {
    const { value, name } = e.target;
    setSelected((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = () => {
    onSubmit(selected);
  };
  return (
    <Modal {...props} onSubmit={handleSubmit}>
      <Container>
        <div className="reportTitles">
          {state.map((item) => (
            <div
              className="reportTitleItem"
              onClick={(e) => handleSelect(e, item)}
            >
              {item.title}
            </div>
          ))}
        </div>
        <form action="">
          {selected.type === "input" ? (
            <Fragment>
              <Input
                placeholder="عنوان..."
                name="title"
                value={selected["title"]?.value}
                onChange={handleChange}
              />
              <TextArea
                name="text"
                placeholder="توضیحات..."
                value={selected["text"]?.value}
                onChange={handleChange}
              />
            </Fragment>
          ) : null}
        </form>
      </Container>
    </Modal>
  );
};

export default Report;
