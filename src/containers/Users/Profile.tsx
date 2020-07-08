import React from 'react'
import Container from '../../components/Container'
import UserImg from '../../components/UserImg'
import Button from '../../components/Button'

const style = {
    display : 'flex',
    justifyContent: 'space-between'

} as React.CSSProperties


export default class Profile extends React.Component{
    public render(){
        return(
            <Container>
                <div style={style}>
                    <UserImg UserImage={'https://img-9gag-fun.9cache.com/photo/a0NNpeL_460swp.webp'} />
                    <Button > subir </Button>
                    </div>

            </Container>
        )
    }
}