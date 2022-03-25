
import styled from "styled-components";

const StyledPreview = styled.div`
text-align: center;
display: flex;
flex-direction: column;
justify-content: space-between;
cursor:pointer;

& > div {
  display: flex;
  flex-grow: 1;
  align-items: center;
}
`;

export default function ArtboardThumbnail({ name, thumbnail }) {
return (
    <StyledPreview>
      <div>
        <img
          src={thumbnail}
          alt={`${name} preview`}
          width="100%"
          height="auto"
        />
      </div>
      <p>{name}</p>
    </StyledPreview>
);
}