import React from "react";

function StaffCard(props) {
  return (
    <div className="col-lg-3">
      <div className="card">
        <img className="card-img-top" src="./assets/images/background.jpg" alt="cardbackground" />
        <div className="card-block little-profile text-center">
          <div className="pro-img"><img src={props.image} alt="user" /></div>
          <h3 className="m-b-0">{props.name}</h3>
          <p className="m-l-5 m-r-5">{props.role}</p>
          <p className="m-l-5 m-r-5 text-megna">{props.email}</p>
          <div className="row text-center">
          <div className="col-lg-2 m-t-20"></div>
            <div className="col-lg-3 m-t-20">
              <h4 className="m-b-0 font-light text-megna">Team</h4><small>{props.team}</small>
            </div>
            <div className="col-lg-2 m-t-20"></div>
            <div className="col-lg-3 m-t-20">
              <h4 className="m-b-0 font-light text-megna">#ID</h4><small>{props.code}</small>
            </div>
            <div className="col-lg-2 m-t-20"></div>
          </div>
          <div className="row text-center m-t-20"></div>
        </div>
      </div>
    </div>
  );
}

export default StaffCard;
