export default async (waitInMs: number) => {
    console.log(`execution paused for ${waitInMs}`)
    await browser.pause(waitInMs);
}