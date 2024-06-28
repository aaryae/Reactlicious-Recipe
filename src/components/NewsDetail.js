import React from 'react'
import { useParams } from 'react-router-dom'
import news from '../data/news.json'

const NewsDetail = () => {
  const { newsid } = useParams()
  const readnews = news.find((readnews) => readnews.id.toString() === newsid)

  return <div className='Recipieshoni max-w-screen-2xl mx-auto mt-20 mb-0 bg-[#ffffff] p-5 '>hello news</div>
}

export default NewsDetail
