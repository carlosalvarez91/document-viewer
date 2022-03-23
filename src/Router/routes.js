import MainScreen from "../screens/MainScreen";
import DocumentScreen from "../screens/DocumentScreen";
import ArtboardScreen from "../screens/ArtboardScreen";

const routes = [
  {element: <MainScreen /> , path: "/"},
  {element: <DocumentScreen /> , path: "document/:documentId"},
  {element: <ArtboardScreen /> , path: "document/:documentId/artboard/:artboardIndex"}
];

export default routes;