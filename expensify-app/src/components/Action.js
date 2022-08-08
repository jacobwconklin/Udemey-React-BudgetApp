const Action = (props) => 
    (
        <div>
            <button 
                className="bigButton"
                onClick={props.handlePick}
                disabled={!props.hasOptions}    
            >
            What should I do?
            </button>
        </div>
    );
  
  export { Action as default };