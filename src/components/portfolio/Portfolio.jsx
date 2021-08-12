import './portfolio.scss'

export default function portfolio() {
  return (
    <div class='portfolio' id='portfolio'>
      <h1>Portfolio</h1>
      <ul>
        <li className='active'>Featured</li>
        <li>React</li>
        <li>HTML and CSS</li>
        <li>Wordpress</li>
        <li>Bootstrap</li>
      </ul>
      <div className='container'>
        <div className='item'>
          <img
            src='https://applicable.co.nz/wp-content/uploads/revslider/fullslide-phone1-thegem-post-thumb-large.jpg'
            alt=''
          />
          <h3>Banking App</h3>
        </div>
        <div className='item'>
          <img
            src='https://applicable.co.nz/wp-content/uploads/revslider/fullslide-phone1-thegem-post-thumb-large.jpg'
            alt=''
          />
          <h3>Banking App</h3>
        </div>
        <div className='item'>
          <img
            src='https://applicable.co.nz/wp-content/uploads/revslider/fullslide-phone1-thegem-post-thumb-large.jpg'
            alt=''
          />
          <h3>Banking App</h3>
        </div>
        <div className='item'>
          <img
            src='https://applicable.co.nz/wp-content/uploads/revslider/fullslide-phone1-thegem-post-thumb-large.jpg'
            alt=''
          />
          <h3>Banking App</h3>
        </div>
        <div className='item'>
          <img
            src='https://applicable.co.nz/wp-content/uploads/revslider/fullslide-phone1-thegem-post-thumb-large.jpg'
            alt=''
          />
          <h3>Banking App</h3>
        </div>
        <div className='item'>
          <img
            src='https://applicable.co.nz/wp-content/uploads/revslider/fullslide-phone1-thegem-post-thumb-large.jpg'
            alt=''
          />
          <h3>Banking App</h3>
        </div>
      </div>
    </div>
  )
}
