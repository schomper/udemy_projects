import React, { Component } from 'react';

const DEFAULT_DRAGON = {
        dragonId: '',
        nickname: '',
        generationId: '',
        birthdate: '',
        traits: []
    }

class Dragon extends Component {
    state = { dragon: DEFAULT_DRAGON };

    componentDidMount() {
        this.fetchDragon();
    }

    fetchDragon = () => {
        fetch('http://localhost:3000/dragon/new')
            .then (response => response.json())
            .then(json => {
                console.log('json', json);
                
                this.setState({
                    dragon: json.dragon
                });
            })
            .catch(error => console.error('error', error));   
    }

    render() {
        const { dragon }  = this.state;

        return (
            <div>
                <span>G{dragon.generationId}.</span>
                <span>I{dragon.dragonId}. </span>

                { dragon.traits.map(trait => trait.traitValue).join(', ') }
            </div>
        )
    }
}

export default Dragon;