import Flickity from "react-flickity-component";

const Slider = ({ children, align = "right" }) => {
  return (
    <Flickity
      className={"carousel"}
      elementType={"div"}
      options={{
        freeScroll: true,
        prevNextButtons: false,
        contain: true,
        pageDots: false,
        // rightToLeft: rightToLeft,
        freeScrollFriction: 0.03,
        cellAlign: align,
        // draggable: false,
      }}
      reloadOnUpdate
      static
    >
      {children}
    </Flickity>
  );
};

export default Slider;
