import React, {useState , useEffect} from 'react';
// import history from '../../History'; 
import { Link } from 'react-router-dom';
// import { Provider } from '../../Context'; 
//Import action method from authAction
import { connect } from 'react-redux';
import { upDateUser } from '../../Redux/Actions/authAction';
const data={
    a:'1', b:'2'
}
let a = 35;
a = 40;
const Home=(props)=>{
  const [palin , setPalin] = useState('');

  useEffect(()=>{
    //  console.log('Props Value >>', props);
    props.upDateUser({data});
    checkFunc();
    console.log('Without funct value >>', a);
  },[])

  useEffect(()=>{
    console.log('updated props value>>', props);
  //  props.upDateUser({data});
 },[props])

 const checkFunc=()=>{
   let a = 67;
   console.log('A value function >>', a)
 }

 const checkPalin=()=>{
    // console.log('fun value >>', a);
   const strLength = palin.length;
  //  console.log('String length >>', strLength);
  const divided = Math.floor(strLength / 2);
  for(let i = 0; i < divided ; i++){
   if(palin[i] !== palin[strLength-1-i]){
     alert('This is not palindrom')
   }
   else {
   alert('This is palindrom')
   }
  }
  setPalin('')
 }



  return (
    // <Provider>
    <div className="App">
      <h1>Wellcome To The Home Page</h1>
      <br></br>
      
    <input type="text" value={palin} onChange={e => setPalin(e.target.value)}/>
 
  <button onClick={checkPalin}>Palindrom</button>
     <Link to={'/products'}> 
       <button>Go To Products</button>
     </Link>
    </div>
    // </Provider>
  );
}

const mapStateToProps = (state)=>{
  console.log('MapStateToProps State Value ..>>>', state);
    return {
      user:state.userReducer.user
    }
  }
  
  const mapDispatchToProps = (dispatch)=>{
  return {
    upDateUser:(user)=>dispatch(upDateUser(user))
  }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(Home);
 
