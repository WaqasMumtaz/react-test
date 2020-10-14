import React from 'react';
// import history from '../../History'; 
import { Link } from 'react-router-dom';
// import { Provider } from '../../Context'; 
const data={
    a:'1', b:'2'
}
const Home=()=>{

  return (
    // <Provider>
    <div className="App">
      <h1>Wellcome To The Home Page</h1>
      <br></br>
      {/*<Link to="/products">Click here</Link>*/}
     <Link to={'/products'}> 
       <button>Go To Products</button>
     </Link>
    </div>
    // </Provider>
  );
}

export default Home;
