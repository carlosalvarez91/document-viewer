import {useContext, useEffect} from 'react';
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { HeaderContext } from "../../context/headerContext";
import DocumentHeader from '../../components/header/DocumentHeader';
import styled from "styled-components";
import { Link } from "react-router-dom";
import { QUERY_ARTBOARDS } from '../../graphql';
import { Spinner } from '../../assets';
import ArtboardThumbnail from '../../components/ArtboardThumbnail';
import ArtboardList from '../../components/ArtboardList';

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
  
    if (loading) return <Spinner/>;
    if (error){
        console.error(error)
        return <p>Error</p>
      };
    
    const artboards = data.share.version.document.artboards.entries.filter((entry) => entry.isArtboard)
    
    return <ArtboardList>
            {artboards.map(({ name, files }, index) => {
              const thumbnail = files[0]?.thumbnails[1]?.url || files[1]?.thumbnail[1]?.url || "";
              return (
                <StyledLink key={`link-${index}`} to={`artboard/${index}`}>
                  <ArtboardThumbnail
                    name={name}
                    thumbnail={thumbnail}
                  />
                </StyledLink>
              );
            })}
          </ArtboardList>;
  }
  
  export default DocumentScreen;