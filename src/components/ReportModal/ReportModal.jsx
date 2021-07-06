import { Modal } from "antd";
import { Input } from "antd";
import { useState } from "react";
const { TextArea } = Input;

const ReportModal = ({
  title = "",
  code = "",
  open = false,
  callback = () => {},
  setOpen = () => {},
}) => {
  const [titleReport, setTitleReport] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setOpen(false);
    callback("submit");
  };

  const handleClose = () => {
    setOpen(false);
    callback("close");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "description") setDescription(value);
    else if (name === "title") setTitleReport(value);
  };

  return (
    <div className="">
      <Modal
        // title={title}
        centered
        visible={open}
        onOk={handleSubmit}
        okText="تأیید"
        cancelText="لغو"
        onCancel={handleClose}
        style={{ maxWidth: 300,minWidth: 200, direction: "rtl" }}
      >
        <div className="" style={{ marginTop: "-8px", fontSize: "1rem" }}>
          {title}{" "}
          {code ? (
            <span style={{ color: "#3481ca", cursor: "pointer" }}>{code}</span>
          ) : null}{" "}
        </div>
        <form
          onSubmit={(e) => e.preventDefault()}
          style={{ marginTop: "15px" }}
        >
          <Input
            placeholder="موضوع"
            allowClear
            onChange={handleChange}
            name="title"
            value={titleReport}
          />
          <br />
          <br />
          <TextArea
            placeholder="توضیح"
            allowClear
            onChange={handleChange}
            name="description"
            value={description}
            autoSize={{ minRows: 3, maxRows: 6 }}
          />
        </form>
      </Modal>
    </div>
  );
};

export default ReportModal;
