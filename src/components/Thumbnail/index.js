
import styled from "styled-components";

const StyledPreview = styled.div`
text-align: center;
display: flex;
flex-direction: column;
justify-content: space-between;
cursor:pointer;
width:${(props) => props.width || '100%'};

& > div {
  display: flex;
  flex-grow: 1;
  align-items: center;
}
`;

export default function Thumbnail({ name, source, width }) {
return (
    <StyledPreview width={width}>
      <div>
        <img
          src={source}
          alt={`${name} preview`}
          width="100%"
          height="auto"
        />
      </div>
      <p>{name}</p>
    </StyledPreview>
);
}