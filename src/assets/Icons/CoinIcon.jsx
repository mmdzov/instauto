import styled, { keyframes } from "styled-components";

const CoinIcon = () => {
  return (
    <Container className="">
      <div className="coinLabel">TA</div>
      <div className="coinBorder"></div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.1"
        width="20"
        height="25"
        viewBox="0 0 350 350"
        xmlSpace="preserve"
      >
        <defs></defs>
        <g
          id="icon"
          style={{
            stroke: "none",
            strokeWidth: 1,
            strokeDasharray: "none",
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            fill: "none",
            fillRule: "nonzero",
            opacity: 1,
          }}
          transform="translate(-1.9444444444444287 -1.9444444444444287) scale(3.89 3.89)"
        >
          <path
            d="M 45 1 C 20.699 1 1 20.699 1 45 s 19.699 44 44 44 s 44 -19.699 44 -44 S 69.301 1 45 1 L 45 1 z"
            style={{
              stroke: "none",
              strokeWidth: 1,
              strokeDasharray: "none",
              strokeLinecap: "butt",
              strokeLinejoin: "miter",
              strokeMiterlimit: 10,
              fill: "rgb(252,198,45)",
              fillRule: "nonzero",
              opacity: 1,
            }}
            transform=" matrix(1 0 0 1 0 0) "
            strokeLinecap="round"
          />
          <path
            d="M 45 3 c 23.159 0 42 18.841 42 42 S 68.159 87 45 87 S 3 68.159 3 45 S 21.841 3 45 3 M 45 0 C 20.147 0 0 20.147 0 45 s 20.147 45 45 45 s 45 -20.147 45 -45 S 69.853 0 45 0 L 45 0 z"
            style={{
              stroke: "none",
              strokeWidth: 1,
              strokeDasharray: "none",
              strokeLinecap: "butt",
              strokeLinejoin: "miter",
              strokeMiterlimit: 10,
              fill: "rgb(69,86,60)",
              fillRule: "nonzero",
              opacity: 1,
            }}
            transform=" matrix(1 0 0 1 0 0) "
            strokeLinecap="round"
          />
        </g>
      </svg>
    </Container>
  );
};
const CoinBorderAnimate = keyframes`
0%{
    transform: rotate(0deg);
}
100%{
    transform: rotate(360deg);
}
`;
const Container = styled.div`
  position: relative;
  overflow: hidden;
  height: 25px;
  width: 20px;
  user-select: none;
  & .coinLabel {
    font-family: digitalNinja;
    font-size: 0.7rem;
    position: absolute;
    left: 5px;
    top: 7px;
    color: #45563c;
    height: 26px;
    transform: skewY(16deg);
  }
  & .coinBorder {
    border: 1px solid #fcc62d;
    background: transparent;
    position: absolute;
    border-radius: 100px;
    height: 20px;
    top: 2px;
    display: none;
    width: 20px;
    left: 0px;
    animation: ${CoinBorderAnimate} 1s forwards infinite;
    /* border-top: ridge; */
    border-style: outset;
  }
`;
export default CoinIcon;
