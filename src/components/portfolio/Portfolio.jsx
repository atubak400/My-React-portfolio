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
            src='https://appcanvas.io/wp-content/uploads/2019/10/john.jpg'
            alt=''
          />
          <h3>Banking App</h3>
        </div>
      </div>
    </div>
  )
}
