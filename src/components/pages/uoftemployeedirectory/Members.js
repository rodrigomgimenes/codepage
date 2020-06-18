import React from "react";

function Members(props) {
  const styles = {
    size: {
      height: "56px", 
      width: "56px"
    }
  }

  // const verifyKey = (e) => {
  //   if ((e.nativeEvent.key === "Enter") || (e.keyCode === 13)) {
  //     e.preventDefault();
  //     props.searchEmployee(e.target.value);
  //   }
  // }

  return (
    <div className="m-t-30 m-b-15">
      <div className="row">
        <div className="col-lg-3">
          <div className="card">
            <div className="card-body">
              <div className="d-flex no-block">
                <div className="m-r-20 align-self-center">
                  <span className="lstick m-r-20"></span>
                  <img src="./assets/images/members.png" alt="Staff" style={styles.size}/>
                </div>
                <div className="align-self-center">
                  <h6 className="text-muted m-t-10 m-b-0">Total Staff</h6>
                  <h2 className="m-t-0">{props.total}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-9">
          <div id="wrap">
            <form action="" autoComplete="on">
            {/* <input id="search" name="search" type="text" placeholder="What're we looking for ?" onKeyPress={verifyKey} /> */}
            <input id="search" name="search" type="text" placeholder="What're we looking for ?" onKeyUp = {e => {props.searchEmployee(e.target.value)}}/>
            <input id="search_submit" value="Rechercher" type="submit" />
            </form>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-3">
          <h2 className="order-by">Order by</h2>
          <div className="select select-fancy select-fancy-noimage">
            <select onChange = {e => {props.sortEmployee(e.target.value)}}>
              <option value="none">None</option>
              <option value="name">Name</option>
              <option value="email">Email</option>
              <option value="role">Role</option>
              <option value="team">Team</option>
              <option value="code">ID</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Members;
