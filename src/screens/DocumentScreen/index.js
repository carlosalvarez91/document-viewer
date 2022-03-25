import {useContext, useEffect} from 'react';
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { HeaderContext } from "../../context/headerContext";
import DocumentHeader from '../../components/header/DocumentHeader';
import { QUERY_ARTBOARDS } from '../../graphql';
import { Spinner } from '../../assets';
import ArtboardList from '../../components/ArtboardList';
import Thumbnail from '../../components/Thumbnail';
import StyledLink from '../../components/StyledLink';


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
              const source = files[0]?.thumbnails[1]?.url || files[1]?.thumbnail[1]?.url || "";
              return (
                <StyledLink key={`link-${index}`} to={`artboard/${index}`}>
                  <Thumbnail
                    name={name}
                    source={source}
                  />
                </StyledLink>
              );
            })}
          </ArtboardList>;
  }
  
  export default DocumentScreen;