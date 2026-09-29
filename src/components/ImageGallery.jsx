import ImageCard from "./ImageCard";

function ImageGallery() {
  const images = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      title: "Mountain Lake",
      description: "A beautiful view of a peaceful mountain lake."
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      title: "Forest Road",
      description: "A scenic road surrounded by green trees."
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
      title: "Nature Landscape",
      description: "A wonderful landscape surrounded by mountains."
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
      title: "Green Forest",
      description: "A beautiful green forest filled with nature."
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1500534623283-312aade485b7",
      title: "Beautiful Beach",
      description: "A relaxing beach with clear blue water."
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
      title: "Snow Mountains",
      description: "Amazing snow-covered mountains under the sky."
    }
  ];

  return (
    <div className="gallery">
      {images.map((image) => (
        <ImageCard
          key={image.id}
          image={image}
        />
      ))}
    </div>
  );
}

export default ImageGallery;    
