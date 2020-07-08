import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUser,faHome } from "@fortawesome/free-solid-svg-icons";


const style={
    padding: '20px',
    backgroundColor: 'black',
    color: 'white',
    display: 'flex',
    justifyContent: 'space-between'


} as React.CSSProperties


export default class NavBar extends React.Component{
    public render(){
        return(
            <div style={style} >         
                <FontAwesomeIcon style={{float:'left', marginRight:'10px'}} icon={faHome} color={"#2f2f2f"}/>
                <span style={{fontSize:'bolder'}}> FALTA EL TITULO </span>
                <FontAwesomeIcon style={{float:'right'}} icon={faUser} color={"#2f2f2f"} />
            </div>
        )
    }
}