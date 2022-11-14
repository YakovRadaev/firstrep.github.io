import style from './about.module.css'

const About = () => {
    return(
        <div className={style.text_section}>
          <h2>О нас</h2>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non bibendum erat, a hendrerit lacus. Sed sit amet tellus ex. In dictum, nibh et finibus condimentum, sapien dolor consequat felis, et faucibus enim augue faucibus nibh
          </p>
          <p>
          Nam non aliquam nibh. Pellentesque ullamcorper rutrum orci ut scelerisque. Integer consequat eget lacus gravida iaculis. Morbi ac turpis non elit vulputate maximus at ac elit. In porta massa eget eros sagittis, nec tincidunt felis ullamcorper.
          </p>
      </div>
    )
}

export default About