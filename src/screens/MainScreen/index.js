import {useContext, useEffect} from 'react';
import styled from "styled-components";
import { HeaderContext } from '../../context/headerContext';
import DocumentHeader from '../../components/header/DocumentHeader';
import Thumbnail from '../../components/Thumbnail';
import StyledLink from '../../components/StyledLink';

const documents = [
  {id:"e981971c-ff57-46dc-a932-a60dc1804992", label:"Document 1", src:"https://user-images.githubusercontent.com/101482/29592647-40da86ca-875a-11e7-8bc3-941700b0a323.png"},
  {id: "40432a93-5434-4059-87b9-545fd1ad6ee0", label: "Document 2", src:"https://user-images.githubusercontent.com/101482/29592647-40da86ca-875a-11e7-8bc3-941700b0a323.png"}
]

const DocumentList = styled.ul`
  display: inline-flex;
  justify-content: space-evenly;
  flex-wrap: nowrap;
  width: 100%;
  align-content: center;
  flex-direction: row;
  align-items: center;
`

export default function MainScreen() {

  const {setHeader } = useContext(HeaderContext)

  useEffect(() => {
    setHeader(<DocumentHeader header={"Documents"}/>)
  }, [])

  return <DocumentList>
            {documents.map(d=>
                <StyledLink key={d.id} to={`/document/${d.id}`}>
                  <Thumbnail 
                  width={"100px"} 
                  name={d.label} 
                  source={d.src} 
                  key={d.id}/>
                </StyledLink>
              )
            }
        </DocumentList>
}

