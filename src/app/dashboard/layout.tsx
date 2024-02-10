import React from "react";

const Layout = ({
  children,
  users,
  notifications,
  revenue,
  analytics,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  notifications: React.ReactNode;
  revenue: React.ReactNode;
  analytics: React.ReactNode;
}) => {
  return (
    <>
      <div>{analytics}</div>
      <div>{revenue}</div>
      {children}
    </>
  );
};

export default Layout;
