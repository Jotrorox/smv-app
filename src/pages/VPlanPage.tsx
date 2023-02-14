import React, { useState, useEffect } from "react";
import {
    IonContent,
    IonHeader,
    IonPage,
    IonRefresher,
    IonRefresherContent,
    IonCard,
    IonCardContent,
    IonList,
    IonItem,
    IonLabel,
} from "@ionic/react";

interface VertretungsData {
    [key: string]: {
        [key: string]: {
            stunde: string;
            vertreter: string;
            fach: string;
            raum: string;
            vertretungs_text: string;
        };
    };
}

const Vertretungsplan: React.FC = () => {
    const [data, setData] = useState<VertretungsData>({});

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        fetch("https://jsonendpoint.com/my-unique/endpoint/x6j0t ")
            .then((response) => response.json())
            .then((data: VertretungsData) => {
                setData(data);
            });
    };

    const doRefresh = (event: CustomEvent) => {
        fetchData();
        event.detail.complete();
    };

    return (
        <IonPage>
            <IonHeader>
                <h1>Vertretungsplan</h1>
            </IonHeader>
            <IonContent>
                <IonRefresher slot="fixed" onIonRefresh={doRefresh}>
                    <IonRefresherContent></IonRefresherContent>
                </IonRefresher>
                {Object.keys(data).map((day, index) => (
                    <IonCard key={index}>
                        <IonCardContent>
                            <h2>{day}</h2>
                            <IonList>
                                {Object.keys(data[day]).map((klasse, index) => (
                                    <IonItem key={index}>
                                        <IonLabel>
                                            <h3>{klasse}</h3>
                                            <p>
                                                <strong>Stunde:</strong> {data[day][klasse].stunde}
                                            </p>
                                            <p>
                                                <strong>Vertreter:</strong>{" "}
                                                {data[day][klasse].vertreter}
                                            </p>
                                            <p>
                                                <strong>Fach:</strong> {data[day][klasse].fach}
                                            </p>
                                            <p>
                                                <strong>Raum:</strong> {data[day][klasse].raum}
                                            </p>
                                            <p>
                                                <strong>Vertretungs-text:</strong>{" "}
                                                {data[day][klasse].vertretungs_text}
                                            </p>
                                        </IonLabel>
                                    </IonItem>
                                ))}
                            </IonList>
                        </IonCardContent>
                    </IonCard>
                ))}
            </IonContent>
        </IonPage>
    );
};

export default Vertretungsplan;
