import { useQuery, gql } from "@apollo/client";
import { useParams } from "react-router-dom";

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
    const { documentId } = useParams();
    const { loading, error, data } = useQuery(GET_ARTBOARDS, {
      variables: { documentId },
    });
  
    if (loading) return <p>Loading...</p>;
    if (error){
        console.error(error)
       return <p>Error :</p>
      };
  
     console.log(data)
  
    return "DocumentScreen";
  }
  
  export default DocumentScreen;
  