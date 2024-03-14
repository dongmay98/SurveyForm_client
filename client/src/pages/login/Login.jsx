import React, { useState } from 'react';
import styles from './css/Login.module.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { IconIpt } from '../../components/input/EtcIpt';
import { BasicIpt } from '../../components/input/BasicIpt';
import { BasicBtn } from '../../components/button/BasicBtn';
import axios from 'axios';

export default function LoginPage() {
  // // input 요소 상태
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // 서버 전달값 셋팅
  const inputEmail = (e) => {
    setEmail(e.target.value);
  };
  const inputPassword = (e) => {
    setPassword(e.target.value);
  };

  // 서버 제출
  const submitLogin = (e) => {
    // 새로 고침 막음
    e.preventDefault();
    loginFn(email, password);
  };

  const loginFn = async () => {
    const reqUrl = 'http://localhost:8080/login';
    axios
      .post(reqUrl, { email, password }, { withCredentials: true }) // 세션 쿠키를 위해 withCredentials: true 옵션 추가
      .then((res) => {
        console.log('로그인 성공!', res);
        alert('로그인성공')
        // navigate('/main'); // 로그인 성공 후 리디렉션할 경로
      })
      .catch((error) => {
        console.error('로그인 실패:', error);
        alert('로그인 실패했습니다. 이메일 또는 비밀번호를 확인하세요.');
      });
  };

  return (
    <div className={styles.pageWrap}>
      <div className={styles.contentArea}>
        <section className={styles['login-info']}>
          <h2 className={styles['title-box']}>
            구글폼제작
          </h2>
          <form className={styles['input-box']} onSubmit={submitLogin}>
            <IconIpt>
              <BasicIpt
                type="text"
                placeholder="아이디"
                value={email}
                onChange={inputEmail}
              />
              <i className="icon icon icon-user-g" />
            </IconIpt>
            <IconIpt>
              <BasicIpt
                placeholder="비밀번호"
                type="password"
                value={password}
                onChange={inputPassword}
                required
              />
              <i className="icon icon icon-lock-g" />
            </IconIpt>
            <label className={styles['login-check']}>
              <input type="checkbox" />
              <span className={styles['check-icon']} />
              <span className={styles['check-text']}> 로그인 상태 유지</span>
            </label>
            <BasicBtn type="submit">로그인</BasicBtn>
          </form>
        </section>
        <section className={styles['login-etc']}>
          <div className={styles['find-id-join']}>
            <p>아이디 찾기 | 비밀번호 찾기</p>
            <div>
              아직 계정이 없으신가요?
              <Link to="/join" className={styles.logintojoin}>
                회원가입하기
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
