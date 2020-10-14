import React, {useState , useEffect} from 'react';
// import history from '../../History'; 
import { Link } from 'react-router-dom';
// import { Provider } from '../../Context'; 
const data={
    a:'1', b:'2'
}
const Home=()=>{
  const [palin , setPalin] = useState('');

  useEffect(()=>{
    console.log('Palin length >>', palin.length);
    
  },[palin])


  return (
    // <Provider>
    <div className="App">
      <h1>Wellcome To The Home Page</h1>
      <br></br>
      <form>
  <label >
    Value:
    <input type="text" value={palin} onChange={e => setPalin(e.target.value)}/>
  </label>
  <input type="submit" value="Submit" />
</form>
     <Link to={'/products'}> 
       <button>Go To Products</button>
     </Link>
    </div>
    // </Provider>
  );
}

export default Home;
