function Home() {
  return (
    <div className="hero">
      <span style={{ position: 'relative', display: 'inline-block' }}>
        <h1 style={{ margin: 0 }}>Lee</h1>
        <img
          src="https://raw.githubusercontent.com/leecohen14/miluim-sticker/main/assets/miluim-sticker.png"
          alt="עסק של מילואימניק"
          style={{
            position: 'absolute',
            right: '-72px',
            top: '-12px',
            width: '72px',
            height: '72px',
            borderRadius: '50%',
            objectFit: 'cover',
            transform: 'rotate(-8deg)',
            boxShadow: '0 4px 12px rgba(0,0,0,.2)',
          }}
        />
      </span>
      <p style={{ marginTop: '16px' }}>App for Testing!</p>
    </div>
  )
}

export default Home
