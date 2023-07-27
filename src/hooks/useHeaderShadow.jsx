import { useEffect, useState } from "react";

const useHeaderShadow = () => {
const [headerShadow, setHeaderShadow] = useState(false)
  //to handle shadow of header
  useEffect(() => {
    function handleScroll() {
      if (document.documentElement.clientWidth <= 640){
        return
      } else {
        if (window.scrollY >= 100) {
          setHeaderShadow("#ffffff")
        } else {
          setHeaderShadow("transparent");
        }
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return headerShadow
};

export default useHeaderShadow;
