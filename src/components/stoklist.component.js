import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';


const Stok = props => (
    <tr>
        <td>{props.stok.nama}</td>
        <td>{props.stok.rasa}</td>
        <td>{props.stok.jumlah}</td>
        <td><Link to={"/edit/"+props.stok._id}>edit jumlah</Link></td>
    </tr>
)

export default class StokList extends Component {
    constructor(props){
        super(props);

        this.state = {stocks: []};
    }
    componentDidMount(){
        axios.get('http://localhost:5000/stok/')
            .then(response => {
                this.setState({stocks: response.data})
            })
            .catch((error)=>{
                console.log(error);
            })
    }
    stokList(){
        return this.state.stocks.map(currentstok => {
            return <Stok stok={currentstok} key={currentstok._id}/>
        })
    }

    render() {
        return (
            <div>
                <h3>Stok List</h3>
                <table className="table">
                    <thead className="thead">
                        <tr>
                            <th>Nama Toko</th>
                            <th>Rasa Dorayaki</th>
                            <th>Jumlah Stok</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.stokList()}
                    </tbody>
                </table>
            </div>
        )
    }
}