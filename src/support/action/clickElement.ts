import getSelector from "../lib/getSelector";

export default async (pageElement: string) => {
    const selector = getSelector(pageElement)
    await $(selector).click();
}