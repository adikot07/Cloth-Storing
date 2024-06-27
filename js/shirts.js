


const products = [
    {
        title: "Product 1",
        price: 2500.99,
        description: "This is the first product.",
        image: "https://lp2.hm.com/hmgoepprod?set=source[/87/3b/873b053f60d28e955ce48e0481bea278815436b3.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]"
    },
    {
        title: "Product 2",
        price: 1900.99,
        description: "This is the second product.",
        image: "https://lp2.hm.com/hmgoepprod?set=source[/9b/08/9b08830c48f0c4c86557f7958c19d72459186055.jpg],origin[dam],category[men_jacketscoats_shirtjackets],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]"
    },
    {
        title: "Product 3",
        price: 3400.99,
        description: "This is the third product.",
        image: "https://lp2.hm.com/hmgoepprod?set=source[/9d/f4/9df4cb95fabf07743181e24a4b376b6ec71b0fcd.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]"
    },
    {
        title: "Product 4",
        price: 1500.99,
        description: "This is the fourth product.",
        image: "https://lp2.hm.com/hmgoepprod?set=source[/5d/32/5d32479c87ecf312b7924ec648dbac13a4e2dd02.jpg],origin[dam],category[men_shirts_longsleeved],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]"
    },
    {
        title: "Product 5",
        price: 2700.49,
        description: "This is the fifth product.",
        image: "https://lp2.hm.com/hmgoepprod?set=source[/f9/81/f981e903bac0eab235a71b5518b16f1b84e0d0cc.jpg],origin[dam],category[men_shirts_longsleeved],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]"
    },
    {
        title: "Product 6",
        price: 2200.99,
        description: "This is the sixth product.",
        image: "https://lp2.hm.com/hmgoepprod?set=source[/ff/7d/ff7d1076d3ba738844b92bd80e665d570a457f4e.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]"
    },
    {
        title: "Product 7",
        price: 3900.99,
        description: "This is the seventh product.",
        image: "https://lp2.hm.com/hmgoepprod?set=source[/67/d4/67d4c9aae4abeaa495d615b9c6f6bfb9e7ced8cc.jpg],origin[dam],category[men_jacketscoats_shirtjackets],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]"
    },
    {
        title: "Product 8",
        price: 1100.49,
        description: "This is the eighth product.",
        image: "https://lp2.hm.com/hmgoepprod?set=source[/4e/f2/4ef2f8201f77d2d5263b97058bc733104e49deaf.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]"
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
