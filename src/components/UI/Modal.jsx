import React, { Fragment, useCallback, useRef } from "react";
import ReactDOM from "react-dom";

const ModalComp = (props) => {
  /* ---------------------------------- Refs ---------------------------------- */
  const wrapperRef = useRef(null);
  /* -------------------------------- Callbacks ------------------------------- */
  const handClickOutside = useCallback(
    (e) => {
      if (e.target === wrapperRef.current) props.onClickOutside();
    },
    [wrapperRef, props]
  );

  return (
    <div
      ref={wrapperRef}
      onClick={handClickOutside}
      className=" fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden bg-black bg-opacity-40 outline-none  focus:outline-none "
    >
      <div className="relative h-full w-full max-w-2xl -translate-y-1 transition delay-150 ease-in-out motion-reduce:transition-all md:h-auto">
        <div className="relative rounded-lg bg-white shadow ">
          <div className="space-y-6 p-6">{props.children}</div>
        </div>
      </div>
    </div>
  );
};

const Modal = (props) => {
  const doc = document.getElementById("overlays");
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <ModalComp onClickOutside={props.onClickOutside}>
          {props.children}
        </ModalComp>,
        doc
      )}
    </Fragment>
  );
};

export default Modal;
