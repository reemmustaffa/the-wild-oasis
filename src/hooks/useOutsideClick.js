import { useEffect, useRef } from "react";

export function useOutSideClick(close, listenCapturing = true) {
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        //ref.current.contains(e.target) → معناها: "هل العنصر اللي اتضغط عليه جوه المودال؟".
        if (ref.current && !ref.current.contains(e.target)) {
          close();
          //دي تعود علي الايلمنت اللي انا حطييت عليه ref
          console.log(ref.current);
          //دي بترجع ترو ولا فولس هل العنصر اللي انا ضغطت عليه جوا المودل ولالا
          console.log(ref.current.contains(e.target));
          console.log(e.target);
        }
      }
      document.addEventListener("click", handleClick, listenCapturing);

      return () => {
        document.removeEventListener("click", handleClick, listenCapturing);
      };
    },
    [close, listenCapturing]
  );
  return { ref };
}
