import React from 'react'

const style ={
    backgroundColor: 'black',
    padding: '10px 10px',
    marginColor: 'black',
    color: 'white',
    borderRadius:'7px',
    marginTop: '10px',
    marginBottom: '10px',
    border: 'inset white',
    width : 'calc(100% - 27px)'
}
const spanStyle ={
    fontSize :'12px',
    textTransform: 'uppercase',
    fontWeight: 'bold',
} as React.CSSProperties

interface IInput{
    backgroundColor?: string
    placeholder?: string
    label?: string
}





export default  class Input extends React.Component<IInput>{
    
    public render(){
        const {label} = this.props
        if (label){
            return(
                <div>
                 <span style={spanStyle}>{label}</span>
                 <input {...this.props} style={style} />                
                </div>
            )
        }
        return(
           <input {...this.props} style={style} />
        )
    }

}