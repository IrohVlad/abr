export const useSlides = () => useState('slides', ()=> { return {data: [], loading: true, errors: null}});
export const useCards = () => useState('cards', () => {return {data: [], loading: true, errors: null}});
export const usePages = () => useState('pages', ()=> { return {page: 1, offset: 1}})
export const useTypes = () => useState('types', ()=> {return {data: [], loading: true, errors: null}});
export const useParams = () => useState('params', ()=> {return {data: [], loading: true, errors: null}});
export const useGeneral = () => useState('general', ()=> {return {data: {}, loading: true, errors: null}})