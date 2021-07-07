import { SimpleNavContainer as Container } from "./Navigation.styled";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useHistory } from "react-router-dom";

const SimpleNavigation = () => {
  const history = useHistory();
  return (
    <Container className="navContainer">
      <div className="icon" onClick={() => history.goBack()}>
        <ArrowBackIcon />
      </div>
      <div className="title">تنظیمات</div>
    </Container>
  );
};

export default SimpleNavigation;
