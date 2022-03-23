import {useEffect, useContext} from 'react';
import { HeaderContext } from '../../context/headerContext';
import { ArtboardHeader } from '../../components/header/ArtBoardHeader';
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useQuery, gql } from "@apollo/client";


export const GET_ARTBOARDS = gql`
  query getArtboards($documentId: ID!) {
    share(id: $documentId) {
      identifier
      version {
        document {
          name
          artboards {
            entries {
              name
              isArtboard
              files {
                url
                height
                width
                scale
                thumbnails {
                  url
                  height
                  width
                }
              }
            }
          }
        }
      }
    }
  }
  `;

export default function ArtboardScreen(){

    const {setHeader} = useContext(HeaderContext)
    const { documentId, artboardIndex } = useParams();

    const { loading, error, data } = useQuery(GET_ARTBOARDS, {
        variables: { documentId },
      });

    useEffect(() => {
        setHeader("artboard header")
    }, [])

    if (loading) return <p>Loading...</p>;
    if (error){
        console.error(error)
        return <p>Error</p>
      };

    const documents = data.share.version.document.artboards.entries
    const artboard = documents[artboardIndex]
    const artboardUrl = artboard.files[0].url;

    return (
      <ImageWrapper>
        <Image
          src={artboardUrl}
          width="100%"
          height="auto"
          alt={artboard.name || "Artboard"}
        />
      </ImageWrapper>
    );
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

