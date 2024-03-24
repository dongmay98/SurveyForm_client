import React, { useState, useRef } from 'react';
import styles from './css/SurveyStyle.module.css';

type OptionType = {
  id: number;
  text: string;
};

export default function SurveyForm() {
  const [options, setOptions] = useState<OptionType[]>([{ id: 1, text: '옵션1' }]);
  const [mainElements, setMainElements] = useState<React.ReactElement[]>([]);

  const addOption = () => {
    const newOptionId = options[options.length - 1].id + 1;
    setOptions([...options, { id: newOptionId, text: `옵션${newOptionId}` }]);
  };

  const updateOptionText = (id: number, text: string) => {
    setOptions(options.map(option => (option.id === id ? { ...option, text } : option)));
  };

  const deleteOption = (id: number) => {
    if (options.length > 1) {
      setOptions(options.filter(option => option.id !== id));
    } else {
      alert("최소 한개이상의 옵션이 필요합니다.");
    }
  };

  const copyMainElement = () => {
    const mainElement = (
      <li className={styles.mainList}>
        <div className={styles.titleSelect}>
          <input type="text" placeholder="질문 제목" />
          <select className={styles.case}>
            <option value="단답형">단답형</option>
            <option value="객관식">객관식</option>
            <option value="체크박스">체크박스</option>
          </select>
        </div>
        <div className={styles.optionContainer}>
          <ul>
            {options.map(option => (
              <li key={option.id}>
                <input
                  className={styles.option}
                  type="text"
                  value={option.text}
                  onChange={e => updateOptionText(option.id, e.target.value)}
                />
                <button className={styles.deleteOption} onClick={() => deleteOption(option.id)}>
                  X
                </button>
              </li>
            ))}
          </ul>
          <button className={styles.addOption} onClick={addOption} type="button">
            옵션 추가
          </button>
        </div>
        <div className={styles.copyPasteContainer}>
          <button onClick={copyMainElement}>복사</button>
          <button>삭제</button>
        </div>
      </li>
    );

    setMainElements([...mainElements, React.cloneElement(mainElement)]);
  };

  return (
    <section className={styles.pageWrap}>
      <header className={styles.header}>
        <input className={styles.headTitle} placeholder="설문지 제목" />
        <input className={styles.headExplain} placeholder="설문지 설명" />
      </header>
      <main className={styles.main}>
        <ul>
          <li className={styles.mainList}>
            <div className={styles.titleSelect}>
              <input type="text" placeholder="질문 제목" />
              <select className={styles.case}>
                <option value="단답형">단답형</option>
                <option value="객관식">객관식</option>
                <option value="체크박스">체크박스</option>
              </select>
            </div>
            <div className={styles.optionContainer}>
              <ul>
                {options.map(option => (
                  <li key={option.id}>
                    <input
                      className={styles.option}
                      type="text"
                      value={option.text}
                      onChange={e => updateOptionText(option.id, e.target.value)}
                    />
                    <button className={styles.deleteOption} onClick={() => deleteOption(option.id)}>
                      X
                    </button>
                  </li>
                ))}
              </ul>
              <button className={styles.addOption} onClick={addOption} type="button">
                옵션 추가
              </button>
            </div>
            <div className={styles.copyPasteContainer}>
              <button onClick={copyMainElement}>복사</button>
              <button>삭제</button>
            </div>
          </li>
        </ul>
        {mainElements.map((element, index) => React.cloneElement(element, { key: index }))}
      </main>
    </section>
  );
}