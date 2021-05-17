import React from "react";
import "../App.css";
import { listData } from "./Data";
import ReactDOM from 'react-dom'
import { FaCheckCircle,FaTimesCircle } from 'react-icons/fa';


class Icon extends React.Component {
  render() {
      return <h3> <FaCheckCircle FaTimesCircle />? </h3>
  }
}
// ReactDOM.render(
//   // Try changing to isLoggedIn={true}:
//   <FaCheckCircle isActive={false} />,
//   document.getElementById('root')
// );
// class Icon extends React.Component {
//     render() {
//         return <h3> <FaCheckCircle FaTimesCircle />? </h3>
//     }
// }

export const List = () => {
    return (
      <>

     <HomePageHeader />
        <div className="Lists-container">
       
          {listData.map((data, key) => {
            return (
              <div key={key}>
                <Lists
               
                  key={key}
                  firstName={data.firstName}
                  lastName={data.lastName}
                  favouriteColor ={data.favouriteColor}
                  // style={{ color: data.favouriteColor }}
                  number={data.number}
                  status={data.status}
                  typeName={data.typeName}
                />
              </div>
            );
          })}
         
        </div>
      </>
    );
  };
 
const HomePageHeader = () => {
    return (
      <header className="header">
       
      </header>
    );
  };

  const Lists = ({ firstName, lastName, favouriteColor, number, status }) => {
    if (!firstName) return <div />;
    return (
      <table>
      <tbody>
          <tr>
            <td>
          <p>   {firstName} {lastName}</p>
          
            </td>
            <td>
              <p style={{color:favouriteColor}}>{favouriteColor}</p>
            </td>
             
            <td>
          <p>   {number}</p>
            </td>
            {/* <td>
             <p style ={{textAlign:'center'}}>{status}</p> 
            </td> */}
            <td><th></th>
            <p style ={{textAlign:'center'}}>{status==="active"?( <FaCheckCircle/> ):(< FaTimesCircle/> )}</p>
            </td>
          </tr>
          </tbody>
      </table>
          
       
     
    );
  };

  export default List;