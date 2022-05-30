import React from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   // Link
// } from "react-router-dom";
import List from './components/list/List';
import Navbar from './components/navbar/Navbar';

export default function App() {
  const jobs = [
    {
      id: 1,
      company: 'Sheeping',
      location: 'TLV',
      title: 'bossman',
      department: 'bosses',
      tags: ['execs', 'bosses']
    },
    {
      id: 2,
      company: 'Sheeping',
      location: 'NEVERLAND',
      title: 'bigboy',
      department: 'boyz',
      tags: ['bosses', 'bros']
    },
    {
      id: 3,
      company: 'Sheeping',
      location: 'LOCATION',
      title: 'title',
      department: 'department',
      tags: ['tag1', 'tag2','tag3']
    }
  ]  
 return (
  <>
    <Navbar />
    <div className='w-full flex flex-col content-center items-center'>
      <List jobs={jobs} />
    </div>
  </>
 )
  // return (
  //   <Router>
  //     <div>
  //       <Routes>
  //         <Route path="/contact">
  //         </Route>
  //         <Route path="/company/:id">
  //         </Route>
  //         <Route path="/companies">
  //         </Route>
  //         <Route exact path="/">
  //             <Navbar />
  //             <div className='w-full flex flex-col content-center items-center'>
  //               <List jobs={jobs} />
  //             </div>
  //         </Route>
  //       </Routes>
  //     </div>  
  //   </Router>     
  // )
}