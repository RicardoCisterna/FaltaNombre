import React from 'react'

const style ={
    backgroundColor: 'black',
    padding: '10px 15px',
    border: 'black',
    marginColor: 'black',
    color: 'white',
    borderRadius:'7px',
    margin: '10px',
    alignContent: 'center',
    borderBottom: 'inset 1px #171717'
    
    
} as React.CSSProperties


export default  class Title extends React.Component{
    public render(){
       
        return(
           <h2 {...this.props} style={style}/>
        )
    }

}