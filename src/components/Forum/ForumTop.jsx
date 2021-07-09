import { ForumTopContainer as Container } from "./Forum.styled";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

const ForumTop = () => {
  return (
    <Container>
      <div className="forumTopTitle">پیغام ها</div>
      <div className="messageIcon newMessage">
        <MailOutlineIcon />
      </div>
    </Container>
  );
};

export default ForumTop;
