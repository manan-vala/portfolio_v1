function Services() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center gap-10 py-20">
      <h4 className="font-instrument text-center italic text-white text-5xl max-md:text-4xl">
        Services
      </h4>
      <div className="w-8/10 grid grid-cols-3 max-md:grid-cols-1 gap-8 items-stretch">
        <div className="min-h-70 text-gray-400 font-manrope flex flex-col gap-4 bg-[linear-gradient(to_bottom,rgba(30,30,30,0.7),rgba(15,15,15,1))] border-1 border-gray-600 rounded-xl p-8 col-span-2 max-md:col-span-1">
          <h5 className="text-white text-3xl max-md:text-2xl font-semibold">
            Landing Page
          </h5>
          <p className="text-[1.35rem] max-md:text-lg">
            High-converting, goal-focused landing pages built to capture leads,
            increase engagement, and turn visitors into paying customers.
            Designed with clear messaging, clean layouts, and smart UX to drive
            real results for your business.
          </p>
        </div>

        <div className="min-h-70 text-gray-400 font-manrope flex flex-col gap-4 bg-[linear-gradient(to_bottom,rgba(30,30,30,0.7),rgba(15,15,15,1))] border-1 border-gray-600 rounded-xl p-8">
          <h5 className="text-white text-2xl font-semibold">App Design</h5>
          <p className="text-[1.35rem] max-md:text-lg">
            Intuitive and engaging mobile experiences. From concept to
            completion, we design user-friendly apps that look great and perform
            flawlessly.
          </p>
        </div>

        <div className="min-h-70 text-gray-400 font-manrope flex flex-col gap-4 bg-[linear-gradient(to_bottom,rgba(30,30,30,0.7),rgba(15,15,15,1))] border-1 border-gray-600 rounded-xl p-8">
          <h5 className="text-white text-2xl font-semibold">Shopify Website</h5>
          <p className="text-[1.35rem] max-md:text-lg">
            Powerful, profitable e-commerce solutions. Get a fully functional,
            sales-optimized Shopify store designed to maximize your online
            revenue.
          </p>
        </div>

        <div className="min-h-70 text-gray-400 font-manrope flex flex-col gap-4 bg-[linear-gradient(to_bottom,rgba(30,30,30,0.7),rgba(15,15,15,1))] border-1 border-gray-600 rounded-xl p-8">
          <h5 className="text-white text-2xl font-semibold">
            Design Subscription
          </h5>
          <p className="text-[1.35rem] max-md:text-lg">
            Unlimited design support, simplified. Access ongoing design
            expertise for all your needs, without the hassle of per-project
            billing.
          </p>
        </div>

        <div className="min-h-70 text-gray-400 font-manrope flex flex-col gap-4 bg-[linear-gradient(to_bottom,rgba(30,30,30,0.7),rgba(15,15,15,1))] border-1 border-gray-600 rounded-xl p-8">
          <h5 className="text-white text-2xl font-semibold">
            Personalized Website
          </h5>
          <p className="text-[1.35rem] max-md:text-lg">
            Unique, impactful websites built around your brand. Stand out online
            with a custom site that reflects your vision and resonates with your
            audience.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
