import React, {useState, ChangeEvent} from 'react';
import {useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {SET_TOKEN} from '../../store/Auth';

import './login.scss';
import api from '../../api/api';

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [inputs, setInputs] = useState({
    id: '',
    password: '',
    role: 'Admin',
  });
  const {id, password} = inputs;
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
    console.log(inputs);
  };

  const login = async () => {
    try {
      const res = await api.auth.login(inputs);
      dispatch(
        SET_TOKEN({
          authenticated: true,
          userName: inputs.id,
        }),
      );
      localStorage.setItem('token', res.headers.token || '');
      alert(res.data.message);
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };
  // 입력값 모두 작성 여부 검사
  const isValidInput = id.length >= 1 && password.length >= 1;

  const SubmitHandle = () => {
    if (!isValidInput) {
      alert('모든 내용을 입력해 주세요.');
    } else {
      login();
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
              name="id"
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
