import {render, screen} from '@testing-library/react';
import {GifExpertApp} from '../../src/components/GifExpertApp';

describe('Pruebas en <GifExpertApp/>', () => {

    test('Debe mostrar la el texto GifExper tApp', () => { 

        render(<GifExpertApp/>);
        screen.debug();
     })

})
