import React from 'react'

const style ={
    color: '#8585ff',
    fontSize: '15px',
    padding: '10px',
    float: 'left',
    fontWeight: 600,

    
} as React.CSSProperties


export default  class Link extends React.Component{
    public render(){
        return(
            <a {...this.props} style={style}/>
        )
    }

}