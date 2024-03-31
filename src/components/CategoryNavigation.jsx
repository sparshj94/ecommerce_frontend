import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const CategoryNavigation = () => {
  const [categories, setCategories] = useState(null);
  const getCategory = async () => {
    const data = await axios.get(
      "https://ecomm-backend-2qt2.onrender.com/api/v1/category/allCategories"
    );
    // console.log(data.data.data.categories);
    setCategories(data.data.data.categories);
  };

  useEffect(() => {
    getCategory();
  }, []);
  return (
    <>
      <div className="bg-gray-50 flex justify-center">
        <div className=" inset-x-0 top-0 hidden lg:block">
          <div className="py-5">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
              <nav className="flex items-center space-x-8">
                {categories &&
                  categories.map((cat) => (
                    <Link
                      key={cat._id}
                      to={`/category/${cat._id}`}
                      title=""
                      className="text-md font-medium text-gray-900 transition-all duration-200 rounded hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                    >
                      {" "}
                      {cat.name}{" "}
                    </Link>
                  ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryNavigation;
