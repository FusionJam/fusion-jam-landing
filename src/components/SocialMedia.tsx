import {
            FacebookFilled,
            InstagramOutlined,
            PhoneOutlined,
            WhatsAppOutlined
        } from '@ant-design/icons'


function SocialMedia() {
  return (
    <div className='Social-Container'>
        <FacebookFilled className='Social' />
        <InstagramOutlined className='Social'/>
        <PhoneOutlined className='Social'/>
        <WhatsAppOutlined className='Social'/>
    </div>
  )
}

export default SocialMedia