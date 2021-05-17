import React from "react";
import "./App.css";
import { listData } from "./Data";
import { FaCheckCircle,FaTimesCircle } from 'react-icons/fa';


class Icon extends React.Component {
    render() {
        return <h3> Lets go for a <FaCheckCircle />? </h3>
    }
}

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
                  favouriteColor={data.favouriteColor}
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
        <p><label>Test Application     </label>List   form</p>
      </header>
    );
  };

  const Lists = ({ firstName, lastName, favouriteColor, number, status, typeName,  }) => {
    if (!firstName) return <div />;
    return (
       
      <table>
          

        <tbody>
            
          <tr>
            <td>
          <p> {firstName}{lastName}</p>
          
            </td>
            <td>
              <p>{favouriteColor}</p>
            </td>
            <td>
          <p>   {number}</p>
            </td>
            <td>
             <p>{status}</p> 
            </td>
            <td>
            <p>{typeName}</p>
            </td>
          </tr>
          
        </tbody>
      </table>
     
    
    );
  };

  export default List;