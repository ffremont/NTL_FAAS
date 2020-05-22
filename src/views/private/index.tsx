import React from 'react';


function Private(props: any) {
  const getPrivateData = () => {
    fetch('/api/my-private-data', {
      method:'GET',
      headers:{
        Authorization : `Bearer ${(window as any).auth.token}`
      }
    })
    .then(r => r.text())
    .then(t => console.log(t));
  };
  return (
    <div className="private">
      C'est privé !
      <div>
        <button type="button" onClick={getPrivateData} >Get private data (console.log)</button>
      </div>
    </div>
  );
}

export default Private;
