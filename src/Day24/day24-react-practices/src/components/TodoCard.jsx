import React, { useState, useEffect } from 'react';
import { Card, Tab, Nav } from 'react-bootstrap';
import TodoContents from './TodoContents';

export default function TodoCard() {
  /** Todo
   * 1. demo data로 화면 구성 잡기
   * 2. jsonplaceholder에서 todos 받아오기
   * 3. 화면구성잡은거 반복문(map) 사용하여 화면에 나타내기
   * ----
   * 추가적인부분(선택사항)
   * 1. 체크를 눌리면 completed 값 수정
   * 2. 텍스트 추가하면 추가 -> completed는 false가 기본
   * 3. 삭제
   */

  const [todo, setTodo] = useState();
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [activeTab, setActiveTab] = useState('all');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((json) => setTodo(json));
  }, []);

  useEffect(() => {
    if (activeTab === 'active') {
      setFilteredTodos(todo.filter((item) => !item.completed));
    } else if (activeTab === 'completed') {
      setFilteredTodos(todo.filter((item) => item.completed));
    } else {
      setFilteredTodos(todo);
    }
  }, [activeTab, todo]);

  const isSubmit = (k) => {
    console.log('k', k);
  };

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
                {filteredTodos?.map((contents) => (
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
              <button className='input-btn' onSubmit={isSubmit}>
                Add
              </button>
            </Card.Footer>
          </Tab.Container>
        </Card>
      </div>
    </>
  );
}
