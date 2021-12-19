import React from 'react'

const SkeletonMotivate = () => {

    const skeletonLength = [1, 2, 3, 4, 5]

    return (
        <>
            {skeletonLength.map((item, index) => (
                <div key={index} className='skeleton'>
                    <div className='skeleton_upper'><div></div></div>
                    <div className='skeleton_lower'><div></div></div>
                </div>
            ))}
        </>
    )
}

export default SkeletonMotivate;
