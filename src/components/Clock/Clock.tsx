import { IonLabel, IonProgressBar } from "@ionic/react";
import "./Clock.css";

interface IClockProps {
    className: string
}

const Menu: React.FC<IClockProps> = ( props: IClockProps ) => { 
    const progressValueCurrent = 0.35;
    const progressValueOverall = 0.25;

    return (
        <div className={props.className}>
            <IonLabel className="progress-label">25:00</IonLabel>
            <IonLabel className="status-label">Focus</IonLabel>

            <div className="progress-bar-wrapper">
                <IonLabel className="progress-bar-label">Current</IonLabel>
                <IonProgressBar className="progress-bar" value={progressValueCurrent}></IonProgressBar>
            </div>
            <div className="progress-bar-wrapper">
                <IonLabel className="progress-bar-label">Overall</IonLabel>
                <IonProgressBar className="progress-bar" value={progressValueOverall} color="success"></IonProgressBar>
            </div>

            <IonLabel className="project-label">Example Project</IonLabel>
        </div>
    );
};

export default Menu;
