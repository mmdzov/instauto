import {
  LotteryAddFormContainer,
  LotteryCreateContainer as Container,
} from "./Lottery.styled";
import { useState } from "react";
import {
  UserOutlined,
  CheckCircleFilled,
  EditFilled,
  DeleteFilled,
  PlusCircleFilled,
  PlusCircleOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";
import { Input, Button, Switch } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import useLotteryCreateData from "../../hooks/useLotteryCreateData";
import LinesEllipsis from "react-lines-ellipsis";
import Modal from "../Modal/Modal";
import { useEffect } from "react";

const { TextArea } = Input;

const LotteryCreate = () => {
  const [list, setList] = useLotteryCreateData();
  const [form, setForm] = useState({
    username: "",
    mediaUrl: "",
    title: "",
    picturePreview: "",
    picture: "",
    description: "",
    basedOnCount: "",
    winnersCount: "",
    msgToWinners: "",
  });
  const [switchs, setSwitchs] = useState([]);
  const [initForm, setInitForm] = useState({});
  const initSwitchs = () => {
    const switchIns = [...switchs];
    list
      .map((item) => {
        if (item.hasSwitch) {
          switchIns.push({
            [item?.label + "#" + item.checked]: item?.checked,
          });
        }
        for (let i in item) {
          if (item[i] instanceof Array) {
            const subItem = item[i];
            subItem.map((sbItem) => {
              if (sbItem.hasSwitch) {
                if (sbItem?.mode) {
                  switchIns.push({
                    [item.label +
                    "#" +
                    sbItem?.mode.charAt(0).toUpperCase() +
                    sbItem?.mode.slice(1) +
                    "#" +
                    sbItem.checked]: sbItem.checked,
                  });
                } else {
                  switchIns.push({
                    [sbItem.label + "#" + sbItem.checked]: sbItem.checked,
                  });
                }
              } else if (Object.keys(sbItem).includes("text")) {
                switchIns.push({
                  [item.label]: {
                    list: [...item?.list],
                    token: item.token,
                  },
                });
              } else if (sbItem?.mediaList instanceof Array) {
                switchIns.push({
                  [sbItem.label]: {
                    list: [...sbItem?.mediaList],
                  },
                });
              }
            });
          }
        }
      })
      .filter((item) => item);
    let nv = {};
    for (let i = 0; i < switchIns.length; i++) {
      const parse = Object.keys(switchIns[i])[0].split("#");
      const values = Object.values(switchIns[i])[0];
      let hasBool = (index) =>
        parse[index] === "true" || parse[index] === "false";
      if (hasBool(1)) {
        nv[parse[0]] = eval(parse[1]);
      } else if (values?.list instanceof Array) {
        nv[parse[0]] = {
          list: [...values?.list],
          // token: values?.token,
        };
      } else {
        nv[parse[0]] = {
          ...nv?.[parse[0]],
          [parse[1].charAt(0).toLowerCase() + parse[1].slice(1)]: hasBool(2)
            ? eval(parse[2])
            : parse[2],
        };
      }
    }
    setSwitchs(switchIns);
    setInitForm(nv);
    setForm((prev) => ({ ...prev, ...nv }));
  };
  const handleSubmit = () => {
    console.log(form);
  };
  const [mount, setMount] = useState(false);

  useEffect(() => {
    if (!mount) {
      initSwitchs();
      console.log(form);
    }
    setMount(true);
  }, [list]);

  const handleChangeSwitchs = (
    mainToken,
    switchToken,
    checked,
    typeChecked
  ) => {
    const items = [...list];
    const frm = { ...form };
    const index = items.findIndex((item) => item.token === mainToken);
    const itemLabel = items[index].label;
    if (switchToken) {
      if (items[index]?.list?.length > 0) {
        items[index]?.list?.map((item) => {
          if (item.token === switchToken) {
            item.checked = true;
            frm[itemLabel][typeChecked] = true;
            for (let i in frm[itemLabel]) {
              if (i !== typeChecked) {
                frm[itemLabel][i] = false;
              }
            }
            console.log(frm, itemLabel, typeChecked);
            setForm(frm);
          } else {
            item.checked = false;
          }
        });
      } else {
        items[index]?.collapseList?.map((item) => {
          if (item.token === switchToken) {
            item.checked = !checked;
            frm[item.label] = !checked;
            setForm(frm);
          }
        });
      }
    } else {
      items[index].checked = !checked;
      // console.log(frm[itemLabel], itemLabel, typeChecked, frm);
      frm[itemLabel] = !checked;
      setForm(frm);
    }
    setList(items);
  };
  const handleChange = (e) => {
    const { value, name } = e.target;
    const elem = document.getElementsByName(name)[0];
    let parse;
    if (e.target.type === "tel") {
      parse = value.match(/^[0-9]{0,}/gi);
    } else {
      parse = value.match(/[0-9a-z]/gi);
    }
    if (
      value.length > 0 &&
      parse &&
      parse?.join("") &&
      name !== "msgToWinners"
    ) {
      elem.classList.add("ltr");
    } else {
      elem.classList.remove("ltr");
    }
    if (e.target.type === "tel") {
      setForm((prev) => ({ ...prev, [name]: parse?.join("") || "" }));
      return;
    }
    if (name === "title" || name === "description" || name === "msgToWinners") {
      setForm((prev) => ({ ...prev, [name]: value }));
    } else {
      console.log(name);
      setForm((prev) => ({ ...prev, [name]: parse?.join("") || "" }));
    }
  };
  const handleClickTag = (item) => {
    const parse = form.msgToWinners.split("");
    parse.push(` ~${item.title}~ `);
    const joined = parse.join("");
    setForm((prev) => ({ ...prev, msgToWinners: joined }));
    const msgToWinners = document.getElementsByClassName("msgToWinners")[0];
    msgToWinners?.focus();
  };
  const handleClickItemList = (itemList, token, item) => {
    const lst = [...list];
    const index = lst.findIndex((item) => item.token === token);
    if (item?.select) {
      lst[index].list?.map((item) => {
        if (item.token === itemList.token) {
          item.enabled = true;
        } else {
          item.enabled = false;
        }
      });
      setList(lst);
    }
  };
  const [condAddOpen, setCondAddOpen] = useState(false);
  const [addCondForm, setAddCondForm] = useState({
    title: "",
    description: "",
    token: "",
  });
  const handleCondEdit = (condItem, parent, mode = "") => {
    setCondAddOpen(true);
    const condData = {
      title: condItem?.title,
      description: condItem?.text,
      disabled: condItem.disabled,
      token: condItem.token,
    };
    setAddCondForm(condData);
    setCondToken(parent.token);
  };
  const handleCondDelete = (condItem, parent) => {
    const lst = [...list];
    let frm = { ...form };
    const parentIndex = lst.findIndex((item) => item.token === parent.token);
    const item = lst[parentIndex].list.filter(
      (item) => item.token !== condItem.token
    );
    lst[parentIndex].list = item;
    const filtered = frm?.[lst[parentIndex]?.label]?.list?.filter(
      (item) => item.token !== condItem.token
    );
    frm[lst[parentIndex]?.label].list = filtered;
    setList(lst);
    setForm(frm);
  };
  const [condToken, setCondToken] = useState("");
  const handleCondAdd = (condItem, mode = "") => {
    const lst = [...list];
    const parentIndex = lst.findIndex((item) => item.token === condToken);
    const index = lst[parentIndex]?.list?.findIndex(
      (item) => item.token === addCondForm?.token
    );
    const listInForm = form?.[lst[parentIndex]?.label]?.list || [];
    if (addCondForm?.token) {
      const condData = {
        title: addCondForm?.title,
        text: addCondForm?.description,
        disabled: addCondForm?.token,
        token: addCondForm?.token,
      };
      lst[parentIndex].list[index] = condData;
      setList(lst);
      const condFormIndex = listInForm.findIndex(
        (item) => item.token === addCondForm.token
      );
      listInForm[condFormIndex] = condData;
      setForm((prev) => ({
        ...prev,
        [lst[parentIndex].label]: {
          ...form?.[lst[parentIndex]?.label],
          list: listInForm,
        },
      }));
      setAddCondForm({ title: "", description: "", token: "" });
      return;
    }
    if (mode === "") {
      setCondAddOpen(true);
      setCondToken(condItem?.token);
      return;
    } else if (mode === "add") {
      const index = lst?.findIndex((item) => item.token === condToken);
      const condData = {
        title: addCondForm?.title,
        text: addCondForm?.description,
        disabled: false,
        token: ~~(Math.random() * 999999),
      };
      lst[index]?.list?.push(condData);
      setList(lst);
      listInForm.push(condData);
      setForm((prev) => ({
        ...prev,
        [lst[parentIndex].label]: {
          ...form?.[lst[parentIndex]?.label],
          list: listInForm,
        },
      }));
      setAddCondForm({ title: "", description: "" });
    }
  };
  const handleCancelCond = () => {
    setAddCondForm({ title: "", description: "", token: "" });
  };
  const handleChangeCond = (e) => {
    const { value, name } = e.target;
    setAddCondForm((prev) => ({ ...prev, [name]: value }));
  };
  const handleDeleteMediaUrl = (mainToken, listToken, token) => {
    const lst = [...list];
    const mainTokenIndex = lst.findIndex((item) => item.token === mainToken);
    const collapseToken = lst[mainTokenIndex]?.collapseList?.findIndex(
      (item) => item.token === listToken
    );
    const filtered = lst[mainTokenIndex]?.collapseList[
      collapseToken
    ]?.mediaList?.filter((item) => item.token !== token);
    lst[mainTokenIndex].collapseList[collapseToken].mediaList = filtered;
    setList(lst);
  };
  const handleAddMediaUrl = (mainToken, listToken, name, value) => {
    const lst = [...list];
    const frm = { ...form };
    const mainTokenIndex = lst.findIndex((item) => item.token === mainToken);
    const collapseToken = lst[mainTokenIndex]?.collapseList?.findIndex(
      (item) => item.token === listToken
    );
    const newData = {
      url: value,
      token: ~~(Math.random() * 99999),
    };
    lst[mainTokenIndex].collapseList[collapseToken].mediaList.push(newData);
    frm.selectMultipleMedia?.list?.push(newData);
    setList(lst);
    setForm(frm);
    const elem = document.getElementsByName(name)[0];
    elem?.classList?.remove("ltr");
    setForm((prev) => ({ ...prev, [name]: "" }));
  };
  const handleSelectProfile = (e) => {
    const { files } = e.target;
    console.log(files[0]);
    if (files[0]) {
      const binaryData = [];
      binaryData.push(files[0]);
      setForm((prev) => ({
        ...prev,
        picturePreview:
          window.URL.createObjectURL(
            new Blob(binaryData, { type: "image/jpeg" })
          ) ?? "",
        picture: files[0],
      }));
    }
  };
  return (
    <Container hasPreviewImage={form?.picturePreview ? false : true}>
      <Modal
        onSubmit={() => handleCondAdd(undefined, "add")}
        open={condAddOpen}
        setOpen={setCondAddOpen}
        onCancel={handleCancelCond}
        title="افزودن شرط"
      >
        <LotteryAddFormContainer
          action=""
          className="addModalForm"
          style={{ marginTop: "25px" }}
        >
          <Input
            placeholder="عنوان شرط..."
            allowClear
            name="title"
            maxLength={60}
            value={addCondForm?.title}
            onChange={handleChangeCond}
          />
          <br />
          <TextArea
            placeholder="توضیحات شرط..."
            allowClear
            name="description"
            maxLength={120}
            value={addCondForm?.description}
            onChange={handleChangeCond}
          />
        </LotteryAddFormContainer>
      </Modal>
      <form action="" onSubmit={(e) => e.preventDefault()}>
        <div className="profileImage">
          <div className="selectImg">
            {form?.picturePreview ? (
              <img
                src={form?.picturePreview}
                style={{
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  background: "white",
                }}
                alt=""
              />
            ) : null}
            <input
              type="file"
              name="file"
              id=""
              onChange={handleSelectProfile}
            />
            <div className="icon">
              <PlusOutlined />
            </div>
            <div className="addImgTitle">افزودن</div>
          </div>
        </div>
        <Input
          size="large"
          placeholder="نام کاربری..."
          prefix={<UserOutlined />}
          onChange={handleChange}
          name={"username"}
          value={form?.username}
        />
        <Input
          placeholder="پیوند رسانه را وارد کنید..."
          onChange={handleChange}
          name="mediaUrl"
          value={form?.mediaUrl}
        />
        <Input
          placeholder="عنوان..."
          value={form?.title}
          name="title"
          onChange={handleChange}
        />
        <TextArea
          maxLength={120}
          placeholder="توضیحات..."
          value={form?.description}
          onChange={handleChange}
          className="description"
          name="description"
        />

        {list?.map((item) => (
          <div className="category" key={item?.token}>
            <div className="header">
              <div className="title">{item?.title}</div>
              {item?.hasSwitch ? (
                <Switch
                  onChange={() =>
                    handleChangeSwitchs(
                      item?.token,
                      "",
                      item?.checked,
                      item?.mode
                    )
                  }
                  checked={item?.checked}
                />
              ) : null}
              {item?.type === "inputNumber" ? (
                <Input
                  type="tel"
                  placeholder={item?.placeholder}
                  value={form?.[item?.name]}
                  name={item?.name}
                  onChange={handleChange}
                />
              ) : null}
              {item?.type === "conditionList" ? (
                <div className="icon" onClick={() => handleCondAdd(item, "")}>
                  <PlusCircleFilled />
                </div>
              ) : null}
            </div>
            <div className="description">
              {/* <LinesEllipsis
                text={item?.description}
                maxLine="2"
                ellipsis="..."
                trimRight
                basedOn="letters"
              /> */}
              {item?.description}
            </div>
            {item?.type === "messageToWinners" ? (
              <textarea
                name={item?.name}
                className="msgToWinners"
                id=""
                placeholder={item?.placeholder}
                onChange={(e) => handleChange(e, item)}
                value={form?.msgToWinners}
                maxLength={120}
              ></textarea>
            ) : null}
            {item?.tagList?.length > 0 ? (
              <div className="tagList">
                {item?.tagList?.map((itemTag) => (
                  <div
                    className="tagListItem"
                    key={itemTag?.token}
                    onClick={() => handleClickTag(itemTag)}
                  >
                    {itemTag?.title}
                  </div>
                ))}
              </div>
            ) : null}
            <div className="list">
              {item?.type === "collapse"
                ? item?.collapseList?.map((itemList) => (
                    <div className="item subItem" key={itemList?.token}>
                      <div className="subItemHeader">
                        <div className="title">{itemList.title}</div>
                        {itemList.type === "number" ? (
                          <div className="inputBox">
                            <Input
                              type="tel"
                              onChange={handleChange}
                              value={form?.[itemList.name]}
                              placeholder={itemList?.placeholder}
                              name={itemList?.name + "Value"}
                            />
                          </div>
                        ) : null}
                        {itemList.type === "switch" ? (
                          <Switch
                            onChange={() =>
                              handleChangeSwitchs(
                                item?.token,
                                itemList?.token,
                                itemList?.checked,
                                itemList?.mode
                              )
                            }
                            checked={itemList?.checked}
                          />
                        ) : null}
                      </div>
                      <div className="description">{itemList?.description}</div>
                      {itemList.type === "text" ? (
                        <div
                          className="inputBox addText"
                          style={{ margin: "10px 0px", width: "100%" }}
                        >
                          <Input
                            type="text"
                            style={{ width: "100%", maxWidth: "unset" }}
                            onChange={handleChange}
                            value={form?.[itemList.name + "Value"]}
                            placeholder={itemList?.placeholder}
                            name={itemList?.name + "Value"}
                          />
                          <div
                            className="addBtn"
                            onClick={() =>
                              handleAddMediaUrl(
                                item?.token,
                                itemList.token,
                                itemList.name + "Value",
                                form?.[itemList.name + "Value"]
                              )
                            }
                          >
                            افزودن
                          </div>
                        </div>
                      ) : null}
                      {itemList?.mediaList?.map(({ url, token }) => (
                        <div className="mediaListItem" key={token}>
                          <div className="url">{url}</div>
                          <div
                            className="close"
                            onClick={() =>
                              handleDeleteMediaUrl(
                                item?.token,
                                itemList.token,
                                token
                              )
                            }
                          >
                            <CloseCircleOutlined />
                          </div>
                        </div>
                      ))}
                    </div>
                  ))
                : null}
              {item?.type === "conditionList" && item?.list?.length === 0 ? (
                <div className="notConds">
                  <div className="conditionMsg">
                    هم اکنون می توانید شروط خود را برای شرکت کنندگان قرعه کشی
                    تایین کنید.
                    <span onClick={() => handleCondAdd(item)}>
                      .شروط خود را بنویسید
                    </span>
                  </div>
                </div>
              ) : (
                item?.list?.map((itemList) => (
                  <div
                    className={`item ${
                      item?.type === "conditionList" ? "conditionItem" : ""
                    } ${itemList?.enabled ? "enabled" : ""}`}
                    key={itemList?.token}
                    onClick={() =>
                      handleClickItemList(itemList, item?.token, item)
                    }
                  >
                    <div className="rightContainer">
                      {item?.type === "conditionList" ? (
                        <div className="icon">
                          <CheckCircleFilled />
                        </div>
                      ) : null}
                      <div className="">
                        <div className="title">{itemList?.title}</div>
                        {itemList?.text ? (
                          <div className="caption">{itemList?.text}</div>
                        ) : null}
                      </div>
                    </div>
                    {itemList.type === "number" ? (
                      <div className="inputBox">
                        <Input
                          type="tel"
                          onChange={handleChange}
                          value={form?.[itemList.name]}
                          placeholder={itemList?.placeholder}
                          name={itemList?.name}
                        />
                      </div>
                    ) : null}
                    {item?.type === "conditionList" ? (
                      <div className="iconBox">
                        <div
                          className="icon"
                          onClick={() => handleCondEdit(itemList, item)}
                        >
                          <EditFilled />
                        </div>
                        <div
                          className="icon"
                          onClick={() => handleCondDelete(itemList, item)}
                        >
                          <DeleteFilled />
                        </div>
                      </div>
                    ) : null}
                    {itemList?.hasSwitch ? (
                      <Switch
                        onChange={() =>
                          handleChangeSwitchs(
                            item?.token,
                            itemList?.token,
                            itemList?.checked,
                            itemList?.mode
                          )
                        }
                        checked={itemList?.checked}
                      />
                    ) : null}
                  </div>
                ))
              )}
            </div>
          </div>
        ))}
        <div className="" style={{ width: "100%" }}>
          <Button type="primary" onClick={handleSubmit}>
            شروع
          </Button>
        </div>
      </form>
    </Container>
  );
};

export default LotteryCreate;
