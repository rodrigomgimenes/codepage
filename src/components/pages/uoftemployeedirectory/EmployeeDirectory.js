import React, { Component } from "react";
import Members from "./Members";
import StaffCard from "./StaffCard";
import staffDefault from "./staff.json";
import "./employeedirectory.css";

class EmployeeDirectory extends Component {
  styles = {
    pageWrapper: {
      height: "auto"
    },
    pageWrapperCustom: {
      height: "100vh"
    },
    textUp: {
      textTransform: "uppercase",
      marginTop: "8px"
    }
  }
  
  state = {
    staffDefault,
    staffFilter: []
  };

  // Loads original List of Employee as soon the page loads 
  componentDidMount() {this.handleDefault()}

  handleDefault = () => {
    const staffFilter = this.state.staffDefault;
    this.setState({staffFilter});
  };

  // Function to filter an array of objects by some specific key.
  searchEmployee = searchRequest => {
    // Loads original List of Employee in case the string is empty or contains just whitespace
    let staffFilter = this.state.staffDefault;

    if (searchRequest && !(/^\s+$/.test(searchRequest))) {
      // First Condition to check if string is not empty
      // Second Condition checks if string does not contain just whitespace
      staffFilter = staffDefault.filter(employee => { 
        return (employee.name).toLowerCase().search(searchRequest.toLowerCase()) > -1 ? ((employee.name).toLowerCase().search(searchRequest.toLowerCase()) > -1) :
                ((employee.role).toLowerCase().search(searchRequest.toLowerCase()) > -1 ? ((employee.role).toLowerCase().search(searchRequest.toLowerCase()) > -1) :
                  ((employee.email).toLowerCase().search(searchRequest.toLowerCase()) > -1 ? ((employee.email).toLowerCase().search(searchRequest.toLowerCase()) > -1) : 
                    ((employee.team).toLowerCase().search(searchRequest.toLowerCase()) > -1 ? ((employee.team).toLowerCase().search(searchRequest.toLowerCase()) > -1) : (employee.code).search(searchRequest) > -1)))
      });
    }
    this.setState({ staffFilter });
  };

  // Function to sort alphabetically an array of objects by some specific key.
  sortEmployee = sortRequest => {
    // Loads original List of Employee
    let staffFilter = this.state.staffDefault;
    let sortOrder   = 1;

    // Sort by key in descending order if it has "-" before the sortRequest
    if(sortRequest[0] === "-") {
      sortOrder   = -1;
      sortRequest = sortRequest.substr(1);
    }

    if (sortRequest.toLowerCase() === "none") {
      sortRequest = "id";
    }

    staffFilter = staffDefault.sort((a,b) => {
      return (sortOrder === -1) ? (b[sortRequest].toString()).localeCompare(a[sortRequest].toString()) : (a[sortRequest].toString()).localeCompare(b[sortRequest].toString());
    });
    
    this.setState({ staffFilter });
  };

// /**
//  * Function to sort alphabetically an array of objects by some specific key.
//  * 
//  * @param {String} property Key of the object to sort.
//  */
// function dynamicSort(property) {
//   var sortOrder = 1;

//   if(property[0] === "-") {
//       sortOrder = -1;
//       property = property.substr(1);
//   }

//   return function (a,b) {
//       if(sortOrder == -1){
//           return b[property].localeCompare(a[property]);
//       }else{
//           return a[property].localeCompare(b[property]);
//       }        
//   }
// }

// Sort the MyData array with the custom function
// that sorts alphabetically by the name key

// Sort by key in ascending order
// MyData.sort(dynamicSort("name"));
// Sort by key in descending order
// MyData.sort(dynamicSort("-name"));

// Display data with new order !
// console.log(MyData);

  render() {
    return (
      <div className="page-wrapper" style={this.state.staffFilter.length > 0 ? this.styles.pageWrapper : this.styles.pageWrapperCustom}>
        <div className="container-fluid">
          <h1 style={this.styles.textUp}>Employee Directory</h1>
          <span className="label inverse-theme-custom"><i className="fab fa-html5"></i></span>
          <span className="label inverse-theme-custom"><i className="fab fa-css3-alt"></i></span>
          <span className="label inverse-theme-custom"><i className="fab fa-js"></i></span>
          <span className="label inverse-theme-custom"><i className="fab fa-npm"></i></span>
          <span className="label inverse-theme-custom"><i className="fab fa-react"></i></span>
          <Members 
            total={this.state.staffFilter.length} 
            searchEmployee={this.searchEmployee} 
            sortEmployee={this.sortEmployee}
          />
          <div className="row">
            {this.state.staffFilter.map(employee => (
              <StaffCard
                key={employee.id}
                name={employee.name}
                image={employee.image}
                role={employee.role}
                email={employee.email}
                team={employee.team}
                code={employee.code}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default EmployeeDirectory;

