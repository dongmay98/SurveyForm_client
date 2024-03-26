import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/index';
import styles from './css/SurveyStyle.module.css';
import {Header,HeadTitle,HeadExplain} from '../../components/header/HeaderStyle'
import {
  setTitle,
  setDesc,
  setQuestionTitle,
  setQuestionType,
  setQuestionOptionText,
  addQuestionOption,
  deleteQuestionOption,
  copyQuestion,
  deleteQuestion,
  addQuestion,
} from '../../store/surveySlice';// SurveySlice
import MainContainer from './main/MainContainer';

export default function SurveyForm() {
  const dispatch = useDispatch();
  // 스토어의 survey 상태를 선택하기 위해 RootState 타입을 사용합니다.
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
      <MainContainer/>

    </section>
  );
}
