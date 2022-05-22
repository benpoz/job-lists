import React from "react";

const Jobcard = ({company,location,title,department,tags}) => {
    return ( 
        <div>
            <div>
                <img alt='company' src='exmaple.jpg'></img>
                <h3>Company: {company}</h3>
            </div>
            <ul>
                <li>Location: {location}</li> 
                <li>Title: {title}</li> 
                <li>Department: {department}</li> 
                <li>Tags: {tags}</li> 
            </ul>
            <button class="p-2 pl-5 pr-5 bg-gray-500 text-gray-100 text-lg rounded-lg hover:bg-gray-600 hover:text-gray-100 focus:border-2 border-gray-300">Read More/apply</button>
        </div>
    )
}

export default Jobcard;