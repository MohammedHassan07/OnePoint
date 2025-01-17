import React from 'react'
import CategoryCard from '../components/CategoryCard'
import welder from '../icons/welder.png'
import electrician from '../icons/electrician.png'
import technician from '../icons/technician.png'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <div className='flex justify-center items-center flex-wrap p-6 gap-6'>

                <Link to={'list'} state={'Plumber'}>
                    <CategoryCard category={'Plumber'} categoryImg={technician} />
                </Link>

                <Link to={'list'} state={'Electrician'}>
                    <CategoryCard category={'Electrician'} categoryImg={electrician} />
                </Link>

                <Link to={'list'} state={'Welder'}>
                    <CategoryCard category={'Welder'} categoryImg={welder} />
                </Link>

            </div>
        </>
    )
}

export default Home
