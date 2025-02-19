import React from "react";
import "./index.css";
import axios from "axios";

function MainPage() {
  const [productt, setProducts] = React.useState([]);
  //   무한 렌더링을 방지하기 위해 useEffect 사용 (두번째 인자에 빈 배열을 넣어서 한번만 렌더링되도록)
  React.useEffect(function () {
    axios
      .get(
        "https://5cd009e1-7b37-4fbd-b30f-b570bd97366f.mock.pstmn.io/products"
      )
      .then(function (result) {
        const products = result.data.products;
        //   아래 함수가 실행되면서, 바로 윗줄에서 정의된 axios 통신 결과 products가 렌더링되면서 axios 함수 밖의 productt에 저장됨.
        //   그런데 setProducts가 실행되면서 렌더링되고, 다시 한번 axios 호출이 실행됨 무한루프
        setProducts(products);
        console.log(result);
      })
      .catch(function (error) {
        console.error("에러발생", error);
      });
  }, []);

  return (
    // 컴포넌트는 최종적으로 하나의 태그로 감싸서 return 해야 함.
    <div>
      <div id="header">
        <div id="header-area">
          {/* react에서는 이미지의 기본 경로가 public 폴더로 되어 있다. */}
          <img src="/images/icons/logo.png" alt="그랩마켓 로고" />
        </div>
      </div>
      <div id="body">
        <div id="banner">
          <img
            src="/images/banners/banner1.png"
            alt="상단에 그랩마켓 런칭 이벤트라고 쓰여 있고, 하단에는 파인애플 4개가 차례로 놓여 있는 그림이다."
          />
        </div>
        <h1>판매되는 상품들</h1>
        <div id="product-list">
          {/* map method를 productt라는 배열에 적용 */}
          {/* productt 배열의 length( = 3)만큼 순회. 그 각 요소들이 value로 들어감 */}
          {productt.map(function (value, index) {
            return (
              <div className="product-card">
                <div>
                  <img
                    className="product-img"
                    // value.image_url로 이미지 주소로 접근. 근데 mock 서버에서 정의한 url 주소가 /images~~ 로 시작하지 않는 문제가 있음
                    // 그래서 JSX와 Template Literal을 이용해서 string 형태로 병합.
                    src={`/images/${value.image_url}`}
                  />
                </div>
                <div className="product-content">
                  {/* 위의 value를 이용하는 방식과는 다르게, 이번에는 productt 배열에서 index를 이용해서 뽑아냄. */}
                  {/* 이때도 항상 HTML안에 javascript 문법을 넣기 위해서는 JSX 생각! */}
                  <span className="상품명">{productt[index].name}</span>
                  <span className="가격">{value.price} 원</span>
                  <div className="product-seller">
                    <img className="seller-img" src="images/icons/avatar.png" />
                    <span>{productt[index].seller}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div id="footer"></div>
    </div>
  );
}

export default MainPage;
