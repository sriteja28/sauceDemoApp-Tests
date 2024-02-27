export default async (selector: string) => {
    await $(selector).click();
}