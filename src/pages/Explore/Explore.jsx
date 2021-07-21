import { useState } from "react";
import Image from "../../assets/images/avatar.jpg";
import ExploreList from "../../components/Explore/ExploreList";
import ExploreSearch from "../../components/Explore/ExploreSearch";

const Explore = () => {
  const [list] = useState([
    { image: Image, token: "2rfpsoxkcvpxcvke" },
    { image: Image, token: "2rfdsdvxoxkcvpxcvke" },
    { image: Image, token: "2rfpsoxdfskcvpxcvke" },
    { image: Image, token: "2rfjkgpsoxkcvpxcvke" },
    { image: Image, token: "2rfpsoxkcvhfpxcvke" },
    { image: Image, token: "2rfpsoxkcvhfpxcvdfsocke" },
    { image: Image, token: "2rfpsvjocxijoxkcvhfpxcvke" },
    { image: Image, token: "2rfpsodlfs[xxkcvhfpxcvke" },
    { image: Image, token: "2rfppflscvxsoxkcvhfpxcvke" },
    { image: Image, token: "2rfpsoadjoczjxoxkcvhfpxcvke" },
    { image: Image, token: "2rfpsoxkjfisdjvxcvhfpxcvke" },
    { image: Image, token: "2rfpsoxcizoxjckcvhfpxcvke" },
  ]);
  return (
    <div className="container">
      <ExploreSearch />
      <ExploreList list={list} />
    </div>
  );
};

export default Explore;
