import { AuctionSliderContainer as Container } from "./AuctionItem.styled";
import Slider from "../Slider/Slider";
const AuctionSlider = ({ slides = [] }) => {
  return (
    <Container>
      <Slider>
        {slides.map((Item) => (
          <img src={Item} alt="" />
        ))}
      </Slider>
    </Container>
  );
};

export default AuctionSlider;
