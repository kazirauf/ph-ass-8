
import Chart from "react-apexcharts";

const Statistics = () => {
    const priceStored = JSON.parse(localStorage.getItem('donate-price'));
    let price = 0;
    if(priceStored){
     price = priceStored.reduce((sum, val) => sum + val, 0);
    } 
    return (
        <div className="flex justify-center flex-row items-center h-screen  sm:flex-col sm:items-center md:flex-col md:items-center">
       <div className="lg:w-[700px] sm:ml-32 lg:ml-0">
       <Chart
          className="w-full sm:w-auto md:w-auto"
          height={800}
          type="pie"
          series={[10, price]}
          options={{
            labels: ["Total Donation", "Your Donation"],
            legend: { position: "bottom" },
            colors: ["#FF444A", "#00C49F"],
          }}
        />
       </div>
      </div>
      
    );
};

export default Statistics;
