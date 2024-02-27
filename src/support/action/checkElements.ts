/*// Locate the <h4> element
const h4Element = $('//h4[text()="Accepted usernames are:"]');

// Get all following sibling text nodes
const textNodes = h4Element.$$xpath('following-sibling::text()');

// Extract and store the text from each text node
const texts = textNodes.map((node) => node.getText());

// Print the stored texts
texts.forEach((text) => console.log(text));
*/

export default async (selector: string) => {
    await $(selector).click();
}