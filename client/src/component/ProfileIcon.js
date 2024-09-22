import React from 'react'
import Wrapper from '../css/wrapper/ProfileIcon'
import {convertToInitials} from '../utils/stringUtils'
import { FaUser } from 'react-icons/fa'
// import img from '../assets/images/profile.'

import Avatar from '@mui/material/Avatar';

export const ProfileIcon = (props) => {
  const {avatar, name } = props

  function getColorFromName(name) {
    if(!name)return "#fff"
    // Create a hash function to map the name to a color
    const hash = Array.prototype.reduce.call(name, (a, b) => {
      a = ((a << 5) - a) + b.charCodeAt(0);
      return a & a;
    }, 0);
  
    // Use the hash to generate a random color
    const hue = hash % 360;
    const saturation = 0.5 + (hash % 100) / 100;
    const lightness = 0.5 + (hash % 100) / 100;
  
    // Convert HSL to RGB
    const rgb = hslToRgb(hue, saturation, lightness);
  
    // Return the color as a hex string
    return `#${rgb[0].toString(16).padStart(2, '0')}${rgb[1].toString(16).padStart(2, '0')}${rgb[2].toString(16).padStart(2, '0')}`;
  }
  
  // helper function to convert HSL to RGB
  function hslToRgb(h, s, l) {
    const hNorm = h / 360;
    const sNorm = s;
    const lNorm = l;
  
    let r, g, b;
  
    if (sNorm === 0) {
      r = g = b = lNorm;
    } else {
      const q = lNorm < 0.5 ? lNorm * (1 + sNorm) : lNorm + sNorm - lNorm * sNorm;
      const p = 2 * lNorm - q;
      r = hueToRgb(p, q, hNorm + 1 / 3);
      g = hueToRgb(p, q, hNorm);
      b = hueToRgb(p, q, hNorm - 1 / 3);
    }
  
    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
  }
  
  // helper function to convert hue to RGB component
  function hueToRgb(p, q, t) {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 1 / 2) return q;
    if (t < 2 / 3) return p + (q - p) * 6 * (2 / 3 - t);
    return p;
  }
  
  
  return (
    <Wrapper>
      <Avatar style={{backgroundColor:getColorFromName(name)}}>
      {
        avatar?
        
      <img src={avatar}></img>
      :
      name?
         convertToInitials(name):<FaUser/>
         }
          </Avatar>
        
    </Wrapper>
  )
}
