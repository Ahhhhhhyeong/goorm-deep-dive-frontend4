import React from 'react';
import { Tab, Form } from 'react-bootstrap';

export default function TodoContents({ eventKey, contents }) {
  console.log('eventKey', eventKey);

  return (
    <Tab.Pane eventKey={eventKey}>
      <div className='tab-contents'>
        <Form.Check
          type='checkbox'
          id={contents.id}
          label={contents.title}
          defaultChecked={contents.completed}
        />
        <button className='delete-btn'>🗑️</button>
      </div>
    </Tab.Pane>
  );
}
