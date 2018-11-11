import React, { Component } from 'react';
import { Button, ButtonToolbar, Grid, Row, Col, Carousel } from 'react-bootstrap';
import {criminalLawAdd} from '../firebaseConfig';
class LawAdd extends React.Component {
    constructor() {
        super();
        this.state = {
            offence: '',
            punishment: '',
            bailable: '',
            compoundable: '',
            description: ''
        }
        this.offence = this.offence.bind(this);
        this.punishment = this.punishment.bind(this);
        this.Bailable = this.Bailable.bind(this);
        this.Compoundable = this.Compoundable.bind(this);
        this.Description = this.Description.bind(this);

    }

    offence(e) {
        this.setState({ offence: e.target.value });
    }


    punishment(e) {
        this.setState({ punishment: e.target.value });
    }

    Bailable(e) {
        this.setState({ bailable: e.target.value });
    }

    Compoundable(e) {
        this.setState({ compoundable: e.target.value });
    }

    Description(e) {
        this.setState({ description: e.target.value });
    }

   addL(e) {
        const { offence, punishment, bailable, compoundable, description} = this.state;
        if(!offence.length){
            alert('offence is empty');
        }
        else if(!punishment.length){
            alert('punishment is empty');
        }else if(!bailable.length){
            alert('bailable is empty');
        }else if(!compoundable.length){
            alert('compoundable is empty');
        }else if(!description.length){
            alert('description is empty')
        }else{
            try {
                let res = criminalLawAdd({offence, punishment, bailable, compoundable, description});
                this.setState({offence: '',punishment:'',bailable:'',compoundable: '',description:''});
                alert('Criminal law Added sucessfully');
                this.props.history.push('Criminal_admin/');
            } catch(e) {
                alert('Error' + e);
            }
        }
    }
    render() {

        return (
            <div>
                <h1>Insert Law here </h1>
                <form>
                <div class="form-group">
                        <div class="col-lg-10 ">
                            <div class="input-group">
                                <span class="input-group-addon"></span>
                                <input type="text" class="form-control" placeholder="Enter Offence" onChange={this.offence} required />
                            </div>
                        </div>
                    </div><br/><br/><br/>
                    <div class="form-group">
                        <div class="col-lg-10">
                            <div class="input-group">
                                <span class="input-group-addon"></span>
                                <input type="text" class="form-control" placeholder="Enter Punishment" onChange={this.punishment} required />
                            </div>
                        </div>
                    </div><br/><br/><br/>
                    <div class="form-group">
                        <div class="col-lg-10">
                            <div class="input-group">
                                <span class="input-group-addon"></span>
                                <input type="text" class="form-control" placeholder="Enter Bailable or Not" onChange={this.Bailable} required />
                            </div>
                        </div>
                    </div><br/><br/><br/>
                    <div class="form-group">
                        <div class="col-lg-10">
                            <div class="input-group">
                                <span class="input-group-addon"></span>
                                <input type="text" class="form-control" placeholder="Enter Compoundabale" onChange={this.Compoundable} required />
                            </div>
                        </div>
                    </div><br/><br/><br/>
                    <div class="form-group">
                        <div class="col-lg-10">
                            <div class="input-group">
                                <span class="input-group-addon"></span>
                                <input type="text" class="form-control" placeholder="Enter Description" onChange={this.Description} required />
                            </div>
                        </div>
                    </div><br/><br/><br/>
                    <button type="button" class="btn btn-success" onClick={() => { this.addL(this.state) }}>Add</button>


                </form>
            </div>
        )
    }
}

export default LawAdd; 