import React, {Component} from 'react';
import axios from 'axios';

export default class EditStok extends Component {
    constructor(props){
        super(props);

        this.onChangeJumlah = this.onChangeJumlah.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state={
            nama:'',
            rasa:'',
            jumlah:0
        }
    }
    componentDidMount(){
        axios.get('http://localhost:5000/stok/'+this.props.match.params.id)
            .then(response =>{
                this.setState({
                    nama: response.data.nama,
                    rasa:response.data.rasa,
                    jumlah:response.data.jumlah
                })
            })
            .catch(function (error) {
                console.log(error);
              })

    }

    onChangeJumlah(e){
        this.setState({
            jumlah: e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();

        const stok = {
            nama: this.state.nama,
            rasa: this.state.rasa,
            jumlah: this.state.jumlah
        }

        console.log(stok);

        axios.post('http://localhost:5000/stok/update/'+this.props.match.params.id,stok)
            .then(res => console.log(res.data));
        window.location = '/';
    }

    render() {
        return (
            <div>
                <h3>Edit Stok Value</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Nama Toko: {this.state.nama}</label>
                    </div>

                    <div className="form-group">
                        <label>Rasa Dorayaki: {this.state.rasa}</label>
                    </div>

                    <div className="form-group"> 
                    <label>Jumlah: </label>
                    <input  type="text"
                        required
                        className="form-control"
                        value={this.state.jumlah}
                        onChange={this.onChangeJumlah}
                        />
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