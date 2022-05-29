import React from 'react';
import Jobcard from '../jobcard/Jobcard';

const List = ({jobs}) => {
    return (
		<div className="w-7/12 py-40"> 
			{
				jobs.map((job, i) => {
                    return (
						<Jobcard 
							key={i} 
							company={jobs[i].company}
                            location={jobs[i].location} 
							title={jobs[i].title} 
							tags={jobs[i].tags} 
							department={jobs[i].department}
						/>
					)
				})
			}
		</div>
	)
}

export default List