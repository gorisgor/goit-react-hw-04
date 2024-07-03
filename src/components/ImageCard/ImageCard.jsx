export default function ImageCard({ src, alt, openModal }) {
  return (
    <div>
      <img src={src.small} alt={alt} onClick={() => openModal({ src: src.regular, alt })}/>
    </div>
  );
}

