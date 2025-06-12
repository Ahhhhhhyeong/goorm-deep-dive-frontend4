import React from 'react';
import { Card, Tab, Nav, Form, Button } from 'react-bootstrap';

export default function TodoContents({ eventKey, contents }) {
  console.log('eventKey', eventKey);

  let content = {};
  if (eventKey == 'all') {
    content = contents;
  } else if (eventKey == 'active') {
    if (contents.completed === false) {
      content = contents;
    } else return <></>;
  } else if (eventKey == 'completed') {
    if (contents.completed === true) {
      content = contents;
    } else return <></>;
  }

  return (
    <Tab.Pane eventKey={eventKey}>
      <div className='tab-contents'>
        <Form.Check
          type='checkbox'
          id={content.id}
          label={content.title}
          defaultChecked={content.completed}
        />
        <button className='delete-btn'>🗑️</button>
      </div>
    </Tab.Pane>
  );
}
