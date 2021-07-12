import React, {Component} from 'react';
import axios from 'axios';

export default class MoveStok extends Component {
    constructor(props){
        super(props);

        this.onChangeJumlah1 = this.onChangeJumlah1.bind(this);
        this.onChangeJumlah2 = this.onChangeJumlah2.bind(this);
        this.onChangeRasa1 = this.onChangeRasa1.bind(this);
        this.onChangeNama1 = this.onChangeNama1.bind(this);
        this.onChangeRasa2 = this.onChangeRasa2.bind(this);
        this.onChangeNama2 = this.onChangeNama2.bind(this);
        this.onChangeJumlahMove = this.onChangeJumlahMove.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state={
            nama1:'',
            rasa1:'',
            jumlah1:0,
            nama2:'',
            rasa2:'',
            jumlah2:0,
            jumlahmove:0,
            names:[],
        }
    }

    componentDidMount(){
        axios.get('http://localhost:5000/stok/'+this.props.match.params.id)
        .then(response =>{
            this.setState({
                nama1: response.data.nama,
                rasa1:response.data.rasa,
                jumlah1:response.data.jumlah
            })
        })
        .catch(function (error) {
            console.log(error);
          })
        
        axios.get('http://localhost:5000/toko-dorayaki/')
        .then(response =>{
            if (response.data.length > 0){
                this.setState({
                    names: response.data.map(toko => toko.nama),
                    nama2: response.data[0].nama
                })
            }
        });

    }

    onChangeRasa1(e){
        this.setState({
            rasa1: e.target.value
        });
    }

    onChangeRasa2(e){
        this.setState({
            rasa2: e.target.value
        });
    }

    onChangeNama1(e){
        this.setState({
            nama1: e.target.value
        });
    }

    onChangeNama2(e){
        this.setState({
            nama2: e.target.value
        });
    }

    onChangeJumlah1(e){
        this.setState({
            jumlah1: e.target.value
        });
    }

    onChangeJumlah2(e){
        this.setState({
            jumlah2: e.target.value
        });
    }
    onChangeJumlahMove(e){
        this.setState({
            jumlahmove: e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();
        console.log(this.state.jumlah1);
        console.log(this.state.jumlah2);

        const newstok1 = {
            nama: this.state.nama1,
            rasa: this.state.rasa1,
            jumlah: this.state.jumlah1-this.state.jumlahmove
        }
        //update the current data
        axios.post('http://localhost:5000/stok/update/'+this.props.match.params.id,newstok1)
            .then(res => console.log(res.data));

        //find target shopname and target flavor
        //if exist update
        //if not create
        var uriname = encodeURI(this.state.nama2);
        var uriflavor = encodeURI(this.state.rasa1);
        axios.get('http://localhost:5000/stok/findcomplete/'+uriname+'/'+uriflavor)
            .then(res =>{
                if (res.data.length > 0){
                    const newstok2 = {
                        nama: this.state.nama2,
                        rasa: this.state.rasa1,
                        jumlah: Number(res.data[0].jumlah) + Number(this.state.jumlahmove)
                    }
                    axios.post('http://localhost:5000/stok/update/'+res.data[0]._id,newstok2)
                        .then(res => console.log(res.data));
                }
                else{ //not found
                    const newstok2 = {
                        nama: this.state.nama2,
                        rasa: this.state.rasa1,
                        jumlah: this.state.jumlahmove
                    }
                    console.log(newstok2);
                    axios.post('http://localhost:5000/stok/add',newstok2)
                        .then(res => console.log(res.data));
                }
                window.location = '/';
            });
    }
    
    render() {
        return (
            <div>
                <h3>Move Stok</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Nama Toko: {this.state.nama1}</label>
                    </div>

                    <div className="form-group">
                        <label>Rasa Dorayaki: {this.state.rasa1}</label>
                    </div>

                    <div className="form-group">
                        <label>Jumlah: {this.state.jumlah1}</label>
                    </div>
                    <br/>
                    <div className="form-group">
                        <label>Move To: </label>
                        <select ref="UserInput"
                            required
                            className="form-control"
                            value={this.state.nama2}
                            onChange={this.onChangeNama2}>
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
                    <label>Jumlah: </label>
                    <input  type="text"
                        required
                        className="form-control"
                        value={this.state.jumlahmove}
                        onChange={this.onChangeJumlahMove}
                        />
                    </div>     
                    <br/>
                    <div className="form-group">
                        <input type="submit" value="Submit" className="btn btn-primary" />
                    </div>                   
                </form>
                <br/>
            </div>
        )
    }
}

