import logotipo from 'assets/logos/Logotipo-Vertical-Preto-SemFundo.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram,
    faLinkedin,
    faGithub
} from "@fortawesome/free-brands-svg-icons";
import svgOnda from 'assets/svgs/onda.svg';
import './styles.css';

function Footer() {

    const onda =
        <img className="svg" src={svgOnda} alt="" width={'100%'} aria-hidden
            style={{ marginTop: '-1px' }} />

    return (
        <footer>
            {onda} {/* efeito de onda com gradiente, somente cosmetico */}
            <div className='container'>
                <img className='footer-logo' src={logotipo} alt="logo secomp" />
                <p>Nos acompanhe em nossas redes sociais!</p>
                <div className='social'>
                    <a href="https://www.youtube.com/channel/UChj1pycWmHOJDeJkDf6RraA" target = "_blank" rel="noreferrer" className="youtube social">
                        <FontAwesomeIcon icon={faYoutube} size="2x" />
                    </a>
                    <a href = "https://www.linkedin.com/company/secomp-ufscar/" target = "_blank" rel="noreferrer" className="linkedin social">
                        <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </a>
                    <a href = "https://www.instagram.com/secompufscar" target = "_blank" rel="noreferrer" className="instagram social">
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a>
                    <a href = "https://www.facebook.com/secompufscar" target = "_blank" rel="noreferrer" className="facebook social">
                        <FontAwesomeIcon icon={faFacebook} size="2x" />
                    </a>
                    <a href = "https://twitter.com/secompufscar" target = "_blank" rel="noreferrer" className="twitter social">
                        <FontAwesomeIcon icon={faTwitter} size="2x" />
                    </a>
                    <a href = "https://github.com/secompufscar" target="_blank" rel="noreferrer" className="github social">
                        <FontAwesomeIcon icon={faGithub} size="2x" />
                    </a>
                </div>
                <p>Dúvidas ou sugestões? <a href="mailto:suporte@secompufscar.com.br?subject=SECOMP BETA Dúvidas/Sugestões">Contate-nos</a></p>
                <div className='endereco'>
                    <a href="https://site.dc.ufscar.br/" target="_blank" rel="noreferrer">
                        Departamento de Computação</a> (UFSCar) - Rod. Washington Luiz, São Carlos - SP, 13565-905
                </div>
            </div>
        </footer >
    );
}

export default Footer;