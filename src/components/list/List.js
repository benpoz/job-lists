import React from 'react';
import Jobcard from '../jobcard/Jobcard';

const List = ({jobs}) => {
	console.log(jobs)
    return (
		<div> 
			{
				jobs.map((user, i) => {
                    return (
						<Jobcard 
							key={i} 
							company={jobs[i].company}
                            location={jobs[i.location]} 
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