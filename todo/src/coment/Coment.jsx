import './Coment.css';
import {useSelector} from "react-redux";

const Coment = () => {

  const coments = useSelector((state) => state.coments.comentList);
  console.log(coments)

  return (
    <div className='list-wrapper' >
     {coments.map((coment)=>{
      return (<div key={coment.id}>
      <p>{coment.title}</p>

      <div>{coment.content}</div>
            </div>
      )
     })}

      
      </div>
  );
};
export default Coment;
