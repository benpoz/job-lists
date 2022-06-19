import React from 'react';
import Jobcard from '../jobcard/Jobcard';

const List = ({jobs}) => {
	
	return (
		<div className="w-7/12 pt-10 pb-40"> 
			{
				jobs.map((job, i) => {
                    return (
						<Jobcard 
							key={jobs[i].id} 
							company={jobs[i].company}
                            location={jobs[i].location} 
							title={jobs[i].title} 
							tags={jobs[i].field} 
							department={jobs[i].department}
							image={jobs[i].image}
							link={jobs[i].link}
						/>
					)
				})
			}
		</div>
	)
}

export default List