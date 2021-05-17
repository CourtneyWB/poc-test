import { BrowserRouter as Router,Switch,Route,Link, BrowserRouter } from 'react-router-dom';
import classes from './MainHeader.css';


export default function App() {
    return (
        <BrowserRouter>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/List">List</Link>
              </li>
              <li>
                <Link to="/Form">Form</Link>
              </li>
           
            </ul>
          </nav>
  
          <Switch>
            <Route path="/List">
              <List />
            </Route>
            <Route path="/Form">
              <Form />
            </Route>
          </Switch>
        </div>
      </Router>
      </BrowserRouter>
    );
  }
  
  function List() {
    return <h2>List</h2>;
  }
  
  function Form() {
    return <h2>Form</h2>;
  
  }
  

// const MainHeader = () => {
// return (
// <header className={classes.header}>
//     <nav>
//         <ul>
//             <li><NavLink activeClassName={classes.active}to="/Stuff">Stuff</NavLink></li>
// <li><NavLink activeClassName={classes.active}to="/form">Form</NavLink></li>


//         </ul>
//     </nav>
// </header>
// );
// };
// export default MainHeader;