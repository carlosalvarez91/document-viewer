import {useEffect, useContext} from 'react';
import { HeaderContext } from '../../context/headerContext';
import { ArtboardHeader } from '../../components/header/ArtBoardHeader';
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useQuery } from "@apollo/client";
import { QUERY_ARTBOARDS } from '../../graphql';


export default function ArtboardScreen(){
    const {setHeader} = useContext(HeaderContext)
    const { documentId, artboardIndex } = useParams();

    const { loading, error, data } = useQuery(QUERY_ARTBOARDS, {
        variables: { documentId },
      });

    useEffect(() => {
      if (data){
        const artboards = data.share.version.document.artboards.entries
        const currentArtboard = artboards[artboardIndex]
        setHeader(<ArtboardHeader
                    documentId={documentId}
                    artboardsLength={artboards.length}
                    currentIndex={parseInt(artboardIndex)}
                    name={currentArtboard.name}
                  />)
      }
    }, [data, artboardIndex])

    if (loading) return <p>Loading...</p>;
    if (error){
        console.error(error)
        return <p>Error</p>
      };

    const artboards = data.share.version.document.artboards.entries
    const currentArtboard = artboards[artboardIndex]
    
    return <ImageWrapper>
            <Image
              src={currentArtboard.files[0].url}
              width="100%"
              height="auto"
              alt={currentArtboard.name || "Artboard"}
            />
          </ImageWrapper>
    
}

const ImageWrapper = styled.div`
  max-height: calc(100vh - var(--min-header-height));
  display: flex;
  padding: 32px;

  @media (max-width: 425px) {
    margin-top: var(--min-header-height);
  }
`;

const Image = styled.img`
  object-fit: contain;
`;

