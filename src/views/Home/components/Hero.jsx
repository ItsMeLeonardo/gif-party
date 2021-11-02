import Button from '../../../components/Button'
import ResultItem from '../../../components/ResultItem'
import Tooltip from '../../../components/Tooltip'
import useTrending from '../../../hooks/useTrending'
import { socialNetworks } from '../../../utils/socialNetworks'

export default function Hero() {
  const {
    trends: [trending],
  } = useTrending({ limit: 1 })

  return (
    <main className='Hero'>
      {/* <!-- ========== networks ========== --> */}
      <section className='SocialMedia'>
        <ul className='SocialIcons'>
          {socialNetworks.map((network) => (
            <Tooltip
              key={network.name}
              className='SocialIcon'
              content={network.name}
              position='right'
              to={network.url}
            >
              <Button srcOfIcon={network.icon} />
            </Tooltip>
          ))}
        </ul>
      </section>

      {/* <!-- ========== img hero ========== --> */}
      <ResultItem
        id={trending?.id}
        className='HeroImageContent overlayGradient'
      >
        <img
          src={trending?.image}
          alt={trending?.title}
          className='HeroImage'
        />
        <h1 className='HeroPhrase'>
          The live is <br />
          better with <br />
          gifs
        </h1>
        <h1 className='HeroPhrase border'>
          The live is <br />
          better with <br />
          gifs
        </h1>
      </ResultItem>
    </main>
  )
}
