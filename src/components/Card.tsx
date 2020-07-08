import React from 'react'

const style ={
    backgroundColor: 'black',
    padding: '10px 15px',
    border: 'black',
    marginColor: 'black',
    color: 'white',
    borderRadius:'7px',
    margin: '10px',
    
}


export default  class Card extends React.Component{
    public render(){
        const {children} = this.props
        return(
            <div style = {style} >
                {children}
            </div>
        )
    }

}