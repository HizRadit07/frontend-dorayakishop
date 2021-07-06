import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class CreateToko extends Component {
    constructor(props){
        super(props);

        this.onChangeNama = this.onChangeNama.bind(this);
        this.onChangeJalan = this.onChangeJalan.bind(this);
        this.onChangeKecamatan = this.onChangeKecamatan.bind(this);
        this.onChangeProvinsi = this.onChangeProvinsi.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            nama: '',
            jalan: '',
            kecamatan: '',
            provinsi:''
        }
    }

    onChangeNama(e){
        this.setState({
            nama: e.target.value
        });
    }
    onChangeJalan(e){
        this.setState({
            jalan: e.target.value
        });
    }
    onChangeKecamatan(e){
        this.setState({
            kecamatan: e.target.value
        });
    }
    onChangeProvinsi(e){
        this.setState({
            provinsi: e.target.value
        });
    }
    onSubmit(e){
        e.preventDefault();

        const newtoko = {
            nama : this.state.nama,
            jalan : this.state.jalan,
            kecamatan : this.state.kecamatan,
            provinsi : this.state.provinsi
        }

        console.log(newtoko);

        this.setState({
            nama: '',
            jalan: '',
            kecamatan:'',
            provinsi:''
        })
    }
    render() {
        return (
            <div>
                <h3>Create New Toko Dorayaki</h3>
                <form onSubmit={this.onSubmit}>
                
                <div className="form-group"> 
                    <label>Nama: </label>
                    <input  type="text"
                        required
                        className="form-control"
                        value={this.state.nama}
                        onChange={this.onChangeNama}
                        />
                </div>                

                <div className="form-group"> 
                    <label>Jalan: </label>
                    <input  type="text"
                        required
                        className="form-control"
                        value={this.state.jalan}
                        onChange={this.onChangeJalan}
                        />
                </div>

                <div className="form-group"> 
                    <label>Kecamatan: </label>
                    <input  type="text"
                        required
                        className="form-control"
                        value={this.state.kecamatan}
                        onChange={this.onChangeKecamatan}
                        />
                </div>

                <div className="form-group"> 
                    <label>Provinsi: </label>
                    <input  type="text"
                        required
                        className="form-control"
                        value={this.state.provinsi}
                        onChange={this.onChangeProvinsi}
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