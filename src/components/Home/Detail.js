import React from 'react';
import { useParams } from "react-router-dom";

function Detail(props) {

  const params = useParams();
  console.log(props.item);


  return (
    <div className="container detail-page">
      <h3 className="my-3">
        Detail
      </h3>
      <div className="content row">
        <div className="col-3">
          <img className="img-detail" src={props.item?.picture?.large} alt="img" />
        </div>
        <div className="col-3">
          <label className="name-detail">Name: </label><span className="name-detail">{props.item?.name?.first}</span><br/>
          <label>Email: </label><span>{props.item?.email}</span><br/>
          <label>Phone: </label><span>{props.item?.phone}</span><br/>
          <label>Gender: </label><span>{props.item?.gender}</span><br/>
          <label>Age: </label><span>{props.item?.dob?.age}</span>
        </div>
        <div className="col-3"></div>
      </div>
    </div>
  );
}

export default Detail;
