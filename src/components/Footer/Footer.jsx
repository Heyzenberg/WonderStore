import './Footer.scss';

const Footer = () => {

    const thisYear = new Date().getFullYear()

    return(
        <div className="Footer">
            <p className='company'><span>Red</span><span>Moon</span> project 2020-{thisYear}</p>
            <p className='developer'><span>E</span>vgeny <span>M</span>urenets</p>
        </div>
    )
}

export { Footer };