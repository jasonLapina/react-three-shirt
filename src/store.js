import { proxy } from "valtio";
const state = proxy({ intro: true, selectedColor: "#ccc" });

export { state };
