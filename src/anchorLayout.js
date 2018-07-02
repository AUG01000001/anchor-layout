import React, { Component } from 'react';
import './anchorLayout.css';

class TestBox extends Component {
    render() {
        return (
            <div className="c" />
        );
    }
}

class Anchor extends Component {

    constructor() {
        super();
        this.state = {
            innerCompos: Array(9).fill(null),
        }
    }

    componentDidMount() {
        this.props.setAnchor(this);
    }

    insertCompo(compo, position) {
        const innerCompos = this.state.innerCompos.slice();
        innerCompos[position] = compo;
        this.setState( {innerCompos: innerCompos} );
    }

    insertTestBox(position) {
        const testBox = <TestBox />;
        this.insertCompo(testBox, position);
    }

    static get L_T() { return 0; }
    static get M_T() { return 1; }
    static get R_T() { return 2; }
    static get L_M() { return 3; }
    static get M_M() { return 4; }
    static get R_M() { return 5; }
    static get L_B() { return 6; }
    static get M_B() { return 7; }
    static get R_B() { return 8; }

    render(props) {
        return (
        <div className='container'>
        <div className='first-box'>
            <div className='f'>{this.state.innerCompos[0]}</div>
            <div className='m'>{this.state.innerCompos[1]}</div>
            <div className='e'>{this.state.innerCompos[2]}</div>
        </div>
        <div className='medial-box'>
            <div className='f'>{this.state.innerCompos[3]}</div>
            <div className='m'>{this.state.innerCompos[4]}</div>
            <div className='e'>{this.state.innerCompos[5]}</div>
        </div>
        <div className='end-box'>
            <div className='f'>{this.state.innerCompos[6]}</div>
            <div className='m'>{this.state.innerCompos[7]}</div>
            <div className='e'>{this.state.innerCompos[8]}</div>
        </div>
        </div>
        );
    }
}

export default Anchor;