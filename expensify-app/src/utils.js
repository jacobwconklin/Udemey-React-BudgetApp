import validator from 'validator';
// import with the ./ just for local files
// Using validator to check if an email is an email:
// console.log(validator.isEmail('test@gmail.com'))


/* Basically just keeping this file for notes: */
// "bootstrapping" is just separating components to have them live seperately. 

// ES6 updates
class OldSyntax {
    constructor() {
      // Need constructor to set up 'fields'
      this.name='miike';
      // A non-elegant solution to method binding
      this.getGreeting = this.getGreeting.bind(this);
    }
    // 
    getGreeting () {
      return `hi, my name is ${this.name}.`;
      // Method works but 'this' binding can easily be
      // broken if methodd called outside of this object
    }
  }
  console.log( (new OldSyntax()));
  
  class NewSyntax {
    // 'fields can be defined in line anywhere and without this
    name = 'james'
    // Arrow functions are always bound to the class instance.
    // They don't set their own binding they just always use whatever
    // 'this' is in scope. 
    getGreeting = () => {
      return `Hi, my name is ${this.name}`;
    }
  }
  console.log( (new NewSyntax()) );

  (<layout>
    <template />
  </layout>)
  {/* Using an open and close JSX lets you insert JSX in the middle you have access to in as the children
  prop. This is a built in prop*/}

  const Layout = (props) => {
    return (
      <div>
        <p>Header</p>
        {props.children /* This is template a JSX component passed in as a prop!! */}
        <p>footer</p>
      </div>
    );
  }
  
  const template = (
    <div>
      <h1>Page Title</h1>
      <p> This is my page</p>
    </div>
  );
  

const square = (x) => x * x;

const add = (a, b) => a + b;

const subtract = (a, b) => a-b ;

export {square, add, subtract as default }

