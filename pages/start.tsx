export default function Start() {
  return (
    <div className="bg-black text-white min-h-screen px-6 py-16">
      <h1 className="text-4xl font-extrabold text-center mb-10">Unlock 0% Business Funding</h1>
      <div className="max-w-4xl mx-auto mb-12">
        <video
          controls
          className="w-full rounded-xl shadow-xl"
          poster="/video-cover.jpg"
        >
          <source src="/brian-v3-final.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="max-w-5xl mx-auto">
        <iframe
          src="https://fundedbiz.com/embedded/872/fundedbiz"
          width="100%"
          height="1000px"
          style={{
            border: 'none',
            borderRadius: '12px',
            boxShadow: '0 0 25px rgba(0,0,0,0.2)',
          }}
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
