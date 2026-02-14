import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';



const root = ReactDOM.createRoot(document.getElementById('root'));

//Return only one element like this we use
// function App()
// {
//   return <h1>Welcome to React</h1>;
// }
// root.render( <App /> );



//Multiple elements we use inside JXS element
// function App()
// {
//   return (<>
//   <h1>Welcome to React</h1>
//   <h2>Welcome to js</h2>
//   <p>HAi My name is Deepika A S</p>

//   </>);
// }
// root.render( <App /> );


//Html element (Js and Xml Syntax)
// let el = <h1>Welcome to React </h1>

// root.render( el );


//Embedding Expressions
// let name = "Deepu"
// let el = <h1>Welcome to React {name}</h1>

// root.render( el );


//Specifying Childerns
// // const el = (<div>
   
// //    <h1>HAi This is Deepika</h1>
// //    <p>Welcome to React</p>

// // </div>);

// root.render(el);


// root.render(<App name={name}/>);

root.render(<App/>);

