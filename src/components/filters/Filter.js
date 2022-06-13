import React, {useState} from "react";
import './Filter.css';

const Filter = ({jobs}) => {
    function mergeTags(arr) {
        return ([].concat.apply([], arr))
    }
    const taggs = jobs.map((job, i) => {
        return jobs[i].tags
    })
    const merged = mergeTags(taggs)    
    
    const [LocationCheckedState, setLocationCheckedState] = useState(
        new Array(jobs.length).fill(false)
    )
    const locationOnChange = (position) => {
        const updatedLocationCheckedState = LocationCheckedState.map((item, index) =>
            index === position ? !item : item
        );
        setLocationCheckedState(updatedLocationCheckedState);
    }
    console.log('state:',LocationCheckedState)
    
    function filterLocation(ar) {
        const arr = ar.map(a => a.location)
        const arrr = arr.filter(function (el, i, arr) {
            if (LocationCheckedState[i]) {
                return el === arr[i]
            } else {
                return false
            }
        })
        return arrr
    }
    const filteredLocations = filterLocation(jobs)
    console.log('filter:',filteredLocations)
    const filteredJobs = jobs.filter(function(el, i) {
        do {
            return el.location === filteredLocations[i];
        }
        while (filteredLocations.length >= i)
    })
    console.log('filtered:',filteredJobs)
    
    return ( 
        <div class="mb-3 xl:w-72">
            <h1 class="text-2xl text-blue-800 text-center">FILTERING</h1>
            <br />
            <h2 class='text-xl pb-1 font-bold'>Location</h2>
            {jobs.map((job, i) => {
                return (
                    <label class="select-none container block relative cursor-pointer text-xl pl-8">{jobs[i].location}
                        <input id={i} checked={LocationCheckedState[i]} onChange={() => locationOnChange(i)} class="absolute opacity-0 left-0 top-0 cursor-pointer" type="checkbox" />
                        <span class="h-6 w-6 checkmark absolute top-0 left-0 bg-gray-400"></span>
                    </label>
                )})}
            <br />
            <h2 class='text-xl pb-1 font-bold'>Department</h2>
            {jobs.map((job, i) => {
                return (
                    <label class="select-none container block relative cursor-pointer text-xl pl-8">{jobs[i].department}
                        <input class="absolute opacity-0 left-0 top-0 cursor-pointer" type="checkbox" />
                        <span class="h-6 w-6 checkmark absolute top-0 left-0 bg-gray-400"></span>
                    </label>
                )})}
            <br />
            <h2 class='text-xl pb-1 font-bold'>Tags</h2>
            {jobs.map((job, i) => {
                return (
                    <label class="select-none container block relative cursor-pointer text-xl pl-8">{merged[i]}
                        <input class="absolute opacity-0 left-0 top-0 cursor-pointer" type="checkbox" />
                        <span class="h-6 w-6 checkmark absolute top-0 left-0 bg-gray-400"></span>
                    </label>
                )})}<br />
            <h2 class='text-xl pb-1 font-bold'>Text</h2>
            <input class="text-gray-300 form-select appearance-none block w-full px-3 py-1.5 text-base font-normal bg-gray-800 bg-clip-padding bg-no-repeat border border-solid border-gray-700 rounded-md transition duration-300 ease-in-out m-0 focus:border-gray-500 focus:outline-none" placeholder="Enter Text"/>
            <br />
            <button class="mb-3 border-2 border-blue-800 text-black w-full py-2 rounded-md text-1xl font-medium hover:bg-blue-400 transition duration-300">APPLY</button>
        </div>  
    )
}

export default Filter;