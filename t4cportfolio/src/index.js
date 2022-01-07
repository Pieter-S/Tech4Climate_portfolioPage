import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import './components/Test';


function tick() {
  const element = (
    <div className="row">
      <h1 className="col-md-8">React: Hello, world!</h1>
      {/* <h2 className="col-md-4">It is {new Date().toLocaleTimeString()}.</h2> */}
    </div>
  );

ReactDOM.render(
element,
    document.getElementById('root')
  );
}
setInterval(tick, 1000);