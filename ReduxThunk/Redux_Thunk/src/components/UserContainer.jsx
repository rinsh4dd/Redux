import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../Users/userActions";

function UserContainer({ fetchUsers, userData }) {
  useEffect(() => {
    fetchUsers();
  }, []);

  return userData.loading ? (
    <h2>LOADING</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div>
      <h2>UserList</h2>
      <div>
        {userData.users &&
          userData.users.map((user) => <p key={user.id}>{user.name}</p>)}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userData: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
