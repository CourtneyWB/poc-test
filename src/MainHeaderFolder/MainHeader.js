import { BrowserRouter as Router,Switch,Route,Link, BrowserRouter } from 'react-router-dom';
import classes from './MainHeader.css';
import List from '../ListFolder/List'
import Form from '../FormFolder/Form'


export default function App() {
    return (
    
      // <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link style={{color:'#333'}}to="/List">List</Link>
              </li>
              <li>
                <Link to="/Form">Form</Link>
              </li>
           
            </ul>
          </nav>
  
          {/* <Switch>
            <Route path="/List">
              <List />
            </Route>
            <Route path="/Form">
              <Form />
            </Route>
          </Switch> */}
        </div>
      // </Router>
   
    );
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