import React, { useEffect, useState } from 'react';

const DashboardHome = () => {
  const [matchedUser, setMatchedUser] = useState(null);

  useEffect(() => {
    const matchedUserString = localStorage.getItem('matchedUser');
    const parsedMatchedUser = JSON.parse(matchedUserString);
    setMatchedUser(parsedMatchedUser);
  }, []);

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="text-center mb-4">
            <h1 className="display-4">Welcome, {matchedUser ? matchedUser.name : 'Guest'}!</h1>
          </div>
          <div className="card shadow">
            <div className="card-body">
              {matchedUser ? (
                <>
                  <h4 className="card-title">User Information</h4>
                  <p className="card-text"><strong>Username:</strong> {matchedUser.username}</p>
                  <p className="card-text"><strong>Email:</strong> {matchedUser.email}</p>
                </>
              ) : (
                <div className="text-center">
                  <p>Loading user data...</p>
                </div>
              )}
            </div>
          </div>
          <div className="mt-4 text-center">
            <blockquote className="blockquote">
              <p className="mb-0">"The journey of a thousand miles begins with one step."</p><br/>
              <footer className="blockquote-footer">- Lao Tzu</footer>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
