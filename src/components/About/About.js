import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { about } from '../../portfolio'
import './About.css'

const About = () => {
  const { name, role, description, resume, social } = about

  return (
    <div className='about center'>
      {name && (
        <h1>
          Hola, soy <span className='about__name'>{name}.</span>
        </h1>
      )}

      {role && <h2 className='about__role'>{role}.</h2>}
      <p className='about__desc'>{description && description}</p>
      

      <div className='interests__studying'>
        <div className='interests__section'>
        <h3>Intereses</h3>
        <ul className='interest__list'>
          <li><span role="img" aria-label="Apasionado a la lectura">📚</span> Apasionado a la lectura</li>
          <li><span role="img" aria-label="Practicar deportes">⚽</span> Practicar deportes</li>
          <li><span role="img" aria-label="Color verde">🌿</span> Color verde</li>
        </ul>
        </div>
        <div className='studying_section'>
          <h3>Estudiando</h3>
          <ul>
            <li>🎨 Perfecciono diseño frontend</li>
            <li>🔎 Descubriendo PHP</li>
          </ul>
        </div>
      </div>

      <div className='about__contact center'>
        {resume && (
          <a href='CV Diego Venegas.pdf' download='CV Diego Venegas.pdf'>
            <span type='button' className='btn btn--outline'>
              Descargar CV
            </span>
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
              >
                <LinkedInIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default About
