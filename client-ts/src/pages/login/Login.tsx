import React, { useState, ChangeEvent, FormEvent } from 'react';
import styles from './css/Login.module.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { IconIpt } from '../../components/input/EtcIpt';
import { BasicIpt } from '../../components/input/BasicIpt';
import { BasicBtn } from '../../components/button/BasicBtn';
import axios from 'axios';

export default function Login() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();

  // 이벤트 핸들러에서 이벤트 타입을 지정합니다.
  const inputEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const inputPassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const submitLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    loginFn(email, password);
  };

  // `loginFn` 함수에 async 키워드를 추가하여 비동기 함수로 만들었습니다.
  const loginFn = async (email: string, password: string) => {
    const reqUrl = 'http://localhost:8080/login';
    axios
      .post(reqUrl, { email, password }, { withCredentials: true })
      .then((res) => {
        console.log('로그인 성공!', res);
        alert('로그인성공');
        navigate('/main');
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