export default async function strapiFetch(route, getter, state, filters = null){
    try{
        let response = await getter(route, filters);
        state.value.data = response.data;
        state.value.loading = false;
        console.log(state.value)
      } catch {
        state.value.loading = false;
        console.error('data fetch error1')
      }
}