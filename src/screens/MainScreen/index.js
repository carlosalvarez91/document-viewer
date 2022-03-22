import {useContext, useEffect} from 'react';
import { Link } from "react-router-dom";
import { HeaderContext } from '../../context/headerContext';
import DocumentHeader from '../../components/header/DocumentHeader';

const documents = [
  {id:"e981971c-ff57-46dc-a932-a60dc1804992", label:"doc 1"},
  {id: "40432a93-5434-4059-87b9-545fd1ad6ee0", label: "doc 2"}
]

export default function MainScreen() {

  const {setHeader } = useContext(HeaderContext)

  useEffect(() => {
    setHeader(<DocumentHeader header={"Documents"}/>)
  }, [])

  return <ul>{documents.map(d=><li key={d.id}><Link to={`/document/${d.id}`}>{d.label}</Link></li>)}</ul>
}

