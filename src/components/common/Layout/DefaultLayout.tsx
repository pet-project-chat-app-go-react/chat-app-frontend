import React from 'react';

type Props = {
  children: React.ReactNode;
};

const DefaultLayout = ({ children }: Props) => {
  return (
    <div>
      <div className="text-4xl text-center font-bold max-w-7xl items-center p-4 m-4">
        Chat App
      </div>
      <main className="mx-auto max-w-5xl p-2">{children}</main>
    </div>
  );
};

export default DefaultLayout;
