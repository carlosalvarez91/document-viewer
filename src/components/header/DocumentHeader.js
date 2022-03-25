import {Fragment} from 'react'
import styled from "styled-components";
import { Link } from "react-router-dom";
import { SketchLogo } from '../../assets';
import Separator from '../Separator';

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

