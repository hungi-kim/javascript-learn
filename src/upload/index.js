import { Button, Divider, Form, Input, InputNumber } from "antd";
// css 파일 불러올 때는 그냥 import만 쓰면 됨.
import "./index.css";

// 파일 이름이 index인 것은 이 폴더에서 시작이다 라는 의미
function UploadPage() {
  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <div id="upload-container">
      {/* Form 컴포넌트의 prop으로 onFinish prop으로 함수를 넣어준다. 나중에 submit 버튼을 누르면 그 함수의 인자(values)로 결과값이 들어감*/}
      <Form name="상품 업로드" onFinish={onSubmit}>
        <Form.Item
          name="upload"
          label={<div className="upload-label">상품 사진</div>}
          rules={[{ required: true, message: "상품 사진을 입력해 주세요." }]}
        >
          <div id="upload-img-placeholder">
            <img src="/images/icons/camera.png" />
            <span>이미지를 업로드해주세요.</span>
          </div>
        </Form.Item>
        {/* 구분선 만드는 태그(모듈) */}
        <Divider />
        {/* rules prop에는 [{}] 형태로 입력해야 함. required : true는 필수질문, message는 입력 안했을 시 뜨는 문구 */}
        <Form.Item
          // 이 name prop이 나중에 submit될때의 결과물에서, 배열의 key 역할을 함.
          name="seller"
          rules={[{ required: true, message: "판매자 이름을 입력해 주세요." }]}
          label={<div className="upload-label">판매자 이름</div>}
        >
          {/* Input 태그는 Antd의 Form의 새로운 태그 -> placeholder prop값은 아무것도 입력 안했을때 보이는 값 */}
          <Input
            className="upload-name"
            size="large"
            placeholder="판매자 이름을 입력해 주세요."
          />
        </Form.Item>
        <Divider />
        <Form.Item
          name="name"
          label={<div className="upload-label">상품 이름</div>}
          rules={[{ required: true, message: "상품명을 입력해 주세요." }]}
        >
          <Input
            className="upload-name"
            size="large"
            placeholder="상품명을 입력해 주세요."
          />
        </Form.Item>
        <Divider />
        <Form.Item
          name="price"
          label={<div className="upload-label">상품 가격</div>}
          rules={[{ required: true, message: "상품 가격을 입력해 주세요." }]}
        >
          {/* numeric 값은 InputNumber 태그로 받음 */}
          <InputNumber
            className="upload-price"
            size="large"
            // 문자 Input의 경우의 placeholder == 숫자 InputNumber의 defaultValue
            defaultValue={0}
          />
        </Form.Item>
        <Divider />
        <Form.Item
          name="description"
          label={<div className="upload-label">상품 상세 설명</div>}
          rules={[
            { required: true, message: "상품 상세 정보를 입력해 주세요." },
          ]}
        >
          {/* Antd Input 문서에서 prop 관련 참고 */}
          <Input.TextArea
            size="large"
            // 아무것도 안 쓰면 자동으로 true 처리
            showCount
            maxLength={300}
            id="product-description"
            placeholder="상품 소개를 적어주세요."
          ></Input.TextArea>
        </Form.Item>
        <Divider />
        <Form.Item>
          {/* 아래 버튼을 정의할 때, htmlType prop을 꼭 submit으로 설정해줘서 이 버튼이 제출 버튼임을 명시해야 함. */}
          {/* 이 버튼을 누르면, 위의 onFinish 부분이 동작 */}
          {/* onFinish prop으로 들어간 함수의 인자로 결과값 배열이 들어감
          그 배열의 key들은 각 Form.Item의 name prop이고, value들은 Input 태그에 들어온 값임. */}
          <Button id="submit-button" size="large" htmlType="submit">
            등록하기
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default UploadPage;
