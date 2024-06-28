import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import newsdata from '../data/news.json'
import newsfoto from '../Images/newscomp.jpg'
import newsfoto2 from '../Images/newscomp2.jpg'
import './hardluck.css'

const News = () => {
  const [news, setNews] = useState([])

  useEffect(() => {
    try {
      const fetchData = async () => {
        setNews(newsdata)
      }

      fetchData()
    } catch (error) {
      console.error('Error found: ', error)
    }
  }, [])

  const truncateDescription = (description) => {
    if (Array.isArray(description)) {
      description = description.join(' ')
    }
    return description.slice(0, 400)
  }

  return (
    <div className='max-w-screen-2xl mx-auto mt-20 mb-0 bg-[#ffffff] p-5 '>
      <div className='flex justify-evenly relative'>
        {' '}
        {/* Add relative class */}
        <div>
          {newsdata.map((news, index) => {
            const slicedata = truncateDescription(news.content)
            return (
              <Link to={`/news/${news.id}`} key={index}>
                <div className='mb-4 p-2 rounded-tl-lg cursor-pointer group hello2 max-w-screen-sm'>
                  <h1 className='p-2 text-xl font-bold ramro-bold tracking-wider transition-colors duration-300 group-hover:text-red-500'>
                    {news.headline}
                  </h1>
                  <div className='flex justify-between'>
                    <p className='ml-5'>-{news.author}</p>
                    <p>{news.publication_date}</p>
                  </div>
                  <p className='p-2 text-justify ramro tracking-wider'>{slicedata} .....</p>
                </div>
              </Link>
            )
          })}
        </div>
        <div className='heigth-full w-fit'>
          <div className='sticky top-0  p-5 max-w-screen-sm float-right sm:block'>
            <img src={newsfoto} alt='foto' className='w-4/5 p-1 rounded-xl shadow' />
            <img src={newsfoto2} alt='foto2' className='w-4/5 float-right p-1 rounded-xl shadow' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default News
