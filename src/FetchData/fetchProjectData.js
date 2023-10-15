export const fetchProjectData = async ( taxonomy, slug, format ) => {
    let data;

    const res = await fetch(`${ process.env.REACT_APP_WordPress_URL }/projects?${ taxonomy }=${ slug }`);
    data = await res.json();
    
    return data;
}