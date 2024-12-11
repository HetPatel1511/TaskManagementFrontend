import { useCallback, useEffect, useRef, useState, useTransition } from "react";
import { animateScroll } from "react-scroll";

export const useKeyPress = (targetKeys, focused=true) => {
  const [keyPressed, setKeyPressed] = useState(
    targetKeys.reduce((acc, key) => {
      acc[key] = false;
      return acc;
    }, {})
  );
  
  useEffect(() => {
    if (!focused) return;

    const downHandler = (event) => {
      const { key, keyCode } = event;
      if (keyCode >= 37 && keyCode <= 40) {
        event.preventDefault();
      }
      if (targetKeys.includes(key) || targetKeys.includes(keyCode)) {
        setKeyPressed((prev) => ({
          ...prev,
          [key]: true,
          [keyCode]: true,
        }));
      }
    };

    const upHandler = (event) => {
      const { key, keyCode } = event;
      if (targetKeys.includes(key) || targetKeys.includes(keyCode)) {
        setKeyPressed((prev) => ({
          ...prev,
          [key]: false,
          [keyCode]: false,
        }));
      }
    };

    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);

    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  }, [targetKeys]);

  return keyPressed;
};

export const useHorizontalNavigation = ({ leftPress, rightPress, selected, setSelected, feedDataLength, focused }) => {
  const [isPending, startTransition] = useTransition();
  useEffect(() => {
    if (leftPress && selected > 0 && focused) {
      startTransition(() => {
        setSelected(selected - 1);
      });
    }
  }, [leftPress]);

  useEffect(() => {
    if (rightPress && selected < feedDataLength && focused) {
      startTransition(() => {
        setSelected(selected + 1);
      });
    }
  }, [rightPress]);
};

export const useVerticalNavigation = ({
  upPress,
  downPress,
  currentSection,
  setCurrentSection,
  setNavbarFocusedStatedata,
  sections,
  navbarFocused,
  feedData,
  isLoading,
  currentItemIndex,
  liveButtonRef
}) => {
  const [isPending, startTransition] = useTransition();
  const handleUpPress = useCallback(() => {
    if (upPress && currentSection > -2 && !isLoading) {
      if (
        (currentSection === 0 &&
          !feedData?.live_and_upcoming_show.data[currentItemIndex?.live_and_upcoming_show]?.live) ||
        (currentSection === -1 &&
          feedData?.live_and_upcoming_show.data[currentItemIndex?.live_and_upcoming_show]?.live)
      ) {
        setCurrentSection(-2);
        setNavbarFocusedStatedata?.(true);
      } else if (currentSection === 0) {
        if (liveButtonRef?.current) {
          setCurrentSection(-1);
        }
        // setCurrentSection(-1);
      } else {
        setCurrentSection((prevState) => prevState - 1);
      }
    }
  }, [upPress]);

  const handleDownPress = useCallback(() => {
    if (downPress && currentSection < (sections?.length - 1 || 0) && !isLoading) {
      if (
        (currentSection === -2 &&
          feedData?.live_and_upcoming_show.data[currentItemIndex?.live_and_upcoming_show]?.live)
      ) {
        setCurrentSection(-1);
        setNavbarFocusedStatedata?.(false);
      } else if (currentSection === -2) {
        setCurrentSection(0);
        setNavbarFocusedStatedata?.(false);
      } else {
        setCurrentSection((prevState) => prevState + 1);
        if (navbarFocused) {
          setNavbarFocusedStatedata?.(false);
        }
      }
    }
  }, [downPress]);

  useEffect(() => {
    startTransition(() => {
      handleUpPress();
    });
  }, [upPress]);

  useEffect(() => {
    startTransition(() => {
      handleDownPress();
    });
  }, [downPress]);
};

export const useScrollToSection = (currentSection, sections, sectionRefs) => {
  const [isPending, startTransition] = useTransition();
  useEffect(() => {
    const adjustScrollPosition = () => {
    const sectionKey = sections[currentSection];
    if (currentSection <= 0) {
      requestAnimationFrame(() => {
        animateScroll.scrollToTop({duration: 200 , smooth: 'linear'});
      });
    } else if (sectionRefs[sectionKey]?.current) {
      const element = sectionRefs[sectionKey].current;
      const headerOffset = 248; // header height
      const elementPosition = element?.getBoundingClientRect().top;
      const offsetPosition = Math.min(
        elementPosition + window.scrollY - headerOffset,
        document.documentElement.scrollHeight - window.innerHeight
      );        

      requestAnimationFrame(() => {
        animateScroll.scrollTo(offsetPosition, {
          duration: 200,
          smooth: 'linear'
        });
      });
    }
    };

    startTransition(() => {
      adjustScrollPosition();
    });
  }, [currentSection, sections, sectionRefs]);
};

export const useScrollToSelectedItem = (containerRef, itemRefs, selected) => {
  const [isPending, startTransition] = useTransition();
  useEffect(() => {
    const scrollToSelectedItem = () => {
      const selectedItem = itemRefs?.current?.[selected];
      const container = containerRef?.current;
    
      if (selectedItem?.current && container) {
        const offsetPosition = selectedItem.current.offsetLeft - container.offsetLeft - itemRefs?.current?.[0]?.current?.offsetLeft;

        requestAnimationFrame(() =>
          animateScroll.scrollTo(offsetPosition, {
            containerId: container.id,
            horizontal: true,
            duration: 100,
            smooth: 'linear'
          })
        );
      }
    };

    startTransition(() => {
      scrollToSelectedItem();
    });
  }, [containerRef, itemRefs, selected]);
};

export const usePositionSelector = ({
  currentSection,
  sections,
  sectionRefs,
  currentItemIndex,
  liveButtonRef,
  containerRef,
  isLoading,
}) => {
  const selectorRef = useRef(null);

  useEffect(() => {
    const selector = selectorRef.current;

    if (currentSection >= 0) {
      const sectionRef = sectionRefs
        ? sectionRefs[sections[currentSection]]?.current
        : containerRef?.current;

      const container = sectionRef?.querySelectorAll(
        ".horizontal-scroll-container"
      )[0];

      if (sectionRef && container) {
        const itemIndex = sections
          ? currentItemIndex[sections[currentSection]]
          : currentItemIndex;
        const item = sectionRef?.querySelectorAll(".item")[itemIndex];
        const firstItem = sectionRef?.querySelectorAll(".item")[0];
        const rect = item?.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();

        if (selector && rect && containerRect) {
          let leftPosition = firstItem?.offsetLeft;

          selector.style.width = `${rect.width}px`;
          selector.style.height = `${rect.height}px`;
          selector.style.left = `${leftPosition}px`;
          selector.style.top = `${rect.top + window.scrollY}px`;
          selector.style.visibility = "visible";
        } else {
          selector.style.visibility = "hidden";
        }
      }
    } else if (currentSection === -1 && liveButtonRef) {
      const buttonRect = liveButtonRef?.current?.getBoundingClientRect();
      if (selector && buttonRect) {
        selector.style.top = `${
          liveButtonRef?.current?.offsetTop +
          liveButtonRef?.current?.offsetParent?.offsetTop
        }px`;

        selector.style.left = `${buttonRect.left}px`;
        selector.style.width = `${buttonRect.width}px`;
        selector.style.height = `${buttonRect.height}px`;
        selector.style.visibility = "visible";
      } else {
        selector.style.visibility = "hidden";
      }
    }
    // else if (currentSection === -2) {
    //   const navButtonRect = navButtonRef.current.getBoundingClientRect();
    //     // const buttonRect = liveButtonRef?.current?.getBoundingClientRect();
    //     //   console.log("buttonRect");
    //     //   console.log(buttonRect);
    //     //   console.log(liveButtonRef?.current?.offsetParent);
    //       if (selector) {
    //         // selector.style.top = `${liveButtonRef?.current.offsetTop + 228}px`;
    //         selector.style.top = `${navButtonRect?.top}px`;
    //         selector.style.left = `${navButtonRect?.left}px`;
    //         selector.style.width = `${navButtonRect?.width}px`;
    //         selector.style.height = `${navButtonRect?.height}px`;
    //       }
    // }
  }, [
    currentSection,
    currentItemIndex,
    sectionRefs,
    isLoading,
    liveButtonRef,
    containerRef,
  ]);

  return selectorRef;
};
