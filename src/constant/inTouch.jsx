import { IoCallOutline, IoMail, IoShareSocialSharp } from 'react-icons/io5';
import { FaInstagram } from 'react-icons/fa6';
const touch = [
  {
    id: 1,
    icon: <IoCallOutline size={30} />,
    title: 'Phone',
    desc: '+91 90805 75392',
  },
  {
    id: 2,
    icon: <IoMail size={30} />,
    title: 'Mail',
    desc: 'support@pisence.com',
  },
  {
    id: 3,
    icon: <IoShareSocialSharp size={30} />,
    title: 'Stay In Touch',
    desc: <FaInstagram size={25} />,
  },
];

export default touch;
