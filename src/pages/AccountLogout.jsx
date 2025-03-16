import React, { useEffect, useState } from "react";

const AccountLogout = () => {
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    const logoutTimeout = setTimeout(() => {
      localStorage.removeItem("user");
      window.location.href = "/"; // Redirect to home page
    }, 3300);

    const countdownInterval = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    return () => {
      clearTimeout(logoutTimeout);
      clearInterval(countdownInterval);
    };
  }, []);

  return (
    <div className="container text-center">
      <h5 className="text-warning my-5">
        Logging Out... Please Wait {countdown}
      </h5>
    </div>
  );
};

export default AccountLogout;
