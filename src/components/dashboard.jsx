import Navbar from "./navbar";
import SimpleSlider from "./simpleSlider";

const Dashboard = () => {
          return (
            <>
              <Navbar />
              <div className="continer">
                <div className="row">
                  <SimpleSlider />
                </div>
              </div>
            </>
          );
          
}
 
export default Dashboard;