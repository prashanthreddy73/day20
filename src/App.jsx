// import Navbar from"./components/Navbar";
// import Main from"./components/Main";
// import Sidebar1 from"./components/Sidebar1";
// import Sidebar2 from"./components/Sidebar2";
// import Footer from"./components/Footer";
// const App=()=>{
//     return(
//         <div className="app">
//             <Navbar/>
//             <Main></Main>
//             <div className="sidebar">
//                 <Sidebar1/>
//                 <Sidebar2/>
//             </div>
//             <Footer/>
//         </div>
//     )
// }

// export default App;

// import React,{ Component } from 'react'
// import CBCPropsex1 from './propsexample/CBCPropsex1';
// class App extends Component {
//     render() {
//         return (
//             <div>App
//                 <hr/>

//                 <CBCPropsex1
//                 username="Sam"
//                 age={25}
//                 desig={["developer","tester"]}
//                 userDetails={{city:"Hyd",area:"Maisammaguda"}}
//                 sendFun={function(){alert("Hi i am from parent component")}}
//                 />
//             </div>
//         )
//     }
// }

// export default App;

import React,{ Component } from 'react'
import FBCPropsex1 from './propsexample/FBCPropsex1';

const App=() =>{
        return (
            <div>
                <FBCPropsex1
                username="Sam"
                isLoggedIn={false}
                hobbies={["Roaming","watching movies","travel","studies"]}
               
                />
            </div>
    )
}
export default App;