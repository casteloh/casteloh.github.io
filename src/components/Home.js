import React from 'react'
import gazelle from '../images/gazelle.jpeg'
import bikes from '../images/bikes.jpeg'
import headshot from '../images/DSC_6678.jpeg'

export default function Home() {
  return <section className="section">
    <div className="columns is-desktop">
      <div className="column"></div>
      <div className="column is-one-third-desktop">
        <img src={headshot}></img><br /><br />
        <p className="subtitle">Castel Occupational Health Ltd</p>
        <p>Castel Occupational Health Ltd is an independent specialist occupational health company. Its founder is Dr Christopher Schenk MBBS DAvMed DRCOG MFOM.<br /><br />
        Christopher qualified in medicine from Charing Cross Hospital in London and spent his formative years in the British Army working in Primary Care, Occupational Medicine and Aviation Medicine.  As part of his experience in Aviation Medicine he qualified as an Army Pilot, flying helicopters, and was awarded the top student award from his Pilots’ course.  He finished his military career with three years living and working in the Far East on Borneo.<br /><br />
        </p>
        <img src={gazelle}></img><br /><br />
        <p>
        After a total of 16 years in the Army he completed his occupational medicine training at the UK Civil Aviation Authority before working in independent practice and then for a number of occupational health provider companies.  During this time he gained experience in a wide range of occupations from the public sector to the private sector including organisations such as the Royal Mail Group, Her Majesty’s Prison Service and a number of institutions in the Financial Sector.  He held senior management positions and was responsible for developing and promoting occupational medicine at all levels in all organisations.<br /><br />
        In 2008 he refreshed his primary care qualification and skills, returning to general practice to come back up to date with clinical practice before returning to occupational medicine and management with an International organisation working both nationally and internationally.  This included considerable work within the Energy Sector and included projects in Europe and Africa. <br /><br />
        In recent years he has gained a knowledge of Insurance Medicine and the fascinating world of medical underwriting. <br /><br />
        Christopher’s background and experience ranges from the shop floor to the boardroom and his communication skills transcend boundaries, making him highly effective in project management and consultancy programmes where an analytical review of medical systems and processes from grass roots to strategy and blue-sky thinking is required. <br /><br />
        He has a particular interest in risk assessment and management (being also an advanced motorcycle rider with a RoSPA Gold certificate) and a passion for quality medical systems putting excellence and good communication at the heart of his ethos.  He is expert in identifying health needs from SMEs to large corporations, discovering what organisations do well and what can be improved in the provision of care to employees. <br /><br />
        </p>
        <img src={bikes}></img><br /><br />
        <p>
        Manpower, at all levels, is the most important and valuable resource in any business.  A happy, healthy, workforce will be more productive and cost less in terms of staff turnover and recruitment costs and looking after employees from the Managing Director to the new starter is the right thing to do in a 21st century organisation.<br /><br />
        </p>
        <p className="subtitle">What Castel Occupational Health Can Do For You</p>
        <p>Castel Occupational Health can provide expert services including:</p><br />
        <ul>
          <li>- Complex case management</li><br />
          <li>- Health needs assessment and gap analysis of organisational health care</li><br />
          <li>- Audits of medical systems and health care provision, nationally and internationally</li><br />
          <li>- Risk assessments</li><br />
          <li>- Medico-legal occupational health case review</li><br />
        </ul>
      </div>
      <div className="column"></div>
    </div>
  </section>
}