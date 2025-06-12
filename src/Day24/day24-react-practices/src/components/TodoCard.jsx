import React, { useState, useEffect } from 'react';
import { Card, Tab, Nav } from 'react-bootstrap';
import TodoContents from './TodoContents';

export default function TodoCard() {
  /**
   * 1. demo data로 화면 구성 잡기
   * 2. jsonplaceholder에서 todos 받아오기
   * 3. 화면구성잡은거 반복문(map) 사용하여 화면에 나타내기
   */
  const demoData = {
    userId: 1,
    id: 1,
    title: 'delectus aut autem',
    completed: false,
  };
  const [todo, setTodo] = useState([]);
  const [activeTab, setActiveTab] = useState('all');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((json) => setTodo(json));
  }, []);

  return (
    <>
      <div className='todo-wrap' data-bs-theme='light'>
        <Card className='todo-card'>
          <Tab.Container
            id='left-tabs-example'
            defaultActiveKey={activeTab}
            onSelect={(k) => setActiveTab(k)}>
            <Card.Header className='todo-card__display'>
              <button className='mode-btn'>☾</button>
              <Nav className='display__option'>
                <Nav.Item>
                  <Nav.Link eventKey='all'>All</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='active'>Active</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='completed'>Completed</Nav.Link>
                </Nav.Item>
              </Nav>
            </Card.Header>
            <Card.Body>
              <Tab.Content>
                {todo?.map((contents) => (
                  <TodoContents
                    eventKey={activeTab}
                    contents={contents}
                    key={contents.id}
                  />
                ))}
              </Tab.Content>
            </Card.Body>
            <Card.Footer className='text-muted'>
              <input type='text' placeholder='Add Todo' id='todoText' />
              <button className='input-btn'>Add</button>
            </Card.Footer>
          </Tab.Container>
        </Card>
      </div>
    </>
  );
}
