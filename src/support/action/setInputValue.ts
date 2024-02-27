export default async (elementValue: string, selector: string) => {
    await $(selector).setValue(elementValue);
}