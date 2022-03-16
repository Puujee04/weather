import React, {useState} from 'react'
import './search.css';

export const Search = (getMapBox)=> {
    let strValue = '';
    const [string, setString] = useState(''); 
    const inputChange = (e) => {
        strValue = e.target.value;
        setString(strValue);
    }
    const clicked = ()=>{
        setString('');
        getMapBox(strValue);
    }
    return(
        <div className="search flex aling-center">
            <input type={'search'} onChange={(e)=>{inputChange(e)}} value={string}></input>
            <button onClick={clicked}><img src='../search.jpg' width='100%' height='100%'></img></button>
        </div>
    )
}