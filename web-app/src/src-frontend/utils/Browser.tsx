export const disableScroll = (open: boolean): void => {
    if (open) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = 'visible';
      }
};