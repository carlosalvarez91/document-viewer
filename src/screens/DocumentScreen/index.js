import {
    useQuery,
    gql
  } from "@apollo/client";
  
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
  
    const { loading, error, data } = useQuery(GET_ARTBOARDS, {
      variables: { documentId: "e981971c-ff57-46dc-a932-a60dc1804992" },
    });
  
    if (loading) return <p>Loading...</p>;
    if (error){
        console.error(error)
       return <p>Error :</p>
      };
  
     console.log(data)
  
    return "working";
  }
  
  export default DocumentScreen;
  