
import React, {useState, useEffect} from 'react';
import Item from './../../components/Home/Item.js';
import axios from 'axios';

function Home(props) {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios.get(`https://randomuser.me/api/?results=20`)
      .then(res => {
        setList(res.data.results)
      })
      .catch(error => console.log(error));
  }, [])

  const listItem = list && list.map((item, index) => {
    const sendDetail = () => {
      props.sendDetailHome(item)
    }
    return (
      <Item name={item.name.first} image={item.picture.large} key={index} sendDetail={sendDetail}/>
    )
  })

  return (
    <div className="home-page container">
      <h2 className="title-product py-4">
        List users
      </h2>
      <div className="list-item row">
        { listItem }
      </div>
    </div>
  );
}

export default Home;
