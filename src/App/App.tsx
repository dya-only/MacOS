import {Fragment, useState} from 'react'
import Draggable from 'react-draggable'
import style from './App.module.css'

import BGVentura from '../assets/BG_ventura.jpg'
import Logo from '../assets/logo.png'
import Finder from '../assets/icons/finder.png'
import Setting from '../assets/icons/setting.png'
import Safari from '../assets/icons/safari.png'
import LaunchPad from '../assets/icons/launchpad.png'
import Mail from '../assets/icons/mail.png'
import MacBook from '../assets/macbook.png'

function App(): JSX.Element {
  const [aboutThisMac, setAboutThisMac] = useState(false)
  const [aboutThisMacPos, setAboutThisMacPos] = useState({ x: 0, y: 0 })

  const trackPos = (data: { x: number; y: number }) => {
    setAboutThisMacPos({ x: data.x, y: data.y })
  }

  return (
    <Fragment>
      { aboutThisMac ?
        <Draggable onDrag={(e, data) => trackPos(data)}>
          <div className={style.about_this_mac_contain}>
            <div className={style.about_this_mac}>
              <div className={style.task_btn_contain}>
                <button className={style.close} onClick={() => setAboutThisMac(false)}></button>
                <div className={style.none}></div>
                <div className={style.none}></div>
              </div>

              <div className={style.mac_info}>
                <img className={style.macbook} src={MacBook} alt="" />
                <div className={style.mac_name}>MacBook Air</div>

                <div className={style.spec_contain}>
                  <div className={style.spec_title_contain}>
                    <div className={style.spec_title}>Chip</div>
                    <div className={style.spec_title}>Memory</div>
                    <div className={style.spec_title}>Serial Number</div>
                    <div className={style.spec_title}>macOS</div>
                  </div>
                  <div className={style.spec_info_contain}>
                    <div className={style.spec_info}>Apple M2</div>
                    <div className={style.spec_info}>8 GB</div>
                    <div className={style.spec_info}>ABCDEFGHIJK</div>
                    <div className={style.spec_info}>Ventura 13.5</div>
                  </div>
                </div>

                <button className={style.info_btn}>More Info...</button>
              </div>
            </div>
          </div>
        </Draggable>
      : null }

      <img className={style.bg} src={BGVentura} alt={''} />

      <div className={style.bar}>
        <div className={style.bar_in}>
          <img className={style.logo} src={Logo} alt="" onClick={() => setAboutThisMac(true)} />
          <div className={style.app_name}>Finder</div>
          <div className={style.bar_menu}>File</div>
          <div className={style.bar_menu}>Edit</div>
          <div className={style.bar_menu}>View</div>
          <div className={style.bar_menu}>Go</div>
          <div className={style.bar_menu}>Window</div>
          <div className={style.bar_menu}>Help</div>
        </div>
        <div className={style.bar_in2}>
          <div className={style.bar_menu}>Mon Apr 3 8:03 PM</div>
        </div>
      </div>

      <div className={style.dock_contain}>
        <div className={style.dock}></div>
        <div className={style.icons}>
          <img className={style.icon} src={Finder} alt=""/>
          <img className={style.icon} src={LaunchPad} alt=""/>
          <img className={style.icon} src={Setting} alt=""/>
          <img className={style.icon} src={Safari} alt=""/>
          <img className={style.icon} src={Mail} alt=""/>
        </div>
      </div>
    </Fragment>
  )
}

export default App