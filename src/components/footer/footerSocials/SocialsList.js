import { DummySocialsData } from '../../../data/DummySocialsData'
import SocialElement from './SocialElement'
import classes from './SocialsList.module.css'

function SocialsList() {

    const allSocials = DummySocialsData.map((social) => (
        <SocialElement
            key={social.id}
            id={social.id}
            icon={social.icon}
        />
    ))

    return (
        <div>
            <ul className={classes['socials-holder']}>
                {allSocials}
            </ul>
        </div>
    )
}

export default SocialsList