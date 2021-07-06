import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class CreateStok extends Component {
    constructor(props){
        super(props);

        this.state = {
            nama:'',
            rasa:'',
            names: [],
            flavors: []
        }
    }
    render() {
        return (
            <div>
                <p> this is the Create Stok component</p>
            </div>
        )
    }
}