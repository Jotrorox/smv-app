
/** This function fetches the VPlan data and returns it
 * The data must be json in a format like this
 * { "14-2-23":{"6a":{"stunde":"1", "vertreter":"En", "fach":"None", "raum":"2.26", "vertretungs_text":"Raumverlegung"}, "7b":{"stunde":"4", "vertreter":"Ma", "fach":"Ethik", "raum":"2.12", "vertretungs_text":"Ersatz"}}}
 * **/

export const fetchData = async () => {
    const response = await fetch('https://jsonendpoint.com/my-unique/endpoint/x6j0t ');
    const data = await response.json();
    console.log(data)
    const formattedData = data.rights.map((item: any) => [item[Object.keys(item)[0]], item[Object.keys(item)[1]]]);
    console.log(formattedData);
    return formattedData;
}


