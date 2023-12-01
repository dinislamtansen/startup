import { TypeAnimation } from 'react-type-animation';

const Animate = () => {
  return (
    
    <TypeAnimation
    sequence={[
      // Same substring at the start will only be typed once, initially
      'I am a Front End Developer',
      1000,
      'I am a React Developer',
      1000,
      'I am a Software developer',
      1000,
    ]}
    speed={50}
    style={{ fontSize: '2.5em', color: 'white', fontWeight:'bold' }}
    repeat={Infinity}
  />
  )
}

export default Animate