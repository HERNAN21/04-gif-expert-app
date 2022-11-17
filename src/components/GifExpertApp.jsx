import { useState } from 'react'
import { AddCategory,GisfGrid } from './Categories';


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
        categories.map(category => (<GisfGrid key={category} category={category}></GisfGrid>))
      }
    </>
  )
}

export default App
