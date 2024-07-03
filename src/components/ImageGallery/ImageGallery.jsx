import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallery({ items, openModal }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <ImageCard src={item.urls} alt={item.alt_description} openModal={openModal} />
        </li>
      ))}
    </ul>
  );
}
