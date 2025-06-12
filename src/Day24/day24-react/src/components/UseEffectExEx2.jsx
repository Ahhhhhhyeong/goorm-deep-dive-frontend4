import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
//board
export default function UseEffectExEx2() {
  const [board, setBoard] = useState([]);
  //브라우저 로딩이 될 때 기존 게시글을 모두 가져오기
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => setBoard(json));

    console.log('Type: ', typeof board);
  }, []);

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
            <tr>
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
