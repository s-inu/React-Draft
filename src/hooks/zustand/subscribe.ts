import { create } from "zustand";

const useDogStore = create(() => ({ paw: true, snout: true, fur: true }));

// Getting non-reactive fresh state
const paw = useDogStore.getState().paw;
// Listening to all changes, fires synchronously on every change
const unsub1 = useDogStore.subscribe(console.log);
// Updating state, will trigger listeners
useDogStore.setState({ paw: false });
// Unsubscribe listeners
unsub1();

// You can of course use the hook as you always would
// function Component() {
//   const paw = useDogStore((state) => state.paw)
//   ...
