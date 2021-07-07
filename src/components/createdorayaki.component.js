import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class CreateDorayaki extends Component {
    constructor(props) {
        super(props);

        this.onChangeRasa = this.onChangeRasa.bind(this);
        this.onChangeDeskripsi = this.onChangeDeskripsi.bind(this);
        this.onChangeGambar = this.onChangeGambar.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            rasa: '',
            deskripsi: '',
            gambar: ''
        }
    }
   
    onChangeRasa(e){
        this.setState({
            rasa: e.target.value
        });
    }
    onChangeDeskripsi(e){
        this.setState({
            deskripsi: e.target.value
        });
    }
    onChangeGambar(e){
        this.setState({
            gambar: e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();

        const dorayaki = {
            rasa: this.state.rasa,
            deskripsi: this.state.deskripsi,
            gambar: this.state.gambar
        }

        console.log(dorayaki);

        axios.post('http://localhost:5000/dorayaki/add',dorayaki)
            .then(res => console.log(res.data))
            .then(alert("New dorayaki submitted"));

        this.setState({
            rasa: '',
            deskripsi: '',
            gambar:''
        })
    }

    render() {
        return (
            <div>
                <h3>Create New Dorayaki</h3>
                <form onSubmit={this.onSubmit}>
                
                <div className="form-group"> 
                    <label>Rasa: </label>
                    <input  type="text"
                        required
                        className="form-control"
                        value={this.state.rasa}
                        onChange={this.onChangeRasa}
                        />
                </div>                

                <div className="form-group"> 
                    <label>Deskripsi: </label>
                    <input  type="text"
                        required
                        className="form-control"
                        value={this.state.deskripsi}
                        onChange={this.onChangeDeskripsi}
                        />
                </div>

                <div className="form-group"> 
                    <label>Gambar: </label>
                    <input  type="text"
                        required
                        className="form-control"
                        value={this.state.gambar}
                        onChange={this.onChangeGambar}
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