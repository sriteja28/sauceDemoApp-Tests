import getSelector from "../lib/getSelector";

export default async (elementValue: string, pageElement: string) => {
    const selector = getSelector(pageElement)
    await $(selector).setValue(elementValue);
}