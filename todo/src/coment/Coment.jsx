import './Coment.css';
import {useSelector} from "react-redux";

const Coment = () => {
  
// const coment = useSelector((state)=>state.)
  return (
    <div className="coment-list">
        <div className="coment">
            <p className='add-input'>작성자들어갈 자리</p>
            
            <p className='add-input'>입력한 내용</p>

            <button>수정하기</button>
            <button>삭제하기</button>
        </div>
        
    </div>
  );
};
export default Coment;
