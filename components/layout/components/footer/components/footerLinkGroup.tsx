import Link from "next/link";

interface FooterLinkGroupItem {
  name: string;
  list: string[];
}

type FooterLinkGroupProps = {
  content: FooterLinkGroupItem;
};

export const FooterLinkGroup = ({ content }: FooterLinkGroupProps) => {
  return (
    <>
      <h2>{content.name}</h2>
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
};
