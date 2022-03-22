import {useContext, useEffect} from 'react';
import { useQuery, gql } from "@apollo/client";
import { useParams } from "react-router-dom";
import { HeaderContext } from "../../context/headerContext";
import DocumentHeader from '../../components/header/DocumentHeader';


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


function DocumentScreen() {
    const {setHeader} = useContext(HeaderContext)
    const { documentId } = useParams();
    const { loading, error, data } = useQuery(GET_ARTBOARDS, {
      variables: { documentId },
    });

    useEffect(() => {
      if (data) setHeader(<DocumentHeader header={data.share.version.document.name}/>)
    }, [data])
  
    if (loading) return <p>Loading...</p>;
    if (error){
        console.error(error)
        return <p>Error</p>
      };
    
    return "DocumentScreen";
  }
  
  export default DocumentScreen;
  