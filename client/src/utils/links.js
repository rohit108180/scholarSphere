import { IoBarChartSharp } from 'react-icons/io5'
import { MdQueryStats } from 'react-icons/md'
import { FaWpforms } from 'react-icons/fa'
import { ImProfile } from 'react-icons/im'

export const links = [
    {
        id :1,
        text:'Home',
        path :'',
        icon : <IoBarChartSharp/>,
    },
    {
        id :2,
        text:'Post',
        path :'Create post',
        icon : <MdQueryStats/>,
        locked: true
    },
    {
        id :3,
        text:'Notification',
        path :'/notifications',
        icon : <FaWpforms/>,
        locked: true
    },
    {
        id :4,
        text:'Profile',
        path :'profile',
        icon : <ImProfile/>,
        locked: true
    },
]