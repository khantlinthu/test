import React, {Component} from 'react'
import '../App.css'

class Myclass extends Component {
    constructor(){
        super()
        this.state = {
            name:'khantlinthu',
            age:17,
            address:'mandalay'
        }
        this.changemessage = this.changemessage.bind(this)
    }
    changemessage(){
        this.setState({
            name:'yuyalwin',
            age:15,
            address:'dawei'
        }
        )
    }
    render(){
        return(
            <div className='myclasscontainer'>
                <h4 className='myclass'>{this.state.name}</h4>
                <h4 className='myclass'>{this.state.age}</h4>
                <h className='myclass'>{this.state.address}</h>
                <button className='myclass' onClick={this.changemessage}>change info</button>
            </div>
        )
    }
}

export default Myclass