export interface VertretungsplanData {
    [day: string]: {
        [klasse: string]: {
            stunde: string;
            vertreter: string;
            fach: string;
            raum: string;
            vertretungs_text: string;
        };
    };
}

export const fetchVertretungsplanData = async (): Promise<VertretungsplanData> => {
    const response = await fetch('https://your-api-url');
    return response.json();
};
