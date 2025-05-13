import { NavbarProps } from './interfaces'
import './navbar.css'
import logoNavbar from '/src/assets/logo_icon_navbar.png'
import { useTranslation } from 'react-i18next'

const Navbar: React.FC<NavbarProps> = ({
  onAboutClick,
  onSchemaClick,
  onConfigurationClick,
}) => {
  const { t } = useTranslation()

  return (
    <nav className="navbar">
      <div className="navbar-title">
        <img src={logoNavbar} alt="Navbar Logo" />
        <span>{t('appName')}</span>
      </div>
      <div className="navbar-buttons">
        <button onClick={onSchemaClick} className="active">
          {t('schemaView')}
        </button>
        <button onClick={onConfigurationClick}>{t('configuration')}</button>
        <button onClick={onAboutClick}>{t('about')}</button>
      </div>
    </nav>
  )
}

export default Navbar
