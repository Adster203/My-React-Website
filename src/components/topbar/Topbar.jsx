import './topbar.min.css';

export default function topbar() {
  return (
    <div className='topbar'>
      <div className='wrapper'>
        <div className='left'>
          <a href='#intro' className='logo'>
            genius.
          </a>
        </div>
        <div className='right'></div>
      </div>
    </div>
  );
}
