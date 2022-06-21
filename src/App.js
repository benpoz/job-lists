import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";
import List from './components/list/List';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Filter from './components/filters/Filter';

function App () {
  
  const jobs = []
  
  const getJobs = () => {
    fetch('http://localhost:4000/getajob', {
      method: 'get',
      headers: {'Content-Type': 'application/json'}})
    .then(response => response.json())
    .then((data) => {
      data.map((job) => {
        return jobs.push(job)
      })
    })
  }
  
  getJobs()

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