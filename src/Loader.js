import React from 'react'

export default function Loader() {
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				marjin: '5rem',
			}}
		>
			<div className='lds-dual-ring'></div>
		</div>
	)
}
