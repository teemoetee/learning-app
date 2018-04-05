import React from 'react';
import { Component } from 'react';

class SpeciesData extends Component {
    constructor(props) {
        super();
        this.state = props.allSpecies.find(species => {
            return props.match.params.id == species.id;
        })
        if (this.state === undefined) {
            this.state = {
                name: "",
                language: "",
                eye_colors: "",
                classification: "",
                average_lifespan: "",
                skin_colors: ""
            }
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log("component updated")
        this.setState({...nextProps.allSpecies.find(species => {
            return nextProps.match.params.id == species.id;
        })})
    }
    
    render() {
        return (
            <div> 
                Name: {this.state.name}<br />
                Language: {this.state.language}<br />
                Eye Color: {this.state.eye_colors}<br />
                Classification: {this.state.classification}<br />
                Life Span: {this.state.average_lifespan}<br />
                Skin Color: {this.state.skin_colors}<br />
            </div>
        )
    }
}
export default SpeciesData;