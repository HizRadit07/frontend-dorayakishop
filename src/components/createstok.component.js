import axios from 'axios';
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class CreateStok extends Component {
    constructor(props){
        super(props);

        this.onChangeRasa = this.onChangeRasa.bind(this);
        this.onChangeNama = this.onChangeNama.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            nama:'',
            rasa:'',
            names: [],
            flavors: []
        }
    }

    componentDidMount(){
        axios.get('http://localhost:5000/dorayaki/')
            .then(response =>{
                if (response.data.length > 0){
                    this.setState({
                        flavors: response.data.map(dorayaki => dorayaki.rasa),
                        rasa: response.data[0].rasa
                    })
                }
            });
        axios.get('http://localhost:5000/toko-dorayaki/')
            .then(response =>{
                if (response.data.length > 0){
                    this.setState({
                        names: response.data.map(toko => toko.nama),
                        nama: response.data[0].nama
                    })
                }
            });
    }

    onChangeRasa(e){
        this.setState({
            rasa: e.target.value
        });
    }

    onChangeNama(e){
        this.setState({
            nama: e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();
        const stok = {
            nama: this.state.nama,
            rasa: this.state.rasa,
            jumlah: 0
        }
        axios.post('http://localhost:5000/stok/add',stok)
            .then(res => console.log(res.data))
            .then(alert("New stok submitted"));

        console.log(stok);
    }
    render() {
        return (
            <div>
                <h3>Create New Stok</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Nama Toko: </label>
                        <select ref="UserInput"
                            required
                            className="form-control"
                            value={this.state.nama}
                            onChange={this.onChangeNama}>
                                {
                                    this.state.names.map(function(name){
                                        return <option
                                            key={name}
                                            value={name}>
                                                {name}
                                            </option>;
                                    })
                                }
                            </select>
                    </div>
                    <div className="form-group">
                        <label>Rasa Dorayaki: </label>
                        <select ref="UserInput"
                            required
                            className="form-control"
                            value={this.state.rasa}
                            onChange={this.onChangeRasa}>
                                {
                                    this.state.flavors.map(function(flavor){
                                        return <option
                                            key={flavor}
                                            value={flavor}>
                                                {flavor}
                                            </option>;
                                    })
                                }
                            </select>
                    </div>
                    <br/>
                    <div className="form-group">
                        <input type="submit" value="Submit" className="btn btn-primary" />
                    </div>                   
                </form>
            </div>
        )
    }
}