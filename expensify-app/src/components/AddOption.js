import React from 'react';

export default class AddOption extends React.Component {
    state = {
        error: undefined // by default there is no error
    }
    // Form sends the event here, use e.preventDefault to avoid the entire page refreshing
    handleAddOption = (e) => {
        // In here 'this' no longer refers to our class this is unbounded. 
        e.preventDefault();
        // trim removes all leading and trailling spaces
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        this.setState(() => ({
                error // Shorthand if property comes from variable with exact same name, aka error: error
        }))
  
        if (!error) {
            e.target.elements.option.value = '';
        }
    };
  
    render() {
        return (
            <div>
            {this.state.error && <p className='add-option-error'>{this.state.error}</p>}
                <form className="add-option" onSubmit={this.handleAddOption}>
                    <input className="add-option__input" type="text" name="option"/>
                    <button className="button">Add Option</button>
                </form>
            </div>
        );
    }
  }

  // export {AddOption as default};