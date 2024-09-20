import getMenuItemGroups from "./data/menuItemGroup";
import MenuItemButton from "./EditorMenuItemButton";

const MenuBar = ({ editor }) => {
  if (!editor) {
    return null;
  }

  const menuItemGroups = getMenuItemGroups(editor);
  return (
    <div className="w-[100%] flex gap-2 flex-wrap bg-gray-00 p-2 rounded-md">
      {menuItemGroups.map((group) => {
        return (
          <>
            {group.map((itemProps, i) => (
              <MenuItemButton
                {...itemProps}
                key={itemProps.tooltip + i}
                editor={editor}
                className={
                  "bg-blue-600 hover:bg-blue-700 p-[0.5em] rounded-md text-white"
                }
              />
            ))}
          </>
        );
      })}
    </div>
  );
};

export default MenuBar;
