import PropTypes from "prop-types";
import styled from "styled-components";

const ScContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const ScSpan = styled.span`
  /* 스타일 컴포넌트 안에서는 $와 중괄호 안에 자바스크립트를 사용할 수 있다. */
  /* ${(props) =>
    props.color}를 통해 ScSpan컴포넌트가 가지고 있는 모든 props들을 가지고 온 후 그 중에서 props.color를 통해 color props를 가져와서 color={color}에서 {color}부분에 해당하는 값을 가져와서 스타일을 적용시켜준다. */
  color: ${(props) => props.color};
`;

// Message라는 함수를 만들고 Message함수는 color와 text 매개 변수를 가지고 Presenter.js파일들에서 전달 했던 값들을 받는다.
// color로는 사용자가 지정한 색깔을 받아오고 text로는 error변수를 받아와서 화면에 뿌려준다.
{
  /* <ScSpan color={color}></ScSpan>를 통해 매개 변수로 받은 color를  */
}
const Message = ({ color, text }) => {
  return (
    <ScContainer>
      <ScSpan color={color}>{text}</ScSpan>
    </ScContainer>
  );
};

// Message함수가 받는 props에 대한 Type를 설정해준다.
Message.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Message;
