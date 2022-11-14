import style from './banner.module.css'

const Banner = () => {
  return(
    <div className={style.banner_section}>
        <div className={style.banner}>
          <p className={style.text_banner}>Доставка за 10 минут 
            <br /> 
            <span>в любые районы города бесплатно</span>
            <br />
            <button className={style.banner_btn}>Сделать заказ</button>
          </p>
        </div>
      </div>
  )
}

export default Banner