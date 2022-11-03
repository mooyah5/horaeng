import React, {useState, ChangeEvent} from 'react';
import './login.scss';

function Login() {
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });
  const {email, password} = inputs;
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  // 입력값 모두 작성 여부 검사
  const isValidInput = email.length >= 1 && password.length >= 1;

  const SubmitHandle = () => {
    if (!isValidInput) {
      alert('모든 내용을 입력해 주세요.');
    } else {
      return;
    }
  };
  return (
    <div id="login">
      <div className="login_container">
        <div>
          <p className="title">관리자 로그인</p>
        </div>
        <div>
          <div className="input-box">
            <p className="input-text">아이디</p>
            <input
              className="input"
              type="text"
              onChange={onChange}
              required
              placeholder="아이디를 입력해 주세요."
              name="email"
            />
          </div>
          <div className="input-box">
            <p className="input-text">패스워드</p>
            <input
              className="input"
              type="password"
              onChange={onChange}
              required
              placeholder="비밀번호를 입력해 주세요."
              name="password"
            />
          </div>
        </div>
        <div className="login-btn-div">
          <button
            type="button"
            className="login-btn flex align-center justify-center preMid fs-16"
            onClick={SubmitHandle}>
            LOGIN
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
