import {useContext, useEffect} from 'react';
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { HeaderContext } from "../../context/headerContext";
import DocumentHeader from '../../components/header/DocumentHeader';
import styled from "styled-components";
import { Link } from "react-router-dom";
import { QUERY_ARTBOARDS } from '../../graphql';

const StyledLink = styled(Link)`
  display: flex;
  color: inherit;
  text-decoration: none;
`;

function DocumentScreen() {
    const {setHeader} = useContext(HeaderContext)

    const { documentId } = useParams();
    const { loading, error, data } = useQuery(QUERY_ARTBOARDS, {
      variables: { documentId },
    });

    useEffect(() => {
      if (data) {
        setHeader(<DocumentHeader header={data.share.version.document.name}/>)
      }
    }, [data])
  
    if (loading) return <p>Loading...</p>;
    if (error){
        console.error(error)
        return <p>Error</p>
      };
    
    const artboards = data.share.version.document.artboards.entries.filter((entry) => entry.isArtboard)
    
    return <List>
            {artboards.map(({ name, files }, index) => {
              const thumbnail = files[0]?.thumbnails[1]?.url || files[1]?.thumbnail[1]?.url || "";
              return (
                <StyledLink key={`link-${index}`} to={`artboard/${index}`}>
                  <ArtboardPreview
                    name={name}
                    thumbnail={thumbnail}
                  />
                </StyledLink>
              );
            })}
          </List>;
  }
  
  export default DocumentScreen;


  const List = styled.ul`
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

function ArtboardPreview({ name, thumbnail }) {
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