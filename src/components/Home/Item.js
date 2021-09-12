import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../../stores/favourite'
import { useHistory } from 'react-router-dom'
import { Alert } from 'bootstrap';

function Item(props) {
  const [is, setIs] = useState(false);
  // const [isDetail, setIsDetail] = useState(false);

  const token = useSelector((state) => state.account.token)
  const dispatch = useDispatch()
  const history = useHistory()

  const hendeFavourite = () => {
    if (token) {
      if (is) {
        dispatch(decrement(props.name))
        setIs(false)
      } else {
        dispatch(increment(props.name))
        setIs(true)
      }
    } else {
      alert('Please login')
    }
  }

  return (
    <div className="col-3 px-2 mb-3">
      <div className="card p-0">
        <img
          onClick={() => {
            props.sendDetail()
            history.push(`/detail`)
          }}
          className="card-img-top"
          src={props.image} alt="card1"
        />
        <div className="card-body">
          <h5
            onClick={() => {
              props.sendDetail()
              history.push(`/detail`)
            }}
          >{props.name}</h5>
        </div>
        <div className="icon-heart"
          onClick={() => hendeFavourite()}
        >
          <i className={ is ? 'fa fa-heart color-red' : 'fa fa-heart' }></i>
        </div>
      </div>
    </div>
  );
}

export default Item;
