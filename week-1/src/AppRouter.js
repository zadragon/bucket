import React from 'react';
// Route를 먼저 불러와줍니다.
import { Link, Route, Routes, useNavigate } from "react-router-dom";

// 세부 페이지가 되어줄 컴포넌트들도 불러와주고요!
import Home from "./router/Home";
import Cat from "./router/Cat";
import Dog from "./router/Dog";
import CatDetail from './router/CatDetail'


const App = () => {

  const navigate = useNavigate();
    return (
      <div className="App">
        <div>
          <Link to="/" style={{marginRight:"10px"}}>Home으로 가기</Link>
          <Link to="/cat" style={{marginRight:"10px"}}>Cat으로 가기</Link>
          <Link to="/dog">Dog으로 가기</Link>
        </div>

        <hr />
        {/* 실제로 연결해볼까요! */}
        <Routes>
          <Route path="/" element={<Home />}  />
          <Route path="cat" element={<Cat />}>
            <Route path="detail" element={<CatDetail />} />  
          </Route>
          <Route path="dog:name" element={<Dog />} />
        </Routes>
        
      

        <button onClick={() => {
          navigate("/cat");
        }}>
          /cat으로 가기
        </button>
        <button onClick={()=>{
          navigate(-1);
        }}>뒤로가기
        </button>
      </div>
    );
}

export default App;