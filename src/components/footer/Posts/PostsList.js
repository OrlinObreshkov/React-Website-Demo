import classes from "./PostsList.module.css";
import { FaFile } from "react-icons/fa";
import { DummyPostData } from "../../../data/DummyPostData";
import PostElement from "./PostElement";

function PostsList() {
    const allPosts = DummyPostData.map((post) => (
      <PostElement
        key={post.id}
        id={post.id}
        post={post.post}
      />
    ));
  
    return (
      <div className={classes.posts} >
        <div className={classes["posts-header"]}>
          <FaFile />
        </div>
        <div className={classes["posts-body"]}>
          <ul>
              {allPosts}
          </ul>
        </div>
      </div>
    );
  }
  
  export default PostsList;