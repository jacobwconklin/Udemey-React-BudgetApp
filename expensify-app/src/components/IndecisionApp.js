import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import React from 'react';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {

    state = {
        options: [],
        selectedOption: undefined // Used for modals
    };

    handleDeleteOptions = () => {
        this.setState(() => ({
            options: [] 
        })); 
    };
    
    handlePick = () => {
        const randomNum=Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(() => ({selectedOption: option}));
    };

    handleClearSelectedOption = () => {
        this.setState(() => ({selectedOption: undefined}));
    };

    handleDeleteOption = (option) => {
        // opt => {option !== opt})
        console.log('got back to handleDeleteOption with param ' + option);
        this.setState((prevState) => ({
            options: prevState.options.filter(opt => opt !== option)
        }));
    };

    handleAddOption = (option) => {
        if (!option) {
            // case of empty string
            return 'Enter valid value to add item'; // Will get communicated back to addOption method
        } else if (this.state.options.indexOf(option) > -1) {
            // Found a match, string is already in array
            return 'This option already exists';
        }
        // console.log('option passed up is ' + option);
        this.setState((prevState) => ({
                // Dont't want to push or directly manipulate state or prev state, just 
                // figure our new value seperately
                options: prevState.options.concat([option])
        }))
    };

    componentDidMount () {
        console.log('component did mount');
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if (options) {
                this.setState(() => ({ options }));
            }
        } catch(e) {
            // Do nothing
        }
        
    }

    componentDidUpdate (prevProps, prevState) {
        // Fires if state and props are modified, even if returned
        // to the same values
        if (prevState.options.length !== this.state.options.length)
        {
            // Convert options array to JSON to store in local storage
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
        console.log('component did update');
        // used for storing data
    }

    componentWillUnmount() {
        console.log('component died');
    }
    
    render () {
        // Setting value of props, props are passed to a component basically
        // as a JSON. 
        // const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer';
  
        return (
            <div>
            <Header subtitle={subtitle} />
                <div className='container' >
                    <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick}/>
                    <div className='widget'>
                        <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions} handleDeleteOption={this.handleDeleteOption}/>
                        <AddOption handleAddOption={this.handleAddOption}/>
                    </div>
                </div>
            <OptionModal 
                selectedOption={this.state.selectedOption}
                handleClearSelectedOption={this.handleClearSelectedOption}
            />
            </div>
        );
    }
  }

  IndecisionApp.defaultProps = { // Used to configure DEFAULT options
    options: []
  }