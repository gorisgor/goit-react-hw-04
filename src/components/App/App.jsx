import { useState, useEffect } from "react";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageModal from "../ImageModal/ImageModal";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import axios from "axios";
import css from "./App.module.css";
import { fetchImages } from "../../images-api";

export default function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function handleSearch(query) {
    try {
      setImages([]);
      setError(false);
      setLoading(true);
      const data = await fetchImages("css");
      setImages(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {loading && <Loader />}
      {images > 0 && <ImageGallery items={images} />}
      {error && <ErrorMessage />}
      <LoadMoreBtn />

      <ImageModal />
    </>
  );
}
