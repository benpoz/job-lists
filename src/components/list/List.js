import React from 'react';
import Jobcard from '../jobcard/Jobcard';

const List = ({jobs}) => {
	return (
		<div className="w-7/12 pt-10 pb-40"> 
			{
				jobs.map((job) => {
                    return (
						<Jobcard 
							key={job.id} 
							title={job.title} 
							tags={job.field} 
							company={job.company}
							department={job.department}
							image={job.image}
							link={job.link}
                            location={job.location} 
						/>
					)
				})
			}
		</div>
	)
}

export default List