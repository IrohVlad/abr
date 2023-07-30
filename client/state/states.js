export const useSlides = () => useState('slides', ()=> []);
export const useCards = () => useState('cards', () => [{id: 1, title: 'first abbr card', details: 'lorem', price: 55, img: 'https://res.cloudinary.com/practicaldev/image/fetch/s--Py_4gez7--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/vtxhr7xsnrtbhihmqqho.png'}]);
export const usePages = () => useState('pages', ()=> { return {page: 1, offset: 1}})