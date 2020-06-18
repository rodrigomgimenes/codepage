import React from "react";

function StaffCard(props) {
  return (
    //   <span onClick={() => props.removeFriend(props.id)} className="remove">
    //     𝘅
    //   </span>
    // </div>

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
    /* <div className="row">
        <div className="col-lg-3">
          <div className="card">
            <div className="card-body">
              <div className="d-flex little-profile">
                <div className="m-r-20 align-self-center avatar">
                  <span className="lstick m-r-20"></span>
                  <img src="./assets/images/anonymous.jpg" alt="Staff"/>
                </div>
                <div className="align-self-center">
                  <h3 className="m-b-5">Anonymous A.</h3>
                  <h6 className="text-muted m-t-5 m-b-0">anonymous.a@coffeteam.org</h6>
                  <h6 className="text-megna m-t-5 m-b-0">Web Designer & Developer</h6>
                </div>
              </div>
            </div>
          </div>
        </div> 
      </div>*/
  );
}

export default StaffCard;
