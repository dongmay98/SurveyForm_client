import styled from 'styled-components'

const Main = styled.div`
  width: 100%;
  position: relative;
`;

const MainList = styled.li`
  position: relative;
  border: 1px solid lightgrey;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  margin-bottom: 10px;
  padding: 10px;
  background-color: white;
`;

const TitleSelect = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 5px;
`;

const TitleInput = styled.input`
  font-size: 18px;
  outline: none;
  border: none;
  width: 100%;
  padding: 5px;
`;

const CaseSelect = styled.select`
  position: relative;
  font-size: 14px;
  bottom: 5px;
  padding: 3px;
  width: 250px;
  height: 50px;
  outline: none;
  border: 1px solid lightgrey;
  border-radius: 5px;
`;

const OptionContainer = styled.div`
  width: 100%;
  padding: 5px;
  border-bottom: 1px solid lightgrey;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const OptionInput = styled.input`
  outline: none;
  border: none;
  width: 100%;
  padding: 5px;
  font-size: 14px;
`;

const AddOptionButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px;
  border-radius: 15px;
  font-size: 14px;
  width: 70px;
  height: 30px;
  color: black;
  cursor: pointer;
  transition: background-color 0.5s ease-in-out;
  border: none;
  &:hover {
    background-color: orange;
    color: white;
  }
`;

const CopyPasteContainer = styled.div`
  padding: 10px;
  margin-top: 6px;
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const ActionButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  padding: 2px;
  border-radius: 15px;
  font-size: 14px;
  width: 50px;
  height: 30px;
  color: black;
  background-color: white;
  cursor: pointer;
  transition: background-color 0.5s ease-in-out;
  &:hover {
    background-color: orange;
    color: white;
  }
`;

const DeleteOptionButton = styled(ActionButton)`
  width: 30px;
  height: 30px;
`;

export {ActionButton,AddOptionButton,CaseSelect,CopyPasteContainer,DeleteOptionButton,Main,MainList,OptionContainer,OptionInput,TitleInput,TitleSelect} ;