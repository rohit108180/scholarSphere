import { IoBarChartSharp } from 'react-icons/io5'
import { MdQueryStats } from 'react-icons/md'
import { FaWpforms } from 'react-icons/fa'
import { ImProfile } from 'react-icons/im'

export const links = [
    {
        id :1,
        text:'Home',
        path :'',
        icon : <IoBarChartSharp/>
    },
    {
        id :2,
        text:'Post',
        path :'all-jobs',
        icon : <MdQueryStats/>
    },
    {
        id :3,
        text:'notification',
        path :'add-job',
        icon : <FaWpforms/>
    },
    {
        id :4,
        text:'Profile',
        path :'profile',
        icon : <ImProfile/>
    },
]