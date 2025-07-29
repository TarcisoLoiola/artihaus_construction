import CommitmentCards from './CommitmentCards'
import Link from "./Link";

const OurCommitment = ({ className, value }) => {
  const { title, subtitle, description } = value.pages.home.sections.ourcommitment

  return (
    <section className='our-commitment backgroundColor-lightgray'>
      <div className='page-content-container'>
        <div className='our-commitment--describe flex-row marginBottom-lg'>
          <h1 className="h1 color-blue flex-1">{title}</h1>
          <div className="color-gray marginTop-sm flex-1">
            {
              description.map((des, index) => (
                <p key={index} className="p">{des}</p>
              ))
            }
          </div>
        </div>
        <CommitmentCards className='home-our-commitment text-center' />
        <Link to='/about' text='Learn More' className='button-md marginTop-lg' color='white' backgroundColor='gold' icon='arrow' />
      </div>
    </section>
  )
};
export default OurCommitment;