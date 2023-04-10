import { Item } from "./index";

type ItemsProps = {
  active: number;
};

export const Items = ({ active }: ItemsProps) => {
  return (
    <>
      <div className="flex h-full -translate-x-[17%]">
        {[1, 2, 3, 4, 5, 6].map((item, index) => {
          return <Item key={index} item={index} active={active === item} />;
        })}
      </div>
    </>
  );
};
