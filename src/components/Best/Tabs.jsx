import { TabsContainer as Container } from "./Best.styled";
import { Tabs as TabList } from "antd";
const { TabPane } = TabList;

const Tabs = ({ tabs }) => {
  const handleChange = (e) => {
    console.log(e);
  };
  return (
    <Container>
      <TabList defaultActiveKey="1" centered onChange={handleChange}>
        {tabs?.map((item) => (
          <TabPane
            tab={item?.title}
            key={~~(Math.random() * 999999)}
            className="list"
          >
            {item?.list?.length > 0 ? (
              item?.list?.map((user, index) => (
                <div className="item">
                  <div className="profileFlex">
                    <div className="number">{index + 1}</div>
                    <img src={user?.image} className="image" alt="" />
                    <div className="username">{user?.username}</div>
                  </div>
                  <div className="count">{user?.count}</div>
                </div>
              ))
            ) : (
              <div className="emptyList">لیست خالی می باشد</div>
            )}
          </TabPane>
        ))}
      </TabList>
    </Container>
  );
};

export default Tabs;
