import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/crypto-tracker.png'
import IMG2 from '../../assets/nft.png'
import IMG3 from '../../assets/staybnb.png'
import IMG4 from '../../assets/CBO.png'
import IMG5 from '../../assets/keychainWebsite.png'
import IMG6 from '../../assets/keychainMobile.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Crypto Currency Price Tracker',
    github: 'https://github.com/Okagbue00/Francis-crypto-tracker',
    demo: 'https://react-tracker00.herokuapp.com/'
  },

  {
    id: 2,
    image: IMG2,
    title: 'Monkey Ape NFT Collection',
    github: 'https://github.com/Okagbue00/Monkey-Ape-NFT',
    demo: 'https://monkey-appnft.herokuapp.com/'
  },

  {
    id: 3,
    image: IMG3,
    title: 'Home Apartment Rent Suite',
    github: 'https://github.com/Okagbue00/Staybnb-Apartment/tree/main/staybnbProject',
    demo: 'https://staybnb.herokuapp.com/'
  },

  

  {
    id: 4,
    image: IMG4,
    title: 'Community Based Organization (CBO)',
    github: 'https://github.com/Okagbue00/FoundationHome',
    demo: 'https://foundation-helper.herokuapp.com/'
  },

  {
    id: 5,
    image: IMG5,
    title: 'Bluetooth KeyChain Design UI Design',
    github: 'https://github.com/Okagbue00/KeyChain-UI_website',
    demo: 'https://www.figma.com/file/74K3QektrvgK2bX9IZgYSc/Bluetooth-Keychain?node-id=0%3A1'
  },


  {
    id: 6,
    image: IMG6,
    title: 'KeyChain Mobile UI Design',
    github: 'https://github.com/Okagbue00/KeyChain-UI-design',
    demo: 'https://www.figma.com/file/LVxIMhhrlZ4yDz03nMpUaT/Project-1?node-id=0%3A1'
  }
]

const portfolio = () => {
  
  return (
    <section id='portfolio'>
      <h5>Recent Works</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {data.map(({id, image, title, github, demo}) => {
          return (
        <article key={id} className='portfolio__item'>
          <div className='portfolio__item-img'>
          <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <div className='portfolio__item-cta'>
          <a href={github} className='btn' target='_blank'>Github</a>
          <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>

          </div>
        </article>
          )
        })
        }
        </div>
    </section>  
  )
}

export default portfolio