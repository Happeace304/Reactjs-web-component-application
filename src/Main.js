import { Route, Routes, useNavigate } from 'react-router-dom';
import First from './First';
import Second from './Second';

function Main() {
  const navigate = useNavigate();
  const baseUrl = `react-component`;

  return (
    <div className="Main">
        <Routes>
          <Route path={baseUrl}>
            <Route index element={<>Main</>}/>
            <Route path={'first'} element={<First/>}/>
            <Route path={'second'} element={<Second/>}/>
          </Route>
        </Routes>
      <div>
        <button onClick={()=>navigate(baseUrl)}>main</button>
        <button onClick={()=>navigate(`${baseUrl}/first`)}>first</button>
        <button onClick={()=>navigate(`${baseUrl}/second`)}>second</button>
      </div>
    </div>
  );
}

export default Main;
