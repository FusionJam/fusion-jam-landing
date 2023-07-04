import {
            FacebookFilled,
            InstagramOutlined,
            PhoneOutlined,
            WhatsAppOutlined
        } from '@ant-design/icons'


function SocialMedia() {
  return (
    <div className='Social-Container'>
        <a href="https://www.facebook.com/FusionJAMMx/" target='_blank'>
          <FacebookFilled className='Social Facebook' />
        </a>
        <a href="https://www.instagram.com/FusionJAMMx/" target='_blank'>
          <InstagramOutlined className='Social Instagram'/>
        </a>
        <a href="tel:+524442914186">
          <PhoneOutlined className='Social Phone'/>
        </a>
        <a href="https://api.whatsapp.com/send?phone=524442914186&text=Hola me gustaría hacer una cotización" target='_blank'>
          <WhatsAppOutlined className='Social Whatsapp'/>
        </a>
    </div>
  )
}

export default SocialMedia