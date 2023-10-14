import "./../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import React, { useEffect } from 'react';


function UAlert({ message, show, toggleAlert }) {
  useEffect(() => {
    if (show) {
      setTimeout(() => {
        closeAlert(false);
      }, 4000);
    }
  }, [show]);
  return (
    <>{show && (
      <div aria-live="polite" aria-atomic="true" style="position: relative; min-height: 200px;">
        <div class="toast" style="position: absolute; top: 0; right: 0;">
          <div class="toast-header">
            <img src="..." class="rounded mr-2" alt="..." />
            <strong class="mr-auto">{message}</strong>
            <small></small>
            <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close"
              onClick={() => {
                toggleAlert(false);
              }}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="toast-body">
            Hello, world! This is a toast message.
          </div>
        </div>
      </div>
    )
    }
    </>
  );
}
export default UAlert;