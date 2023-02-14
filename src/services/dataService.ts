export const fetchData = async () => {
    const response = await fetch('https://jsonendpoint.com/my-unique/endpoint/eohmd');
    const data = await response.json();
    console.log(data)
    const formattedData = data.map((item: string[]) => [item[0], item[1]]);
    console.log(formattedData);
    return data;
}


