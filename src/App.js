import './App.css';
import DayList from './component/DayList';
import Header from './component/Header';
import Day from './component/Day';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import NotFound from './component/NotFound';



function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
      <Routes> 
        <Route exact path="/" element={<DayList/>}/>
        <Route path="/day/:inputDay" element={<Day/>}/>
        <Route path="*" element={<NotFound/>}/>          
      </Routes>     
    </div>
  </BrowserRouter>
  );
}

export default App;







// import './App.css';

// function App() {
//   return (
//     <BrowserRouter>
//     <div className="App">
//       <Header>
//         <Switch>
//           <Route exact path="/">
//             <DayList/>
//           </Route>
//           <Route path="/day">
//             <Day/>
//           </Route>
//         </Switch>
//       </Header>
//     </div>
//     </BrowserRouter>>
//   );
// }

// export default App;
