import React, {useState} from 'react';
// import style from './login.sass';

const styles = {
  title: {
    textAlign: 'center',
  },
  input: {
    border: 'solid 1px black',
  } as React.CSSProperties,
};

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState();
  const emailHandle = (e: any) => {
    setEmail(e.target.value);
  };
  const passwordHandle = (e: any) => {
    setPassword(e.target.value);
  };
  const submitHandle = () => {
    console.log(email, password);
  };
  return (
    <>
      <div className="">
        <div>
          <p style={styles.title}>로그인</p>
        </div>
        <div>
          <p>이메일</p>
          <input style={styles.input} type="text" onChange={emailHandle} />
          <p>비밀번호</p>
          <input style={styles.input} type="text" onChange={passwordHandle} />
        </div>
        <div>
          <button onClick={submitHandle}>로그인</button>
        </div>
      </div>
    </>
  );
}

export default Login;
