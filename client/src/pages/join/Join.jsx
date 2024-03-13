import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { IconIpt } from '../../components/input/EtcIpt';
import { BasicIpt } from '../../components/input/BasicIpt';
import { BasicBtn } from '../../components/button/BasicBtn';
import styles from './css/Join.module.css';

export default function JoinPage() {
  const navigate = useNavigate();
  //입력 정보 useState
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const inputInfo = (e, inputType) => {
    inputType(e.target.value);
  };

  // 회원가입 API
  const joinFn = async () => {
    const reqUrl = 'http://localhost:8080/join';
    axios
      .post(reqUrl, {
        username: username,
        email: email,
        password: password,
      })
      .then(function (res) {
        console.log(res);
        alert('회원가입이 성공했습니다.');
        // 회원가입 성공 시 login 페이지로 이동
        navigate('/');
      })
      .catch(function (error) {
        console.log(error);
        alert(error.response.data.message);
      });
  };
  const submitJoin = (e) => {
    e.preventDefault();
    joinFn();
  };


  return (
    <section className={styles.pageWrap}>
      <div className={styles['join-Box']}>
        <div className={styles['title-box']}>
          <h3 className={styles['join-title']}>회원가입</h3>
          <strong className={styles['join-ment']}>
            아이디와 이메일로 간편하게 구글폼 제작!
          </strong>
        </div>
        <div className={styles['info-box']}>
          <IconIpt>
            <BasicIpt
              gray="true"
              placeholder="이메일"
              value={email}
              onChange={(e) => {
                inputInfo(e, setEmail);
              }}
            />
            <i className="icon icon-email-w" />
          </IconIpt>
          <IconIpt>
            <BasicIpt
              type="password"
              gray="true"
              placeholder="비밀번호"
              value={password}
              onChange={(e) => {
                inputInfo(e, setPassword);
              }}
            />
            <i className="icon icon icon-lock-w" />
          </IconIpt>
          <IconIpt>
            <BasicIpt
              gray="true"
              placeholder="사용자 이름"
              value={username}
              onChange={(e) => {
                inputInfo(e, setUsername);
              }}
            />
            <i className="icon icon-user-w" />
          </IconIpt>
          <BasicBtn 
          type="submit" 
          onClick={submitJoin}
          >
            가입하기
          </BasicBtn>
        </div>
      </div>
    </section>
  );
}
