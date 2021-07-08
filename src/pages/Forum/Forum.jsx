import styled from "styled-components";
import ForumBest from "../../components/Forum/ForumBest";
import ForumMore from "../../components/Forum/ForumMore";
import ForumSuggest from "../../components/Forum/ForumSuggest";
import ForumSuggestYou from "../../components/Forum/ForumSuggestYou";
import ForumUserLevel from "../../components/Forum/ForumUserLevel";

const Forum = () => {
  return (
    <Container className="container">
      <ForumUserLevel />
      <ForumMore />
      <ForumSuggestYou />
      <ForumSuggest />
      <ForumBest />
    </Container>
  );
};

const Container = styled.div`
  & > div {
    direction: rtl;
  }
  & .title {
    font-size: 1rem;
    font-weight: bold;
    padding: 0 10px;
    height: 40px;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    margin-top: 10px;
  }
`;
export default Forum;
