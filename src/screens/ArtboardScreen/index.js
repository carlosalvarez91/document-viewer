import {useEffect, useContext} from 'react';
import { HeaderContext } from '../../context/headerContext';

export default function ArtboardScreen(){

    const {setHeader} = useContext(HeaderContext)

    useEffect(() => {
        setHeader("artboard")
    }, [])

    return 'ArtboardScreen'
}