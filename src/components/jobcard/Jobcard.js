import React from "react";

const Jobcard = ({location,title,department,tags}) => {
    return ( 
        <div className="w-full grid grid-cols-12 gap-4 border-2 p-3">
            <div className="col-span-3">
                <img alt='company' src='exmaple.jpg'></img>
            </div>
            {/* <div className="col-span-5">
                <h3>Company: {company}</h3>
            </div> */}
            <ul className="col-span-5">
                <li>{location}</li> 
                <li className="text-xl font-bold">{title}</li> 
                <li>{department}</li> 
                {tags.map((tag) =>{
                    return (<li className="bg-gray-300 text-gray-600 px-2 py-1 rounded-md inline-block mr-1">{tag}</li>)
                })}
            </ul>
            <button className="justify-self-center self-center col-span-4 p-2 pl-5 pr-5 bg-gray-500 text-gray-100 text-lg rounded-lg hover:bg-gray-600 hover:text-gray-100 focus:border-2 border-gray-300">Read More/apply</button>
        </div>
    )
}

export default Jobcard;