import "./WidgetLg.css";

const WidgetLg = () => {
  const Button = ({ type }) => {
    return <button className={"widgetLgBtn " + type}>{type}</button>;
  };

  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest Transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLargeTh">Customer</th>
          <th className="widgetLargeTh">Paid</th>
          <th className="widgetLargeTh">Ammount</th>
          <th className="widgetLargeTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/3671083/pexels-photo-3671083.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetSmName">Susan Carol</span>
          </td>
          <td className="widgetLargeDate">2 Mar 2021</td>
          <td className="widgetLargeAmmount">$145.00</td>
          <td className="widgetLargeStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/3671083/pexels-photo-3671083.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetSmName">Susan Carol</span>
          </td>
          <td className="widgetLargeDate">2 Mar 2021</td>
          <td className="widgetLargeAmmount">$145.00</td>
          <td className="widgetLargeStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/3671083/pexels-photo-3671083.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetSmName">Susan Carol</span>
          </td>
          <td className="widgetLargeDate">2 Mar 2021</td>
          <td className="widgetLargeAmmount">$145.00</td>
          <td className="widgetLargeStatus">
            <Button type="Declined" />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default WidgetLg;
