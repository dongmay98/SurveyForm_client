import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/index";
import styles from "./css/SurveyStyle.module.css";
import {
  Header,
  HeadTitle,
  HeadExplain,
} from "../../components/header/HeaderStyle";
import { setTitle, setDesc } from "../../store/surveySlice";
import MainContainer from "./main/MainContainer";
import Sidebar from "./sidebar/Sidebar";

export default function SurveyForm() {
  const dispatch = useDispatch();
  const survey = useSelector((state: RootState) => state.survey);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setTitle({ surveyTitle: e.target.value }));
  };

  const handleDescChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setDesc({ desc: e.target.value }));
  };

  return (
    <section className={styles.pageWrap}>
      <Header>
        <HeadTitle
          placeholder="설문지 제목"
          value={survey.surveyTitle}
          onChange={handleTitleChange}
        />
        <HeadExplain
          placeholder="설문지 설명"
          value={survey.desc}
          onChange={handleDescChange}
        />
      </Header>
      <MainContainer />
      <Sidebar />
    </section>
  );
}
