import ProfileCard from './ProfileCard';
import AlexaImg from './images/alexa.png';
import CortanaImg from './images/cortana.png';
import SiriImg from './images/siri.png';

function App() {
    return (
        <div>
            <div>Personal Digital Assitants</div>
            <ProfileCard alt='Alexa logo' image={AlexaImg} title='Alexa' handle='@alexa98' />
            <ProfileCard alt='Cortana logo' image={CortanaImg} title='Cortana' handle='@cortana_official' />
            <ProfileCard alt='Siri logo' image={SiriImg} title='Siri' handle='@siri123' />
        </div>
    )
}

export default App;