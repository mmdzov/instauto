import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import CommentItem from "./CommentItem";
import CommentPost from "./CommentPost";
import { ListContainer as Container } from "./Home.styled";
import Post from "./Post";

const List = () => {
  const { main, home } = useSelector(({ user }) => user);
  const [list, setList] = useState(main);
  const { pathname } = useLocation();
  const handlePageLists = (pattern, type, callback = () => {}) => {
    if (pathname.includes(pattern)) {
      const filtered = main.filter((item) => item.type === type);
      setList(filtered);
      if (filtered.length === 0 && pattern === "story") {
        callback(true);
      }
    } else callback();
  };
  useEffect(() => {
    handlePageLists("like-post", "post", () => {
      handlePageLists("comment-like", "commentLike", () => {
        handlePageLists("comment-post", "commentPost", () => {
          handlePageLists("like-post", "post", () => {
            // handlePageLists("story", "story", (hasEmpty) => {
            //   if (hasEmpty) {
            //     const story = home?.story;
            //     console.log(story);
            //     setList(story);
            //   }
            // });
          });
        });
      });
    });
  }, [main]);
  return (
    <Container story={pathname.includes("story")}>
      {pathname.includes("story")
        ? list.map((item) => (
            <div className="story">
              <img src={item?.account?.image} alt="" />
            </div>
          ))
        : list?.map((item) => (
            <div className="item" key={item?.token}>
              {item.type === "commentLike" ? (
                <CommentItem item={item} />
              ) : item.type === "commentPost" ? (
                <CommentPost item={item} />
              ) : item.type === "post" ? (
                <Post item={item} />
              ) : null}
            </div>
          ))}
    </Container>
  );
};

export default List;
