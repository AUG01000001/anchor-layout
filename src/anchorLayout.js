import React, { Component } from 'react';
import LinkedList from './utils/LinkedList';
import './anchorLayout.css';

function TestBox() {
    return <div className="c" />
}

function InnerCompoContainer(props) {
    return props.compo;
}

class AnchorLayout extends Component {
    static get L_T() { return 0; }
    static get M_T() { return 1; }
    static get R_T() { return 2; }
    static get L_M() { return 3; }
    static get M_M() { return 4; }
    static get R_M() { return 5; }
    static get L_B() { return 6; }
    static get M_B() { return 7; }
    static get R_B() { return 8; }

    constructor(props) {
        super();
        this.localKeys = Array(9).fill(0);
        this.state = {
            anchors: this.initAnchors(props),
        }
    }

    innerCompo(position, compo) {
        return {
            key: this.localKeys[position]++,
            compo: compo
        }
    }

    initAnchors(props) {
        let anchors = Array(9);
        if('init' in props && props.init instanceof Array) {
            for(let i = 0; i < 9; i++) {
                if(props.init[i] instanceof Array) {
                    anchors[i] = props.init[i];
                }else if(props.init[i] instanceof Object){
                    anchors[i] = [props.init[i]];
                }else {
                    anchors[i] = [];
                }
            }
        }else {
            for (let i = 0; i < 9; i++){ 
                anchors[i] = [];
            }
        }
        return anchors;
    }

    insertCompo(compo, position) {
        const anchors = this.state.anchors.slice();
        anchors[position].push(compo);
        this.setState({anchors: anchors});
    }

    insertTestBox(position) {
        const testBox = <TestBox />;
        this.insertCompo(testBox, position);
    }

    render() {
        const anchors = Array(9);
        for(let i = 0; i < 9; i++) {
            anchors[i] = this.state.anchors[i].map((compo) => {
                return <InnerCompoContainer compo={compo} />
            })
        }
        return (
        <div className='container'>
        <div className='first-box'>
            <div className='f'>{anchors[0]}</div>
            <div className='m'>{anchors[1]}</div>
            <div className='e'>{anchors[2]}</div>
        </div>
        <div className='medial-box'>
            <div className='f'>{anchors[3]}</div>
            <div className='m'>{anchors[4]}</div>
            <div className='e'>{anchors[5]}</div>
        </div>
        <div className='end-box'>
            <div className='f'>{anchors[6]}</div>
            <div className='m'>{anchors[7]}</div>
            <div className='e'>{anchors[8]}</div>
        </div>
        </div>
        );
    }
}

export default AnchorLayout;