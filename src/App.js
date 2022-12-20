import ProfileCard from './ProfileCard';
import AlexaImg from './images/alexa.png';
import CortanaImg from './images/cortana.png';
import SiriImg from './images/siri.png';
import 'bulma/css/bulma.css';


function App() {
    return (
        <div>

            {/* Header */}
            <section className='hero is-primary'>
                <div className='hero-body'>
                    <p className='title'>
                        Personal Digital Assitants
                    </p>
                </div>
            </section>

            {/* Cards */}
            <div className='container'>
                <section className='section'>
                    <div className='columns is-centered'>

                        {/* Alexa */}
                        <div className='column is-one-fifth'>
                            <ProfileCard
                                alt='Alexa logo'
                                image={AlexaImg}
                                title='Alexa'
                                handle='@alexa98'
                                description='Alexa was created by Amazon and helps you buy things.'
                            />
                        </div>

                        {/* Cortana */}
                        <div className='column is-one-fifth'>
                            <ProfileCard
                                alt='Cortana logo'
                                image={CortanaImg}
                                title='Cortana'
                                handle='@cortana_official'
                                description='Cortana was made by Microsoft to listen to the user.'
                            />
                        </div>

                        {/* Siri */}
                        <div className='column is-one-fifth'>
                            <ProfileCard
                                alt='Siri logo'
                                image={SiriImg}
                                title='Siri'
                                handle='@siri123'
                                description='Siri is the favorite voice assistent.'
                            />
                        </div>

                    </div>
                </section>
            </div>
        </div>
    )
}

export default App;