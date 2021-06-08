import React ,{component} from 'react'
import axios from 'axios'

export default class UserList extends Comment {
    constructor(props) {
        super(props);

        this.state = {
            user: []
        }
    }

    

    componentDidMount() {
        axios.get('http:/localhost:4000/user')
        .then(res => {
            this.setState({
                user: res.data
            })
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    DataTable = () => {
       return this.state.user.map((res, i) => {
            return <>{this.props.res.fullname}</>
        })
    }

    render() {
        return(
            <>
            {this.DataTable()}

            </>
        )
    }
}