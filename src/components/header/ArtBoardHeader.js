import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  CloseIcon,
  Previous,
  Next,
  BreadCrumb,
} from "../../assets";
import Separator from "../Separator";

/**
 * Ideally this set of small components should be placed in separate files
 * but since they are not going to be reused they are ok here :)
 */

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

const Heading = styled.h1`
  color: var(--color-black);
  margin: 0};
  font-size: 18px;
  flex: 1;
  text-align: center;
`;

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

  const next = currentIndex + 1;
  const prev = currentIndex - 1;

  return (
    <Container>
      <LinksWrapper>
        <IconLink
          url={`/document/${documentId}`}
          icon={<CloseIcon />}
          ariaLabel={"Return to document view"}
        />
        <Separator />
        <div>
          {!currentIndex === 0 && (
            <IconLink
              url={`/document/${documentId}/artboard/${prev}`}
              ariaLabel={"Previous artboard"}
              icon={<Previous />}
            />
          )}
        </div>
        <ParagraphWrapper>
          <p>{currentIndex + 1}</p>
          <BreadCrumb />
          <p>{artboardsLength}</p>
        </ParagraphWrapper>
        {!currentIndex === artboardsLength - 1 && (
          <IconLink
            url={`/document/${documentId}/artboard/${next}`}
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

