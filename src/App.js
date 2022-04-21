import cuid from "cuid"
import { useCallback, useState } from "react"
import DropZone from "./DropZone"
import ImageGrid from "./ImageGrid"

function App() {

  const [images, setImages] = useState([])

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.map((file) => {
      const reader = new FileReader()
      reader.onload = function (e) {
        setImages((prevState) => [
          ...prevState,
          { id: cuid(), src: e.target.result },
        ])
      }
      reader.readAsDataURL(file)
      return file
    });
  }, [])


  return (
    <div>
      <div className="container">
        <h1 className="text-center">Drag and Drop Test</h1>
        <DropZone onDrop={onDrop} accept={"image/*"} />
        <ImageGrid images={images} />
      </div>
    </div>
  )
}

export default App
