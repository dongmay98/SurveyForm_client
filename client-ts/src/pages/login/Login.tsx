import { useState, ChangeEvent, FormEvent } from "react";
import styles from "./css/Login.module.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { IconIpt } from "../../components/input/EtcIpt";
import { BasicIpt } from "../../components/input/BasicIpt";
import { BasicBtn } from "../../components/button/BasicBtn";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

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

  const loginFn = async (email: string, password: string) => {
    const reqUrl = "http://localhost:8080/login";
    axios
      .post(reqUrl, { email, password }, { withCredentials: true })
      .then((res) => {
        console.log("로그인 성공!", res);
        alert(
          "구글폼 제작을 쉽고 빠르게! 이메일로 제출까지 한번에 제작하세요!"
        );
        alert(
          "서동현의 개인 프로젝트입니다. 참고는 좋지만 무단복제는 안됩니다!"
        );
        navigate("/main");
      })
      .catch((error) => {
        console.error("로그인 실패:", error);
        alert("로그인 실패했습니다. 이메일 또는 비밀번호를 확인하세요.");
      });
  };

  return (
    <div className={styles.pageWrap}>
      <div className={styles.contentArea}>
        <section className={styles["login-info"]}>
          <h2 className={styles["title-box"]}>구글폼제작</h2>
          <form className={styles["input-box"]} onSubmit={submitLogin}>
            <IconIpt>
              <BasicIpt
                type="text"
                placeholder="이메일"
                value={email}
                onChange={inputEmail}
              />
              <i className="icon icon icon-user-g" />
              <BasicIpt
                placeholder="비밀번호"
                type="password"
                value={password}
                onChange={inputPassword}
                required
              />
              <i className="icon icon icon-lock-g" />
            </IconIpt>

            <div className={styles.LoginJoinBtnWrap}>
              <BasicBtn wid="170px" type="submit">
                로그인
              </BasicBtn>
              <Link to="/join" className={styles.logintojoin}>
                <BasicBtn wid="170px" type="submit">
                  회원가입
                </BasicBtn>
              </Link>
            </div>
          </form>
        </section>
      </div>
      {/* <p className={styles.intro}>
        구글폼 제작을 쉽고 빠르게!
        <br /> 이메일로 제출까지 한번에 제작하세요!
      </p> */}
    </div>
  );
}
