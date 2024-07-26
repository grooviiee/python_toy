import React from 'react';
import { useState, useEffect } from 'react';

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
