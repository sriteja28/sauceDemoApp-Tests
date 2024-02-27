export default async (targetWebsite: string) => {
    console.log(`user navigating to ${targetWebsite}`);
    await browser.url(targetWebsite);
}