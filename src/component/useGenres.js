const useGenres=(slectedGenres) =>{
    if(slectedGenres.length < 1) return " ";
    
    const GendraIds=slectedGenres.map((g)=>g.id);
    return GendraIds.reduce((acc,crr) => acc +"," + crr);
}
export default useGenres;