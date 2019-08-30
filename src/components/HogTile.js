import React, { Component } from 'react';


class HogTile extends Component {
    state = {  }

    
    render() { 
        function handleClick(e) {
            e.preventDefault();
            
                console.log()
        
        }

        const listPorkers = this.props.porkers.map(porky => <div onClick={handleClick} className="pigTile">
            <img src={require(`../hog-imgs/${porky.name.split(' ').join('_').toLowerCase()}.jpg`)}/>
            <p>{porky.name}</p>
            <div className="description">
                <p>Specialty:{porky.specialty}</p>
                <p>Weight:{porky.weight}</p>
            </div>
            </div>)

        return ( 
            
                <div>{listPorkers}</div> 
                );
    }
}

export default HogTile;