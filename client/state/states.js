export const useSlides = () => useState('slides', ()=> { return {data: [], loading: true}});
export const useCards = () => useState('cards', () => {return {data: [], loading: true}});
export const usePages = () => useState('pages', ()=> { return {page: 1, offset: 1}})
export const useTypes = () => useState('types', ()=> []);
export const useParams = () => useState('params', ()=> [])
export const useGeneral = () => useState('general', ()=> {return {data: {}, loading: true}})