import { clients} from "@/assets/data";

const HappyClients = () => {
    
      
  
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