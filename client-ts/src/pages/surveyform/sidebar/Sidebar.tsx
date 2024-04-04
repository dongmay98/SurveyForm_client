import styled from "styled-components";
import addIcon from "../../../assets/icons/icon_add.svg";
import sampleIcon from "../../../assets/icons/icon_sample.svg";

const SidebarContainer = styled.div`
  width: 50px;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  position: absolute;
  top: 170px;
  right: -60px;
  background-color: white;
  border-radius: 5px;
`;

const IconButton = styled.button`
  border: none;
  padding: 2px;
  cursor: pointer;
  transition: background-color 0.5s ease-in-out;
  &:hover {
    filter: invert(56%) sepia(81%) saturate(583%) hue-rotate(0deg)
      brightness(103%) contrast(105%);
  }
  background: none;
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <IconButton>
        <img src={addIcon} alt="Add Icon" width={"30px"} />
      </IconButton>
      <IconButton>
        <img src={sampleIcon} alt="Sample Icon" width={"35px"} />
      </IconButton>
    </SidebarContainer>
  );
};

export default Sidebar;
