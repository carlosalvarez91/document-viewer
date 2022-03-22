import {Fragment} from 'react'
import styled from "styled-components";
import { Link } from "react-router-dom";
import { SketchLogo } from '../../assets';

const Separator = styled.span`
        margin-right:1em;
        height: 30px;
        width: 1px;
        background: linear-gradient(
        to bottom,
        #e7e7ea00 0%,
        #e7e7ea 31.588%,
        #e7e7ea 49.952%,
        #e7e7ea 68.257%,
        #e7e7ea00 100%
        );
        opacity: 0.6;
`;

const StyledTitle = styled.h1`
    font-weight: 400;
    font-size: 16px;
    padding: 0;
    margin: 0;
`;

function Title({ children }) {
  return (
    <StyledTitle>
      {children}
    </StyledTitle>
  );
}

const LogoWrapper = styled.div`
  margin: 0 1em 0 0;
`;

export default function DocumentHeader(props){

    return <Fragment>
            <Link to="/">
                <LogoWrapper>
                    <SketchLogo />
                </LogoWrapper>
            </Link>
            <Separator/>
            <Title>{props.header}</Title>
            </Fragment>
}

