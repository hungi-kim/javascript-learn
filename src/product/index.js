import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "./index.css";
function ProductPage() {
  //   useParams 모듈의 실행 결과는, 앞서 App.js에서 Route 컴포넌트의 path 뒷부분에 정의한 이름 (ex. id)이 key 이름인 객체로 반환
  // destructuring
  const { id } = useParams();
  //   처음에는, useState 함수의 실행 결과로 null 값이 product 변수에 들어감.
  const [product, setProduct] = useState(null);
  useEffect(function () {
    axios
      .get(
        `https://5cd009e1-7b37-4fbd-b30f-b570bd97366f.mock.pstmn.io/products/${id}`
      )
      .then(function (result) {
        // 여기서 setProduct의 인자에, 네트워크 통신 결과(result.data)가 들어가고, 그게 결국 위에서 정의한 product 변수에 들어감
        setProduct(result.data);
        console.log(result);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  //   axios는 비동기 처리이므로, 처음에는 proudct 변수에 null이 저장되어 있음. 제일 아래 return 코드에서는 product.description 등의 정보를 불러오는데, null인 경우 오류가 발생해서, 이 경우 다른 태그를 노출
  if (product == null) {
    return <h1>상품 정보를 불러오고 있습니다...</h1>;
  }

  return (
    <div>
      <div id="image-box">
        <img src={`/images/${product.image_url}`} />
      </div>
      <div id="profile-box">
        <img src="/images/icons/avatar.png" />
        <span>{product.seller}</span>
      </div>
      <div id="contents-box">
        <div id="name">{product.name}</div>
        <div id="price">{product.price} 원</div>
        <div id="createdAt">2025-02-22</div>
        <div id="description">{product.description}</div>
      </div>
    </div>
  );
}

export default ProductPage;
