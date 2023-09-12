import FacebookIcon from '../../assets/facebook.svg';
import InstagramIcon from '../../assets/instagram.svg';
import YoutubeIcon from '../../assets/youtube.svg';
import { SocialsItem, SocialsLink, SocialsList, SocialsWrapper } from './Socials.styled.js';

const Socials = () => {
  return (
        <>
    <SocialsWrapper>
            <SocialsList>
                <SocialsItem>
                    <SocialsLink
                        href="https://facebook.com/"
                        aria-label="Facebook link"
                        target="_blank"
                        referrerPolicy="no-referrer"
                    >
                    <img src={FacebookIcon} alt="Facebook" />
                    </SocialsLink>
                </SocialsItem>
                <SocialsItem>
                    <SocialsLink
                        href="https://instagram.com/"
                        aria-label="Instagram link"
                        target="_blank"
                        referrerPolicy="no-referrer"
                    >
                    <img src={InstagramIcon} alt="Instagram" />
                    </SocialsLink>
                </SocialsItem>
                <SocialsItem>
                    <SocialsLink
                        href="https://youtube.com/"
                        aria-label="Youtube link"
                        target="_blank"
                        referrerPolicy="no-referrer"
                    >
                    <img src={YoutubeIcon} alt="Youtube" />
                    </SocialsLink>
                    </SocialsItem>
                </SocialsList>
    </SocialsWrapper>
    </>
  );
};

export default Socials;