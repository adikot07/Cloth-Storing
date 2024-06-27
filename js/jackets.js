


const products = [
    {
        title: "Product 1",
        price: 2500.99,
        description: "This is the first product.",
        image: "https://lp2.hm.com/hmgoepprod?set=source[/c6/6e/c66e1031787c9629eeaf5d73325b9f3b1e908c79.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]"
    },
    {
        title: "Product 2",
        price: 1900.99,
        description: "This is the second product.",
        image: "https://lp2.hm.com/hmgoepprod?set=source[/82/60/8260570d4c59bfc9a5b107371846b15fd3e751eb.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]"
    },
    {
        title: "Product 3",
        price: 3400.99,
        description: "This is the third product.",
        image: "https://lp2.hm.com/hmgoepprod?set=source[/50/4b/504b7db0b7aac6d7f79b5f50868b77138e6d5d6e.jpg],origin[dam],category[men_jacketscoats_jackets],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]"
    },
    {
        title: "Product 4",
        price: 1500.99,
        description: "This is the fourth product.",
        image: "https://lp2.hm.com/hmgoepprod?set=source[/56/98/569867b75dafcc4718fd20a0cd13a57795008077.jpg],origin[dam],category[men_jacketscoats_jackets],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]"
    },
    {
        title: "Product 5",
        price: 2700.49,
        description: "This is the fifth product.",
        image: "https://lp2.hm.com/hmgoepprod?set=source[/1c/2f/1c2f527aa7c914bb92611e40860818b8a739853e.jpg],origin[dam],category[men_jacketscoats_fleeceteddy],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]"
    },
    {
        title: "Product 6",
        price: 2200.99,
        description: "This is the sixth product.",
        image: "https://lp2.hm.com/hmgoepprod?set=source[/20/78/2078f695ad1028de334e8ff3ddff8a33092852ca.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]"
    },
    {
        title: "Product 7",
        price: 3900.99,
        description: "This is the seventh product.",
        image: "https://lp2.hm.com/hmgoepprod?set=source[/41/1d/411dd2cdaa4bcbe483459513cf6172536a2cc27b.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]"
    },
    {
        title: "Product 8",
        price: 1100.49,
        description: "This is the eighth product.",
        image: "https://lp2.hm.com/hmgoepprod?set=source[/30/8c/308c89f188a5c6c8d7eca8f97081afbd3914dd39.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]"
    },
];

function createProductCard(product) {
    const card = document.createElement('div');
    card.classList.add('product-card');

    const image = document.createElement('img');
    image.src = product.image;
    image.alt = product.title;
    image.classList.add('product-image');
    card.appendChild(image);

    const title = document.createElement('h2');
    title.classList.add('product-title');
    title.textContent = product.title;
    card.appendChild(title);

    const price = document.createElement('div');
    price.classList.add('product-price');
    price.textContent = `₹${product.price.toFixed(2)}`;
    card.appendChild(price);

    const description = document.createElement('p');
    description.classList.add('product-description');
    description.textContent = product.description;
    card.appendChild(description);

    return card;
}

// Add the product cards to the product container
const productContainer = document.getElementById('product-container');
products.forEach(product => {
    const card = createProductCard(product);
    productContainer.appendChild(card);
});
