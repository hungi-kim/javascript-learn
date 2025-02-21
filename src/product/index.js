import { useParams } from "react-router-dom";

function ProductPage() {
  //   useParams 모듈의 실행 결과는, 앞서 App.js에서 Route 컴포넌트의 path 뒷부분에 정의한 이름 (ex. id)이 key 이름인 객체로 반환
  // destructuring
  const { id } = useParams();
  console.log(id);
  return <h1>상품 상세페이지 상품 {id}</h1>;
}

export default ProductPage;
