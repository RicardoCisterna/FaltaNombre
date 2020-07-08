import React from 'react'

const style ={
  textAlign:'center'

} as React.CSSProperties


export default  class Center extends React.Component{
    public render(){
        const {children} = this.props
        return(
            <div style = {style} >
            {children}
        </div>
        )
    }

}