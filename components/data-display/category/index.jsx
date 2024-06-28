import { getCategories } from "libs/api/getCartegoryData";
import { RightArrowIcon } from "libs/icons";

const Categories = async () => {
  let allCategories;

  try {
    allCategories = await getCategories();
  } catch (error) {
    return (
      <div className="text-center mt-10">
        <h2 className="text-red-900">Failed to load categories</h2>
      </div>
    );
  }

  if (allCategories?.error) {
    return (
      <div className="text-center mt-10">
        <h2 className="text-red-900">{allCategories.error}</h2>
      </div>
    );
  }

  return (
    <div className="shadow-lg bg-white rounded-md h-[490px] overflow-y-auto scrollbar">
      {allCategories?.map((item, index) => (
        <div
          key={index}
          className="border-b flex justify-between items-center px-5 py-3"
        >
          <div className="flex items-center gap-4">
            <h6 className="text-sm font-normal cursor-pointer">{item.name}</h6>
          </div>
          <RightArrowIcon />
        </div>
      ))}
    </div>
  );
};

export default Categories;
