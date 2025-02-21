import logo from "./logo.svg";
import "./App.css";
import MainPage from "./main/index.js";
import { Routes, Route } from "react-router-dom";
import UploadPage from "./upload/";
import ProductPage from "./product/index.js";
function App() {
  return (
    <div>
      <Routes>
        {/* Route의 path prop의 경로로 들어가면, element prop의 컴포넌트를 보여줌.*/}
        {/* 이때 element prop도 JSX 적용 */}
        <Route path="/" element={<MainPage />} />
        {/* 아래처럼 /:hello라 치면 그 뒤의 hello 부분을 react-router-dom의 useParams 모듈을 통해 ProductPage 컴포넌트에서 활용 가능 */}
        {/* 이때  hello는 객체 형태, key 이름은 hello로 반환*/}
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/upload" element={<UploadPage />} />
      </Routes>
    </div>
  );
}

export default App;
