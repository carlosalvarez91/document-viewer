import styled from "styled-components";

const ArtboardList = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
  flex-wrap: wrap;
  max-width: var(--max-width-content);
  justify-content: space-between;

  @media (max-width: 768px) {
    justify-content: center;
  }

  & li {
    padding: 24px;
    display: flex;
  }
`;
export default ArtboardList