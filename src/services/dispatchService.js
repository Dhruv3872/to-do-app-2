import store from "@/store/store";

/**
 * This function has been created to utilise it instead of `redux`'s `useDispatch` hook
 * since we can't call the hook outside of react components and other hooks which
 * gave rise to the need of such a function as follows since we need to dispatch actions
 * from within utility code like plain javascript service files:
 */
export function dispatchAction(action) {
  store.dispatch(action);
}
