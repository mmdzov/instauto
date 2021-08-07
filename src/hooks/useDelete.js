import { Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { useEffect } from "react";
const { confirm } = Modal;

const useDelete = (
  open = false,
  setOpen = () => {},
  onSuccess = () => {},
  { title = "", text = "" }
) => {
  const handleDeleteSure = () => {
    confirm({
      title,
      icon: <ExclamationCircleOutlined />,
      content: text,
      okText: "بله",
      okType: "danger",
      cancelText: "خیر",
      onOk() {
        onSuccess();
      },
      onCancel() {
        setOpen(false);
      },
    });
  };
  useEffect(() => {
    if (open) {
      handleDeleteSure();
    }
  }, [open]);
};

export default useDelete;
