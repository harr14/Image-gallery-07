import ImageGallery from "./components/ImageGallery.jsx";
import "./App.css";

function App() {
  return (
    <>
      <header className="header">
        <h1>Dynamic Image Gallery</h1>
        <p>Explore beautiful images using React</p>
      </header>

      <main>
        <ImageGallery />
      </main>
    </>
  );
}

export default App;