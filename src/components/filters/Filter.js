import React, {useState} from "react";
import './Filter.css';

const Filter = ({jobs}) => {
    
    const taggs = jobs.map((job) => {
        return job.field
    })
    
    function mergeTags(arr) {
        return ([].concat.apply([], arr))
    }
    const merged = mergeTags(taggs)    
    
    const returnUniqueLocation = (array) => {
        const arr = []
        array.map((job) => arr.push(job.location))
        const unique = [...new Set(arr)]
        return unique
    }
    const uniqueLocations = returnUniqueLocation(jobs)
    
    const returnUniqueDepartment = (array) => {
        const arr = []
        array.map((job) => arr.push(job.department))
        const unique = [...new Set(arr)]
        return unique
    }
    const uniqueDepartments = returnUniqueDepartment(jobs)
    
    const returnUniqueTags = (array) => {
        const unique = [...new Set(array)]
        return unique
    }
    const uniqueTags = returnUniqueTags(merged)
    
    
    const [LocationCheckedState, setLocationCheckedState] = useState(
        new Array(uniqueLocations.length).fill(false)
    )
    const locationOnChange = (position) => {
        const updatedLocationCheckedState = LocationCheckedState.map((item, index) =>
            index === position ? !item : item
        );
        setLocationCheckedState(updatedLocationCheckedState);
    }
    console.log('state:',LocationCheckedState)
    
    function filterLocation(arr) {
        const arrr = arr.filter(function (el, i, arr) {
            if (LocationCheckedState[i]) {
                return el === arr[i]
            } else {
                return false
            }
        })
        return arrr
    }
    const locationFilter = filterLocation(uniqueLocations)
    console.log('filter:',locationFilter)
    const filteredLocations = jobs.filter(el => {
        return locationFilter.includes(el.location);
    })
    console.log('filtered:',filteredLocations)
    
    return ( 
        <div className="mb-3 xl:w-72">
            <h1 className="text-2xl text-blue-800 text-center">FILTERING</h1>
            <br />
            <h2 className='text-xl pb-1 font-bold'>Location</h2>
            {uniqueLocations.map((loc, i) => {
                return (
                    <label className="select-none container block relative cursor-pointer text-xl pl-8">{loc}
                        <input id={i} checked={LocationCheckedState[i]} onChange={() => locationOnChange(i)} className="absolute opacity-0 left-0 top-0 cursor-pointer" type="checkbox" />
                        <span className="h-6 w-6 checkmark absolute top-0 left-0 bg-gray-400"></span>
                    </label>
                )})}
            <br />
            <h2 className='text-xl pb-1 font-bold'>Department</h2>
            {uniqueDepartments.map((dep, i) => {
                return (
                    <label className="select-none container block relative cursor-pointer text-xl pl-8">{dep}
                        <input className="absolute opacity-0 left-0 top-0 cursor-pointer" type="checkbox" />
                        <span className="h-6 w-6 checkmark absolute top-0 left-0 bg-gray-400"></span>
                    </label>
                )})}
            <br />
            <h2 className='text-xl pb-1 font-bold'>Tags</h2>
            {uniqueTags.map((tag, i) => {
                return (
                    <label className="select-none container block relative cursor-pointer text-xl pl-8">{tag}
                        <input className="absolute opacity-0 left-0 top-0 cursor-pointer" type="checkbox" />
                        <span className="h-6 w-6 checkmark absolute top-0 left-0 bg-gray-400"></span>
                    </label>
                )})}<br />
            <h2 className='text-xl pb-1 font-bold'>Text</h2>
            <input className="text-gray-300 form-select appearance-none block w-full px-3 py-1.5 text-base font-normal bg-gray-800 bg-clip-padding bg-no-repeat border border-solid border-gray-700 rounded-md transition duration-300 ease-in-out m-0 focus:border-gray-500 focus:outline-none" placeholder="Enter Text"/>
            <br />
            <button className="mb-3 border-2 border-blue-800 text-black w-full py-2 rounded-md text-1xl font-medium hover:bg-blue-400 transition duration-300">APPLY</button>
        </div>  
    )
}

export default Filter;