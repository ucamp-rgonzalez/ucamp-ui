import React from 'react';

import Button from '../components/Button/Button';

import './Main.css';

const Main = () => {
  return (
    <div>
      <h1>Componentes</h1>
      <div className="main-content">
        <div>
          <Button type="submit">Submit</Button>
          <Button onClick={() => alert('Hola')}>Hello</Button>
          <Button text="Primary" variant="primary"/>
          <Button variant="danger" />
        </div>
      </div>
    </div>
  );
};

export default Main;
