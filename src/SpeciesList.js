import React from 'react'
import {Component} from 'react';
import { Link } from 'react-router-dom';
import SpeciesData from './SpeciesData';
class SpeciesList extends Component {
    render() {
        return this.props.allSpecies.map((species, i) => {
            return (
                <div key={i}>
                    {i + 1} 
                    <Link to={"species/" + species.id}>{species.name} </Link>
                </div>);
        })
    }
}
export default SpeciesList;