import { getFElement, ModGlobal } from "./ModGlobal";

export default function () {
    getFElement(ModGlobal.StatsContainer).remove();
    getFElement(ModGlobal.BotLink).remove();
}