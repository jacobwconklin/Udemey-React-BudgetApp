
import Option from './Option';

const Options = (props) =>
    (
        <div>
        <div className='widget-header'>
            <h3 className='widget-header__title'>Your Options</h3>
            <button className='button button--link' onClick={props.handleDeleteOptions}>Remove All Options</button>
        </div>
        
        
        {props.options.length === 0 && <p className='widget__message' >Add an Option to get started!</p>}
            {
                // Another solution would be to bind handleRemoveAll above 
  
                // Key value is still needed for React components, but is not available as a prop so another 'attribute' is needed
                // map also gives you access to the index of the item
                props.options.map((option, index) => <Option key={option} optionText={option} handleDeleteOption={props.handleDeleteOption} count={index + 1}/>)
            }
        </div>
    );

export {Options as default };