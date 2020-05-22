import React from 'react';
import { Link } from 'react-router-dom';
import './Hello.scss'

function Hello(props: any) {
  return (
    <div className="hello">
      <h1>Niort Tech Live</h1>
      <h3>FAAS, la découverte :)</h3>

      <p>Ouvrez votre console (F12) </p>
      <button type="button" onClick={() => fetch('/api/hello').then(r => r.text()).then(t=>console.log(t))}>Fetch API "hello"</button>
      
      <div className="item">
        <Link to="/private">Ma page privée</Link>
      </div>
      <div className="item">
      <button type="button" onClick={() => fetch('/api/messages', {method:'POST', body:`Hello ${(new Date()).getTime()}`}).then(t=>console.log('créé !'))}>Create New Message :)</button>
      </div>
      
    </div>
  );
}

export default Hello;
