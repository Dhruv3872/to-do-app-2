let navigateFn;

export function setNavigator(navigate) {
  navigateFn = navigate;
}

export function navigate(path, options) {
  if (navigateFn) {
    navigateFn(path, options);
  }
}
