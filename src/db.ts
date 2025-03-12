export type Program = {
    id: number,
    name: string,
    content: string,
    url: string,
}

const programs = [{"id":1,"name":"Messier Observing Program","content":"## Introduction\\nAlmost every amateur astronomer begins to be aware of the Messier Catalog as soon as he or she opens their first book. The novice is sure to find some spectacular object pictured and designated by its “Messier Number” with the universal abbreviation “M”. Of the myriads of star clusters and nebulae scattered over the sky only about 100 (perhaps 110 at most) can claim membership to this celebrated list. However, this happens to include most, but not quite all, of the finest of these objects observable from mid-northern latitudes.\\nThere is nothing in the catalog that the owner of so humble an instrument as a three-inch reflector cannot reach under good observing conditions. Many of the objects can be seen with binoculars and some with the naked eye. Thus, the Messier Catalog is a happy hunting ground for any amateur with a taste for deep-sky objects.\\nEven an extremely brief review of the history of Messier’s Catalog will explain why it contains so many bright and easy clusters and nebulae.","url":"https://www.astroleague.org/messier-observing-program/"},
    {"id":2,"name":"Constellation Hunter Observing Program","content":"## Introduction\\nWelcome to the Astronomical League’s Constellation Hunter Observing Program. The Constellation Hunter Observing Program has two certifications and pins: The Northern Skies and the Southern Skies. The purpose of these programs is to provide an orientation to the sky for novice astronomers. They require no special equipment (other than a planisphere and a reference for the brighter star names), and no prior knowledge. The objective is to provide a forum for the novice observer to become more familiar with the constellations and brighter stars, to begin to learn to navigate among the stars and to provide a solid foundation for moving on to other observation programs such as the Messier Observing Program.","url":"https://www.astroleague.org/constellation-hunter-observing-program/"}];

for (const program of programs) {
    Object.freeze(program);
}

export default Object.freeze(programs)
