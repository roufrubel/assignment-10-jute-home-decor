
const Banner = () => {
    return (
        <div
  className="hero min-h-screen  mt-6"
  style={{
    backgroundImage: "url(https://i.ibb.co/9r52cgJ/web-banner.png)",
  }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Jute Home Decor</h1>
      <p className="mb-5">
      Transform your home with elegant jute decor. Discover handcrafted rugs, wall hangings, baskets, and more. Embrace the natural beauty and eco-friendly charm that jute brings to your living space..
      </p>
      <button className="btn btn-outline btn-warning">Explore</button>
    </div>
  </div>
</div>
    );
};

export default Banner;