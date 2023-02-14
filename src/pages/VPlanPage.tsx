import {
    IonCard, IonCardContent, IonCardHeader, IonCardTitle,
    IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRefresher, IonRefresherContent, IonRow, IonTitle, IonToolbar
} from '@ionic/react';
import React, { useState } from 'react';
import { fetchData } from '../services/dataService';

const VPlanPage: React.FC = () => {
    const [data, setData] = useState([]);

    const handleRefresh = (event: CustomEvent) => {
        fetchData().then((response) => {
            setData(response);
            event.detail.complete();
        });
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Data Page</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
                    <IonRefresherContent />
                </IonRefresher>
                {data.map((item, index) => (
                    <IonCard key={index}>
                        <IonCardHeader>
                            <IonCardTitle>{item[0]}</IonCardTitle>
                        </IonCardHeader>
                        <IonCardContent>
                            {item[1]}
                        </IonCardContent>
                    </IonCard>
                ))}


            </IonContent>
        </IonPage>
    );
};

export default VPlanPage;
