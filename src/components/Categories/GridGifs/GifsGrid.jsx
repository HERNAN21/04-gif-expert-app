import { useFetchGifs } from '../../../hooks/useFetchGifs';
import { GifsItem } from './GifsItem';

export const GifsGrid = ({category}) => {

  const {images,isLoading} = useFetchGifs(category);

  console.log(isLoading);


  return (
    <>
      <div>
        <h3>{category}</h3>
        {isLoading && (<h2>Cargando...</h2>)}
        <div className="card-grid">
          {
              images.map((image) =>(
                  <GifsItem key={image.id} {...image}/>
              ))
          }
        </div>
      </div>
    </>
  )
}
