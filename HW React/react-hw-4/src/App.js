import React from 'react';
import Article from './Article'

function App() {

const body = <section>body</section>

  return (
    <div className="App">
      <h2>title</h2>
      {body}
      <h3>creation date: {(new Date()).toDateString()}</h3>
      <Article></Article>
    </div>
  );
}



export default App;
