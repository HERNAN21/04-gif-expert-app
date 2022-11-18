import { useState } from 'react'
import { AddCategory,GifsGrid } from './Categories';


function App() {

  const [categories, setCategories] = useState([]);

  const onAddCategorry = (newCategory)=>{
    if (categories.includes(newCategory)) {
      return;
    }
    setCategories([newCategory,...categories]);
  }
  
  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory onNewCategory={(event=>onAddCategorry(event))}/>
      {
        categories.map(category => (<GifsGrid key={category} category={category}></GifsGrid>))
      }
    </>
  )
}

export default App
