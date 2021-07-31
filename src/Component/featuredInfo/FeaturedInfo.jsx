import "./FeaturedInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
const FeaturedInfo = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Revenue</span>
        <div className="featuredMoenyContainer">
          <span className="featuredMoney">7500$</span>
          <span className="featuredMoneyRate">
            -11$ <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredsSub">Compared To last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoenyContainer">
          <span className="featuredMoney">2000$</span>
          <span className="featuredMoneyRate">
            -11$ <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredsSub">Compared To last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoenyContainer">
          <span className="featuredMoney">4,300$</span>
          <span className="featuredMoneyRate">
            34$ <ArrowUpward className="featuredIcon" />
          </span>
        </div>
        <span className="featuredsSub">Compared To last month</span>
      </div>
    </div>
  );
};

export default FeaturedInfo;
