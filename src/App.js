import React from 'react';
import NavBar from './components/NavBar/NavBar'
import router from './routes/router'
import { withRouter } from 'react-router-dom'

function App(props) {
  return (
    <div className="App">
      {
        props.location.pathname === "/" ? (
          <div>
            {router} </div>
        ) : (
            <div>
              <NavBar />
              {router}
            </div>
          )
      }
    </div>
  );
}

export default withRouter(App);

