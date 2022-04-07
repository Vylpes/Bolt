import { IonButtons, IonContent, IonHeader, IonLabel, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Clock from '../../components/Clock';
import './Timer.css';

const Page: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Timer</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                <Clock className="clock-component" />
            </IonContent>
        </IonPage>
    );
};

export default Page;
