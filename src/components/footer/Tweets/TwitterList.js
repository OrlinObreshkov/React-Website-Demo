import classes from "./TwitterList.module.css";
import { FaTwitter } from "react-icons/fa";
import { DummyTwitterData } from "../../../data/DummyTwitterData";
import TwitterElement from "./TwitterElement";

function TwittertsList() {
  const allTweets = DummyTwitterData.map((tweet) => (
    <TwitterElement
      key={tweet.id}
      id={tweet.id}
      post={tweet.post}
    />
  ));

  return (
    <div className={classes.tweets}>
      <div className={classes["tweets-header"]}>
        <FaTwitter />
      </div>
      <div className={classes["tweets-body"]}>
        <ul>
            {allTweets}
        </ul>
      </div>
    </div>
  );
}

export default TwittertsList;
