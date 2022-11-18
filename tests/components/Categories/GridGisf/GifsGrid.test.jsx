import { render,screen } from "@testing-library/react";
import { GifsGrid } from "../../../../src/components/Categories/GridGifs/GifsGrid";
import { useFetchGifs } from "../../../../src/hooks/useFetchGifs";

jest.mock('../../../../src/hooks/useFetchGifs');

describe('Pruebas en <GifsGrid/>', () => { 
    useFetchGifs.mockReturnValue({
        images:[],
        isLoading: true
    })

    const category = 'One Punch';
    test('Debe de mostrar el loading inicialmente', () => {
        render(<GifsGrid category={category}/>)
        //   screen.debug();
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));
    })

    test('debe de mostrar item cuando se cargan las imagenes useFetchGifs', () => { 
        const gifs = [
            {
                id: 'asdasdasd',
                title: 'Test',
                url:'http://asdasdasd.com/asd'
            },
            {
                id: 'tesasdasdasd',
                title: 'Testasdasd',
                url:'http://asdasdasd.com/asd'
            }
        ]
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        })

        render(<GifsGrid category={category}/>)
        // screen.debug();

        expect(screen.getAllByRole('img').length).toBe(2);


    })
    
 })