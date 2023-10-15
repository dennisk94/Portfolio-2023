export const fetchPageData = async ( pageID ) => {
    const res = await fetch(`${ process.env.REACT_APP_WordPress_URL }/pages/${ pageID }?_fields=acf&acf_format=standard`);
    let data = await res.json();
    return data;
}