import { useState } from "react";
import SingleOrderContent from "../../components/SingleOrder/SingleOrderContent";
import SingleOrderHeader from "../../components/SingleOrder/SingleOrderHeader";

//! need socket for tracking count
const SingleOrder = () => {
  const [data] = useState({
    order: 43255,
    account: {
      username: "mmdzov",
      avatar:
        "https://www.talab.org/wp-content/uploads/2018/04/692060199-talab-org.jpg",
    },
    postPreview:
      "https://www.talab.org/wp-content/uploads/2018/04/692060199-talab-org.jpg",
    comment: null,
    story: null,
    type: "فالوور",
    trackCount: 23,
    count: 5000,
    status: "done",
  });
  return (
    <div className="container">
      <SingleOrderHeader data={data} />
      <SingleOrderContent data={data} />
    </div>
  );
};

export default SingleOrder;
