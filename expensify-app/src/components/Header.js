



const Header = (props) =>  (
        <div className="header">
          <div className="container">
            <h1 className="header__title">{props.title}</h1>
            {props.subtitle && <h2 className="header__subtitle">{props.subtitle}</h2>
            /* Now if NO props are passed in, the Title will resort to its default and the subtitle won't show */
            }
          </div>
        </div>
    );
    
  Header.defaultProps = {
    title: 'Indecision'
  }

  export { Header as default };