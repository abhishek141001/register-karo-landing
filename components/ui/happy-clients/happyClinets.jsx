const HappyClients = () => {
    const clients = [
        { id: 1, logo: "happy-clients/1.svg", alt: "Client 1" },
        { id: 2, logo: "happy-clients/2.svg", alt: "Client 2" },
        { id: 3, logo: "happy-clients/3.svg", alt: "Client 3" },
        { id: 4, logo: "happy-clients/4.svg", alt: "Client 4" },
        { id: 5, logo: "happy-clients/5.svg", alt: "Client 5" },
        { id: 6, logo: "happy-clients/6.svg", alt: "Client 6" },
        { id: 7, logo: "happy-clients/7.svg", alt: "Client 7" },
        { id: 8, logo: "happy-clients/8.svg", alt: "Client 8" },
        { id: 9, logo: "happy-clients/9.svg", alt: "Client 9" },
        { id: 10, logo: "happy-clients/10.svg", alt: "Client 10" },
        { id: 11, logo: "happy-clients/11.svg", alt: "Client 11" },
        { id: 12, logo: "happy-clients/12.svg", alt: "Client 12" },
        { id: 13, logo: "happy-clients/13.svg", alt: "Client 13" },
        { id: 14, logo: "happy-clients/14.svg", alt: "Client 14" },
        { id: 15, logo: "happy-clients/15.svg", alt: "Client 15" },
        { id: 16, logo: "happy-clients/16.svg", alt: "Client 16" },
        { id: 17, logo: "happy-clients/17.svg", alt: "Client 17" },
        { id: 18, logo: "happy-clients/18.svg", alt: "Client 18" },
        { id: 19, logo: "happy-clients/19.svg", alt: "Client 19" },
        { id: 20, logo: "happy-clients/20.svg", alt: "Client 20" },
       
      ];
      
  
    return (
      <div className="flex flex-col bg-gray-50 pb-12   items-center text-center">
        <div className="flex flex-col p-10 xl:p-20 items-center">
        <h2 className="text-gray-900 text-[32px] font-bold mb-4 ">
          Our Happy Clients
        </h2>
        <p className=" mb-8 text-base text-[#666666] max-w-3xl text-center">
          Professionally cultivate one-to-one customer service with robust ideas.
          Dynamically innovate resource-leveling customer service for state-of-the-art customer service.
        </p>
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-12">
          {clients.map((client) => (
            <div
              key={client.id}
              className={`bg-white shadow-md rounded-full p-4 flex items-center justify-center hover:scale-110 transition-transform ${client.id % 2 === 0 ? "mt-8 w-24 h-24 " : "mb-8 w-16 h-16 "}`} 
            >
              <img
                src={client.logo}
                alt={client.alt}
                className="w-16 h-16 object-contain"
              />
            </div>
          ))}
        </div>
        <button className="mt-8 text-[#1C4670] font-semibold flex items-center gap-2 hover:underline">
          Show more <span>→</span>
        </button>
      </div>
    );
  };
  
  export default HappyClients;