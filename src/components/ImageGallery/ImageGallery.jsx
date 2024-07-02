import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallery({ items }) {
  return (
    <ul>
      {items.map(({ id, src, alt }) => {
        <li key={id}>
          <ImageCard src={src} alt={alt} />
        </li>;
      })}
    </ul>
  );
}
