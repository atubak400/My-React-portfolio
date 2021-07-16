import './topbar.scss'

export default function topbar() {
  return (
    <div className='topbar'>
      <div className='wrapper'>
        <div className='left'>
          <a href='#intro' className='logo'>
            Atuba.
          </a>
        </div>
        <div className='right'>
          <h3>menu</h3>
        </div>
      </div>
    </div>
  )
}
