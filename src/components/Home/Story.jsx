import { StoryContainer as Container } from "./Home.styled";
import Slider from "../Slider/Slider";
import { useSelector } from "react-redux";

const Story = () => {
  const { home } = useSelector(({ user }) => user);
  const handleClickStory = () => {
    console.log("clicked story");
  };
  return (
    <Container className="">
      <Slider align="left">
        {home?.story?.map((item) => (
          <div className={`item`} onClick={handleClickStory} key={item?.token}>
            <div className={` ${!item.viewed ? "active" : ""}`}>
              <img src={item?.account?.image} alt="" />
            </div>
          </div>
        ))}
      </Slider>
    </Container>
  );
};

export default Story;
