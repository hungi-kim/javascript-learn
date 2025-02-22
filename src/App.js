import logo from "./logo.svg";
import "./App.css";
import MainPage from "./main/index.js";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import UploadPage from "./upload/";
import ProductPage from "./product/index.js";
import { Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";

function App() {
  // Link 컴포넌트 말고 함수 형태로 페이지를 이동시키는 함수 -> useNavigate
  // useNavigate 함수의 실행 결과를 변수로 저장
  const navigate = useNavigate();
  return (
    <div>
      <div id="header">
        <div id="header-area">
          {/* react에서는 이미지의 기본 경로가 public 폴더로 되어 있다. */}
          <Link className="product-link" to="/">
            <img src="/images/icons/logo.png" alt="그랩마켓 로고" />
          </Link>

          {/* Antd API 문서 참고해서 여러 prop 추가 */}
          {/* 이때 icon은 install하고, 그 icon module을 import 해와야 함 */}
          <Button
            size="large"
            // Antd에서 하라는 대로 icon도 component 형태로 삽입
            icon={<UploadOutlined />}
            // onClick에 익명 콜백함수로 navigate("경로")를 입력
            onClick={function () {
              navigate("/upload");
            }}
          >
            상품 업로드
          </Button>
        </div>
      </div>
      <div id="body">
        <Routes>
          {/* Route의 path prop의 경로로 들어가면, element prop의 컴포넌트를 보여줌.*/}
          {/* 이때 element prop도 JSX 적용 */}
          <Route path="/" element={<MainPage />} />
          {/* 아래처럼 /:id라 치면 그 뒤의 id 부분을 react-router-dom의 useParams 모듈을 통해 ProductPage 컴포넌트에서 활용 가능 */}
          {/* 이때  useParam 모듈의 반환값은 객체 형태, key 이름은 id로 반환*/}
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/upload" element={<UploadPage />} />
        </Routes>
      </div>
      <div id="footer"></div>
    </div>
  );
}

export default App;
