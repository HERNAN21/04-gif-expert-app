
import { render,screen } from "@testing-library/react"
import { GifsItem } from "../../../../src/components/Categories/GridGifs/GifsItem"

describe('Puebas en <GifsItem/>', () => { 
    const title = "asd";
    const url = "http://";

    test('debe hacer match con el snapshot', () => { 
        const {container}=render(<GifsItem title={title} url={url} />)

        expect(container).toMatchSnapshot();

    })

    test('Debe mostrar la imagen con el url Indicado', () => {
        render(<GifsItem title={title} url={url}/>)
        //   screen.debug();
        // expect(screen.getByRole('img').src).toBe(url);
        // expect(screen.getByRole('img').alt).toBe(title);
        const {src,alt} = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
    })
    
    test('debe de mostrar el titulo en el componente ', () => { 
        render(<GifsItem title={title} url={url}/>)
        expect(screen.getByText(title)).toBeTruthy();
     })

 })