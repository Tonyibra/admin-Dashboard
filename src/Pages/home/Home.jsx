import Chart from "../../Component/Chart/Chart";
import FeaturedInfo from "../../Component/featuredInfo/FeaturedInfo";
import "./home.css";
import { userData } from "../../dummyData.js";
import WidgetSm from "../../Component/WidgetSm/WidgetSm";
import WidgetLg from "../../WidgetLg/WidgetLg";
const Home = () => {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        data={userData}
        title="User Analytics"
        grid
        dataKey="Active user"
      />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
};

export default Home;
