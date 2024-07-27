import React from 'react';
import { useState, useEffect } from 'react';


class ShoppingList extends React.Component {
  render() {
    return (
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    )
  }
}

function App() {

  const [data, setData] = useState([{}])

  useEffect(() => 
    {
      fetch("/users").then(
        response => response.json()
      ).then(
        data => {
          setData(data);
        }
      ).catch(
        (err) => console.log(err)
      )
    },[])

  return (
    <div className="App">
      <h1>test 하는 중...</h1>
      <div>
        {(typeof data.members === 'undefined') ? (
          // fetch가 완료되지 않았을 경우에 대한 처리
          <p>loading...</p>
        ) : (
          data.members.map((u) => <p>{u.name}</p>)
        )}
      </div>
    </div>
  );
}

export default App;
