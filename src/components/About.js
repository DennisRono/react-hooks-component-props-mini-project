const About = ({ about, img = 'https://via.placeholder.com/215' }) => {
  return (
    <aside>
      <img src={img} alt="blog logo" />
      <p>{about}</p>
    </aside>
  )
}

export default About
