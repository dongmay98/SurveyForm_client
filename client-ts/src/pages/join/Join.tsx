import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { IconIpt } from '../../components/input/EtcIpt';
import { BasicIpt } from '../../components/input/BasicIpt';
import { BasicBtn } from '../../components/button/BasicBtn';
import styles from './css/Join.module.css';

export default function Join() {
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const inputInfo = (e: ChangeEvent<HTMLInputElement>, inputType: React.Dispatch<React.SetStateAction<string>>) => {
    inputType(e.target.value);
  };

  const joinFn = async () => {
    const reqUrl = 'http://localhost:8080/join';
    try {
      const res = await axios.post(reqUrl, { username, email, password });
      console.log(res);
      alert('회원가입이 성공했습니다.');
      navigate('/');
    } catch (error) {
      let message = '회원가입 실패';
      if (axios.isAxiosError(error) && error.response) {
        message = error.response.data.message || message;
      }
      alert(message);
    }
  };

  const submitJoin = (e: FormEvent<HTMLButtonElement>) => {
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
              gray={true}
              placeholder="이메일"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                inputInfo(e, setEmail);
              }}
            />
            <i className="icon icon-email-w" />
          </IconIpt>
          <IconIpt>
            <BasicIpt
              type="password"
              gray={true}
              placeholder="비밀번호"
              value={password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                inputInfo(e, setPassword);
              }}
            />
            <i className="icon icon icon-lock-w" />
          </IconIpt>
          <IconIpt>
            <BasicIpt
              gray={true}
              placeholder="사용자 이름"
              value={username}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
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
