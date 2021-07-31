import "./NewUser.css";

const NewUser = () => {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label htmlFor="">Full Name</label>
          <input type="text" placeholder="Tony ibrahim" />
        </div>
        <div className="newUserItem">
          <label htmlFor="">Email</label>
          <input type="email" placeholder="Tonyibra.ads@gmail.com" />
        </div>
        <div className="newUserItem">
          <label htmlFor="">Password</label>
          <input type="password" placeholder="+961 76940499" />
        </div>
        <div className="newUserItem">
          <label htmlFor="">Address</label>
          <input type="password" placeholder="Lebanon" />
        </div>
        <div className="newUserItem">
          <div className="newUserGender">
            <label htmlFor="">Gender</label>
            <input type="radio" name="gender" id="Male" />
            <label for="Male">Male</label>
            <input type="radio" name="gender" id="Female" />
            <label for="Female">Female</label>
            <input type="radio" name="gender" id="Other" />
            <label for="Other">Others</label>
          </div>
        </div>
        <div className="newUserItem">
          <label htmlFor="">Active</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <button className="newUserButton">Create</button>
      </form>
    </div>
  );
};

export default NewUser;
