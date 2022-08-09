import './Coment.css';
import {useSelector, useDispatch} from "react-redux";
import {deleteComent} from "../redux/modules/coments";


const Coment = (props) => {
  const dispatch = useDispatch();
  const coments = useSelector((state) => state.coments.comentList);

  const comentDelete = (comentId) => {
    
    // if (window.confirm({number})) {
      // onRemove(coment.id);
      dispatch(deleteComent(comentId));
    
  };
  
  
  return (
    <div className='list-wrapper' >
     {coments.map((coment)=>{
      if(coment.todoId === props.id){
        return (<div key={coment.id}>
          <p>{coment.title}</p>
    
          <div>{coment.content}</div>
          <button onClick={()=>{
            comentDelete(coment.id);
          }}>삭제</button>
                </div>
          )
      }
      
     })}

      
      </div>
  );
};
export default Coment;
