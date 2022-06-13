import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";
// import Airtable from 'airtable';
import List from './components/list/List';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Filter from './components/filters/Filter';

// const base = new Airtable({apiKey: ''}).base('appJMDZ1Kbafseu4o');

function App () {
    
  const jobs = [
    {
      id: 1,
      link: "https://www.pictureofhotdog.com/",
      company: 'Sheeping',
      location: 'TLV',
      title: 'bossman',
      department: 'bosses',
      tags: ['execs', 'bosses']
    },
    {
      id: 2,
      link: "https://www.miniclip.com/",
      company: 'Sheeping',
      location: 'NEVERLAND',
      title: 'bigboy',
      department: 'boyz',
      tags: ['bosses', 'bros']
    },
    {
      id: 3,
      link: "https://www.google.com/",
      company: 'Sheeping',
      location: 'LOCATION',
      title: 'title',
      department: 'department',
      tags: ['tag1', 'tag2','tag3']
    }
  ]

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/contact">
          </Route>
          <Route path="/company/:id">
          </Route>
          <Route path="/companies">
          </Route>
          <Route exact path="/" element={
            <div className='w-full flex flex-col content-center items-center '>
                <h1 className='py-28 text-4xl stroke-indigo-900 font-medium'>Welcome To The Job List</h1>
                <div className="w-full flex flex-row justify-around px-16">
                  <List className="w-auto" jobs={jobs} />
                  <Filter className="w-1/3" jobs={jobs} />
                </div>
            </div>
          }>
          </Route>
        </Routes>
        <Footer />
      </div>  
    </Router>     
  )
}

export default App