import React from 'react'

const style = (block: boolean) => ({
   

    marginTop: '10px',
    marginBottom: '10px',
    backgroundColor: '#2f2f2f',
    padding: '10px 10px',
    border: 'inset white',
    marginColor: 'black',
    color: 'white',
    borderRadius:'7px',
    margin: '10px 0px',
    fontWeight: 'bolder',
    width: block ? '100%' : undefined,
    float: block ? 'none' : 'right'
}) as React.CSSProperties

interface IBlock{
    block?: boolean
}


export default  class Button extends React.Component<IBlock>{
    public render(){
        const {block = false} = this.props
        return(
            <button {...this.props} style={style(block)}/>
        )
    }

}