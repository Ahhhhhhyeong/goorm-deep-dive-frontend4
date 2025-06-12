import React, { useEffect, useRef, useState } from 'react';
import Table from 'react-bootstrap/Table';
//board
export default function UseEffectExEx2() {
  const [board, setBoard] = useState([]);

  //true: 처음만 실행 / false: 첫번째 건너뛰고 두번째부터
  const firstLoad = useRef(true);
  useEffect(() => {
    //board가 비어있을 때만 fetch 진행
    if (firstLoad.current) {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((json) => setBoard(json));

      console.log('Type: ', typeof board);
      firstLoad.current = false; // 처음 한 번만 실행
    }
  }, [board]);

  return (
    <div>
      <h1>fetch 통신을 하여 json 출력!</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {board.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.phone}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
