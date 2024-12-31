import { useEffect } from "react";
import { useDispatch } from "react-redux";
import setCurrentComponent from "../../redux/action"; // Import the action

const useVisibility = (elementRef, componentName) => {
	const dispatch = useDispatch();

	const isComponentInView = () => {
		if (elementRef.current) {
			const rect = elementRef.current.getBoundingClientRect();
			if (0 < window.scrollY && window.scrollY < 10) {
				return true;
			}

			return rect.top < window.innerHeight && rect.bottom >= 0;
		}
		return false;
	};

	const handleVisibilityChange = () => {
    if (isComponentInView()) {
      if (0 < window.scrollY && window.scrollY < 10)  {
        dispatch(setCurrentComponent("About"));
      }
      else
			dispatch(setCurrentComponent(componentName));
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleVisibilityChange);

		return () => {
			window.removeEventListener("scroll", handleVisibilityChange);
		};
	}, [elementRef, dispatch]);
};

export default useVisibility;
