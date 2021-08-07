import useCountdown from "../../hooks/useCountdown";

const Countdown = ({
  year = 0,
  month = 0,
  day = 0,
  hours = 0,
  minutes = 0,
  seconds = 0,
} = props) => {
  const { state } = useCountdown(props);
  const mapTimer = () => {
    for (let i in state) {
      console.log(i);
    }
  };
  return <Container></Container>;
};
const Container = styled.div``;
export default Countdown;
