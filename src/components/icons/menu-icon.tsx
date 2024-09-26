import React from 'react';
import clsx from 'clsx';

// Example MenuItem Type
type MenuItem = {
  label: string;
  icon: React.FC<{ selected: boolean }>; // Icon component
  selected: boolean;
};

// Props for the Menu component
type Props = {
  items: MenuItem[];
};

const Menu: React.FC<Props> = ({ items }) => {
  return (
    <div className="flex space-x-4">
      {items.map((item) => (
        <div key={item.label} className="flex flex-col items-center">
          <item.icon selected={item.selected} />
          <span className={clsx('mt-1 text-sm', { 'font-bold': item.selected })}>
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Menu;
