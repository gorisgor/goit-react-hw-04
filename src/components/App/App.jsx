import { useState, useEffect } from 'react'
import SearchBar from '../SearchBar/SearchBar'
import ImageGallery from '../ImageGallery/ImageGallery'
import Loader from '../Loader/Loader'
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import ImageModal from '../ImageModal/ImageModal'
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn'
import css from './App.module.css'


export default function App() {
  const [images, setImages] = useState([])

  return (
    <>
      <SearchBar />
      <ImageGallery />
      <LoadMoreBtn />
      <Loader />
      <ErrorMessage />
      <ImageModal />
      
    </>
  )
}


