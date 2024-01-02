'use client'

import About from '@/components/About'
import Contact from '@/components/Contact'
import Landing from '@/components/Landing'
import Menu from '@/components/Menu'
import OnlineOrder from '@/components/OnlineOrder'

export default function Home() {
  return (
    <section>
      <div id='landing'>
        <Landing />
      </div>
      <div id='menu'>
        <Menu />
      </div>
      <div id='onlineorder'>
        <OnlineOrder />
      </div>
      <div id='about'>
        <About />
      </div>
      <div id='contact'>
        <Contact />
      </div>
    </section>
  )
}