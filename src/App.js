import logo from './logo.svg';
import './App.css';
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
function App() {

  const { loading, error, data } = useQuery(GET_ARTBOARDS, {
    variables: { documentId: "e981971c-ff57-46dc-a932-a60dc1804992" },
  });

  if (loading) return <p>Loading...</p>;
  if (error){
      console.log(error)
     return <p>Error :</p>
    };

   console.log(data)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
