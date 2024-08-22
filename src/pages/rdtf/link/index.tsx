import LinkCard from "../../../components/link_card";
import { themeConfig } from "../../../config";

export default function page() {
  return (
    <div className="w-full flex flex-wrap gap-4">
      {themeConfig.friend_link.map((item, index) => (
        <LinkCard
          name={item.name}
          url={item.url}
          descr={item.descr}
          link={item.link}
          key={index}
        />
      ))}
    </div>
  );
}
