import { SettingListContainer as Container } from "./Setting.styled";
import { Switch } from "antd";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { Fragment } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import Question from "../Question/Question";

const SettingList = ({ data }) => {
  const history = useHistory();
  const handleChangeMode = (id, mode = "") => {
    const index = data?.findIndex((item) => item.token === id);
    const item = data[index];
    if (mode && item?.mode) {
      if (mode === "night") item.mode = "day";
      else if (mode === "day") item.mode = "night";
    }
  };
  const handleShowList = (token, h) => {
    const settingList = document.getElementById("settingList");
    const arrowLeft = document.getElementById("arrowLeft");
    const settingListClassName = settingList?.className;
    if (settingListClassName?.includes("active")) {
      arrowLeft.style.transform = "rotate(0deg)";
      settingList?.classList?.remove("active");
      settingList.style.height = "0px";
    } else {
      arrowLeft.style.transform = "rotate(-90deg)";
      settingList.style.height = h + "px";
      settingList?.classList?.add("active");
    }
  };
  const [open, setOpen] = useState(false);
  const handleClickItem = (item) => {
    if (item?.event === "leaveAccount") {
      setOpen(true);
    }
  };
  const handleLeaveAccount = () => {
    history.replace("/login");
  };
  return (
    <Container>
      <Question open={open} setOpen={setOpen} callback={handleLeaveAccount} />
      {data?.map((item) => (
        <Fragment>
          {item?.type === "item" ? (
            <div className="unit" onClick={() => handleClickItem(item)}>
              <div className="right">
                {item?.Icon ? (
                  <div className="icon">
                    <item.Icon />
                  </div>
                ) : null}
                <div
                  className="title"
                  style={{ marginRight: item?.Icon ? "10px" : "5px" }}
                >
                  {item?.item}
                </div>
              </div>
              {item?.switch ? (
                <Switch
                  checkedChildren=""
                  unCheckedChildren=""
                  onChange={() => handleChangeMode(item?.token, item?.mode)}
                  defaultChecked={item?.mode === "day" ? false : true}
                />
              ) : null}
              {item?.label ? <div className="label">{item?.label}</div> : null}
            </div>
          ) : item?.type === "list" ? (
            <div className="">
              <div
                className="unit"
                onClick={() =>
                  handleShowList(item?.token, item?.list.length * 55)
                }
              >
                <div className="right">
                  {item?.Icon ? (
                    <div className="icon">
                      <item.Icon />
                    </div>
                  ) : null}
                  <div className="title">{item?.title}</div>
                </div>
                {item?.label ? (
                  <div className="label">{item?.label}</div>
                ) : null}
                <div className="" id="arrowLeft">
                  <ChevronLeftIcon />
                </div>
              </div>
              <div id="settingList" className="list">
                {item?.list?.map((item) => (
                  <div className="item" style={{ padding: "0 10px" }}>
                    <div className="unit">
                      <div className="right">
                        {item?.Icon ? (
                          <div className="icon">
                            <item.Icon />
                          </div>
                        ) : null}
                        <div className="title">{item?.title}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </Fragment>
      ))}
    </Container>
  );
};

export default SettingList;
