import React, { useEffect } from 'react';
import style from "./style.module.css";

function UAlert({ message, show, toggleAlert }) {
  useEffect(() => {
    if (show) {
      setTimeout(() => {
        toggleAlert(false);
      }, 4000);
    }
  }, [show]);

  return (
    <>
      {show && (
        <div className={style["container"]}>
          <div className="alert alert-success alert-dismissible" role="alert">
            <div>{message}</div>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
              onClick={() => {
                toggleAlert(false);
              }}
            ></button>
          </div>
        </div>
      )}
    </>
  );
}

export default UAlert;
