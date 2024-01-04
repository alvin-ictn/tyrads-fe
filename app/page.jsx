import { applyMiddleware } from "@/services/middleware";
import HomePage from "./main";

export default applyMiddleware(HomePage, async (ctx, _props) => {
  await ctx.defineLayout("main");
});
