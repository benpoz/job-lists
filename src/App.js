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

    return(
      <>
        <Navbar/>
        <div className='w-full flex flex-col content-center items-center'>
          <List jobs={jobs}/>
        </div>
      </>
      
    )
  }

export default App;