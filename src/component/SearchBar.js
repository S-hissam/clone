import React from 'react'


class SearchBar extends React.Component {
    state = { term: '' };
    
    onFormSubmit(event) {
        event.preventDefault();
        console.log( (event)=> this.state.term);
    }
    
    render() {
        return <div className="ui segment">
                     <form className="ui form" onSubmit={this.onFormSubmit}>
                         <div className="field">
                            <label>Searchbar</label>
                    <input
                        type="text"
                        value={this.state.term}
                        onChange={e => this.setState({ term: e.target.value.toUpperCase()})} />
                         </div>
                        </form>
                </div>
    }
}


export default SearchBar