import LOGO from '../img/F7E143.png' 
import SocialMedia from './SocialMedia'
export default function ContactCard() {
  return (
    <div className="Logo-Container">
      <div className='row'>
        <img src={LOGO} alt="Fusion JAM Logo" className="Logo-IMG" />
      </div>
      <SocialMedia />
    </div>
  )
}
