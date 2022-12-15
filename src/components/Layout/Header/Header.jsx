import React, { useCallback, useState } from "react";
import HeaderCartButton from "./HeaderCartButton";
import mealsImage from "../../../assets/images/meal-table.jpg";
import Cart from "../../Cart/Cart";

export default function Header() {
  const [open, setOpen] = useState(false);
  const handleOpenModal = useCallback(() => {
    setOpen(true);
  }, []);
  const handleCloseModal = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <>
      {open && <Cart onClose={handleCloseModal} />}
      <nav className="fixed top-0 left-0 z-10 flex h-20 w-full border-gray-200 bg-white px-2 py-4 dark:bg-gray-900 sm:px-4">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <button
            href="https://flowbite.com/"
            className="flex items-center"
            type="button"
            data-modal-toggle="cart-modal"
          >
            <span className="self-center whitespace-nowrap text-4xl font-semibold dark:text-white">
              Foodie
            </span>
          </button>
          <HeaderCartButton onClick={handleOpenModal} />
        </div>
      </nav>
      <div className="z-0 h-96 w-full overflow-hidden">
        <img
          className="h-full w-f110 -translate-y-16 -translate-x-4 -rotate-6 transform object-cover	"
          src={mealsImage}
          alt="meals table"
        />
      </div>
    </>
  );
}
