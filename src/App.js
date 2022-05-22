import React from 'react';
import List from './components/list/List';
import Navbar from './components/navbar/Navbar';

function App() {
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
    }
  ]  
    return(
      <>
        <Navbar/>
        <List jobs={jobs}/>
      </>
      
    )
  }

export default App;