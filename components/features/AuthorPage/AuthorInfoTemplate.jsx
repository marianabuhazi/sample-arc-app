import React from "react"
import Consumer from "fusion:consumer"


@Consumer
class AuthorInfoTemplate extends React.Component{
    render(){
        console.log(this.props.globalContent)
        return (<div>{JSON.stringify(this.props.globalContent)}</div>)
    }
}

export default AuthorInfoTemplate
