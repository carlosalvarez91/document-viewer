import styled from "styled-components";
import { Link } from "react-router-dom";

import {
  CloseIcon,
  Separator,
  Previous,
  Next,
  BreadCrumb,
} from "../../assets";


const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
`;

function IconLink({ url, icon, ariaLabel }) {
  return (
    <StyledLink to={url} aria-label={ariaLabel}>
      {icon}
    </StyledLink>
  );
}

const StyledHeading = styled.h1`
  color: var(--color-black);
  margin: 0};
  font-size: 18px;
  flex: 1;
  text-align: center;
`;

function Heading({ children }) {
  
  return (
    <StyledHeading>
      {children}
    </StyledHeading>
  );
}

export default Heading;


const Container = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  align-items: center;
  @media (max-width: 425px) {
    flex-direction: column;
  }
`;

const LinksWrapper = styled.div`
  position: absolute;
  left: 0;
  display: flex;
  align-items: center;
  @media (max-width: 425px) {
    position: relative;
  }
`;

const PreviousLinkWrapper = styled.div`
  min-width: 48px;
`;

const ParagraphWrapper = styled.div`
  font-size: 14px;
  color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;

  & p {
    min-width: 24px;
    text-align: center;
  }
`;

export function ArtboardHeader({ documentId, currentIndex, artboardsLength, name }) {

  const nextIndex = currentIndex + 1;
  const previousIndex = currentIndex - 1;
  const isFirstArtboard = currentIndex === 0;
  const isLastArtboard = currentIndex === artboardsLength - 1;

  return (
    <Container>
      <LinksWrapper>
        <IconLink
          url={`/document/${documentId}`}
          icon={<CloseIcon />}
          ariaLabel={"Return to document view"}
        />
        <Separator />
        <PreviousLinkWrapper>
          {!isFirstArtboard && (
            <IconLink
              url={`/document/${documentId}/artboard/${previousIndex}`}
              ariaLabel={"Previous artboard"}
              icon={<Previous />}
            />
          )}
        </PreviousLinkWrapper>
        <ParagraphWrapper>
          <p>{currentIndex + 1}</p>
          <BreadCrumb />
          <p>{artboardsLength}</p>
        </ParagraphWrapper>
        {!isLastArtboard && (
          <IconLink
            url={`/document/${documentId}/artboard/${nextIndex}`}
            icon={<Next />}
            ariaLabel={"Next artboard"}
          />
        )}
      </LinksWrapper>
      <Heading>
        {name}
      </Heading>
    </Container>
  );
}

