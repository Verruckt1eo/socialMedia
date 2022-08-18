import {FaThumbsUp,FaTrashAlt} from "react-icons/fa"
function Post(props) {
  return (
    <li className="post-item">
      <div className="post-author">
        <img className="post-avatar" src={props.post.avatar} />
        <h3>{props.post.author}</h3>
      </div>
      <p className="post-text">{props.post.text}</p>
      <p className={"post-likes "+ (props.post.liked==true?"liked":"")} >
        <button className="post-like" onClick={()=>props.likePost(props.post.id)}>
          <FaThumbsUp />
        </button>
        {props.post.likes}
      </p>
      <p>
        <button className="post-delete" onClick={()=>props.deletePost(props.post.id)}>
          <FaTrashAlt/>
          </button>
      </p>
    </li>
  );
}
export default Post