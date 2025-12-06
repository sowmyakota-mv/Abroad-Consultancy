import React from "react";

const StatsSection: React.FC = () => {
  const stats = [
    {
      icon: "/university-icon1.png", // Replace with your image path
      count: "3000+",
      title: "Universities Processed"
    },
    {
      icon: "/program-icon.png", // Replace with your image path
      count: "100K+",
      title: "Programs Available"
    },
    {
      icon: "/country-icon3.png", 
      count: "21",
      title: "Countries"
    },
    {
      icon: "/students-icon.png", 
      count: "75K+",
      title: "Students"
    },
    {
      icon: "/visa-icon.png", 
      count: "100%",
      title: "Visa Success"
    },
    {
      icon: "/feedback-icon.png", 
      count: "90%+",
      title: "Referrals"
    },
    {
      icon: "/loan-icon.png", 
      count: "100%",
      title: "Loan Support"
    }
  ];

  return (
    <section className="w-full">
      <div className="max-w-full">
        
        {/* Desktop: 7 columns */}
        <div className="hidden md:grid md:grid-cols-7">
          {stats.map((stat, index) => (
            <div key={index} className="last:border-r-0">
              {/* Grid with 3 rows */}
              <div className="grid grid-rows-3 h-26 pt-2">
                {/* Row 1: Icon - Top aligned */}
                <div className="flex items-start justify-center ">
                  <img 
                    src={stat.icon} 
                    alt={stat.title}
                    className="h-8 w-8 md:h-8 md:w- 8object-contain"
                  />
                </div>
                
                {/* Row 2: Count - Middle of its own row */}
                <div className="flex items-center justify-center -mt-4">
                  <div className="text-sm font-bold text-black">
                    {stat.count}
                  </div>
                </div>
                
                {/* Row 3: Title - Bottom aligned */}
                <div className="flex items-end justify-center pb-6">
                  <div className="text-sm font-medium text-black text-center px-2">
                    {stat.title}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: 2 tables */}
        <div className="md:hidden">
          {/* Table 1 */}
          <div className="grid grid-cols-4">
            {stats.slice(0, 4).map((stat, index) => (
              <div key={index} className="bg-gray-300 border-r border-gray-300">
                {/* Grid with 3 rows */}
                <div className="grid grid-rows-3 h-28">
                  {/* Row 1: Icon */}
                  <div className="flex items-start justify-center pt-3">
                    <img 
                      src={stat.icon} 
                      alt={stat.title}
                      className="h-8 w-8 object-contain"
                    />
                  </div>
                  
                  {/* Row 2: Count */}
                  <div className="flex items-center justify-center">
                    <div className="text-base font-bold text-blue-700">
                      {stat.count}
                    </div>
                  </div>
                  
                  {/* Row 3: Title */}
                  <div className="flex items-end justify-center pb-3">
                    <div className="text-xs font-medium text-black text-center px-1">
                      {stat.title}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Table 2 */}
          <div className="grid grid-cols-4">
            {stats.slice(4).map((stat, index) => (
              <div key={index + 4} className="bg-gray-300 border-r border-gray-300">
                {/* Grid with 3 rows */}
                <div className="grid grid-rows-3 h-28">
                  {/* Row 1: Icon */}
                  <div className="flex items-start justify-center pt-3">
                    <img 
                      src={stat.icon} 
                      alt={stat.title}
                      className="h-8 w-8 object-contain"
                    />
                  </div>
                  
                  {/* Row 2: Count */}
                  <div className="flex items-center justify-center">
                    <div className="text-base font-bold text-blue-700">
                      {stat.count}
                    </div>
                  </div>
                  
                  {/* Row 3: Title */}
                  <div className="flex items-end justify-center pb-3">
                    <div className="text-xs font-medium text-black text-center px-1">
                      {stat.title}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {/* Empty column */}
            <div className="bg-gray-300 h-28"></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default StatsSection;