import './Comment.css';
import {useSelector, useDispatch} from "react-redux";
import {deleteComment} from "../redux/modules/comments";


const Comment = (props) => {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comments.commentList);

  const commentDelete = (commentId) => {
    
    // if (window.confirm({number})) {
      // onRemove(coment.id);
      dispatch(deleteComment(commentId));
    
  };
  
  
  return (
    <div className='list-wrapper' >
     {comments.map((comment)=>{
      if(comment.todoId === props.id){
        return (<div key={comment.id}>
          <div className='comment-box'>
              <p>{comment.title}</p>
              <div>{comment.content}</div>
              <button onClick={()=>{
               commentDelete(comment.id);
               }}>삭제</button>
          </div>
         
                </div>
          )
      }
      
     })}

      
      </div>
  );
};
export default Comment;
