import { getBreakpointValue } from "@/helpers";
import Link from "next/link";

interface FooterLinkGroupItem {
  name: string;
  list: string[];
}

type FooterLinkGroupProps = {
  content: FooterLinkGroupItem;
};

export const FooterLinkGroup = ({ content }: FooterLinkGroupProps) => {
  const grouped = (
    <>
      <h3>{content.name}</h3>
      <hr className="w-12 h-1 my-4 ml-auto rounded-full bg-tertiary" />
      <ul className="flex flex-col gap-2">
        {content.list.map((item, index) => {
          return (
            <li
              className="transition-all duration-100 ease-in-out origin-bottom-right hover:-rotate-3"
              key={index}
            >
              <Link href={"/"}>{item}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );

  return (
    <>
      <div className="md:hidden">
        <h3>{content.name}</h3>
        <hr className="w-12 h-1 my-4 ml-auto rounded-full bg-tertiary" />
        <ul className="flex flex-col gap-2">
          {content.list.map((item, index) => {
            return (
              <li
                className="transition-all duration-100 ease-in-out origin-bottom-right hover:-rotate-3"
                key={index}
              >
                <Link href={"/"}>{item}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <h3 className="hidden md:block ">{content.name}</h3>
      <hr className="hidden w-12 h-1 my-4 ml-auto rounded-full md:block bg-tertiary" />
      <ul className="flex-col hidden gap-2 md:flex">
        {content.list.map((item, index) => {
          return (
            <li
              className="transition-all duration-100 ease-in-out origin-bottom-right hover:-rotate-3"
              key={index}
            >
              <Link href={"/"}>{item}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};
