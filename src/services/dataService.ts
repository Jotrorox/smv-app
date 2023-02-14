export const fetchData = async () => {
    const response = await fetch('https://jsonendpoint.com/my-unique/endpoint/eohmd');
    const data = await response.json();
    console.log(data)
    const formattedData = data.rights.map((item: any) => [item[Object.keys(item)[0]], item[Object.keys(item)[1]]]);
    console.log(formattedData);
    return formattedData;
}


