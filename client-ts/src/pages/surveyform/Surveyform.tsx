import styles from './css/SurveyStyle.module.css';

export default function Surveyform() {
  return (
    <section className={styles.pageWrap}>
      <header className={styles.header}>
        <input className={styles.headTitle} placeholder="설문지 제목"/>
        <input className={styles.headExplain} placeholder="설문지 설명"/>
      </header>
      <main className='main'>
        <ul>
          <li>
            <div>
            <input type="text" placeholder="질문 제목"/>
            <select className={styles.case}>
              <option value="단답형">단답형</option>
              <option value="객관식">객관식</option>
              <option value="체크박스">체크박스</option>
            </select>
            </div>
          </li>
        </ul>
      </main>
    </section>
  );
}