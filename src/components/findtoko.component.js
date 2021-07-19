import React, {Component} from 'react';
import axios from 'axios';


const Toko = props => (
    <tr>
        <td>{props.toko.nama}</td>
        <td>{props.toko.jalan}</td>
        <td>{props.toko.kecamatan}</td>
        <td>{props.toko.provinsi}</td>
    </tr>
)


export default class FindToko extends Component{
    constructor(props){
        super(props);

        this.onChangeQuery = this.onChangeQuery.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state={
            query:'',
            shops:[]
        }
    }

    componentDidMount(){
        axios.get('http://localhost:5000/toko-dorayaki/')
            .then(response => {
                this.setState({shops: response.data})
            })
            .catch((error)=>{
                console.log(error);
            })
    }

    tokoList(){
        return this.state.shops.map(currentshop => {
            if (currentshop.provinsi === this.state.query || currentshop.kecamatan === this.state.query){
            return <Toko toko={currentshop} key={currentshop._id}/>
            }
        })
    }
    onChangeQuery(e){
        this.setState({
            query: e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();
    }

    render(){
        return (
            <div>
                <h3>Find Toko</h3>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group"> 
                        <label>Search: </label>
                        <input  type="text"
                            required
                            className="form-control"
                            value={this.state.query}
                            onChange={this.onChangeQuery}
                            />
                        </div>
                    </form>
                    <br/>
                    <table className="table">
                    <thead className="thead">
                        <tr>
                            <th>Nama Toko</th>
                            <th>Jalan</th>
                            <th>Kecamatan</th>
                            <th>Provinsi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.tokoList()}
                    </tbody>
                    </table>
            </div>
        )
    }
}