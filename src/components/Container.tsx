import React from 'react'

const style = (center: boolean):React.CSSProperties => ({
    backgroundColor: 'rgb(51, 51, 51)',
    padding: '10px 15px',
    border: 'black',
    color: 'white',
    height: 'auto',
    width: 'calc(100vw - 30px)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: center ? 'center' : undefined,
    alignItems: center ? 'center' : undefined,
})

interface IContainer{
    center?: boolean
}

export default  class Container extends React.Component<IContainer>{
    public render(){
        const {children, center = false} = this.props
        return(
            <div style = {style(center)} >
                {children}
            </div>
        )
    }

}