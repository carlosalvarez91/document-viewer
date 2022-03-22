import React from "react";
import styled from "styled-components";
import HeaderWrapper from "./components/header/HeaderWrapper";

const ContentWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
text-align: center;
flex-direction: column;
min-height: 50vh;
margin-top: var(--min-header-height);
`;

export default function Layout (props) {
    return  <React.Fragment>
                <HeaderWrapper/>
                <ContentWrapper>
                    {props.children}
                </ContentWrapper>
            </React.Fragment>
}


