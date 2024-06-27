


const products = [
    {
        title: "Product 1",
        price: 2500.99,
        description: "This is the first product.",
        image: "https://lp2.hm.com/hmgoepprod?set=source[/dc/2b/dc2b5a7c3f37975eefe03a031a3e637d9d294844.jpg],origin[dam],category[men_hoodiessweatshirts_hoodies],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]"
    },
    {
        title: "Product 2",
        price: 1900.99,
        description: "This is the second product.",
        image: "https://lp2.hm.com/hmgoepprod?set=source[/3a/57/3a579665dd86dab2fff705818e713f207663e9b0.jpg],origin[dam],category[men_hoodiessweatshirts_sweatshirts],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]"
    },
    {
        title: "Product 3",
        price: 3400.99,
        description: "This is the third product.",
        image: "https://lp2.hm.com/hmgoepprod?set=source[/ec/9d/ec9d5c92a0b821656b8d0a90971adfb7d4e0d125.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]"
    },
    {
        title: "Product 4",
        price: 1500.99,
        description: "This is the fourth product.",
        image: "https://lp2.hm.com/hmgoepprod?set=source[/2f/6c/2f6c5a89ff72342762d2633b45ffad8b9bb74d9b.jpg],origin[dam],category[men_hoodiessweatshirts_sweatshirts],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]"
    },
    {
        title: "Product 5",
        price: 2700.49,
        description: "This is the fifth product.",
        image: "https://lp2.hm.com/hmgoepprod?set=source[/b8/d9/b8d92b0dd3af9eda9144ba7ff6de8e8d195a2b4e.jpg],origin[dam],category[men_hoodiessweatshirts_hoodies],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]"
    },
    {
        title: "Product 6",
        price: 2200.99,
        description: "This is the sixth product.",
        image: "https://lp2.hm.com/hmgoepprod?set=source[/4b/14/4b14d34ef46158ab140923e1174777b578e759bc.jpg],origin[dam],category[men_hoodiessweatshirts_hoodies],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]"
    },
    {
        title: "Product 7",
        price: 3900.99,
        description: "This is the seventh product.",
        image: "https://lp2.hm.com/hmgoepprod?set=source[/f6/a1/f6a13ecf15c5391c5759389a884c51b1fd01e702.jpg],origin[dam],category[men_hoodiessweatshirts_hoodies],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]"
    },
    {
        title: "Product 8",
        price: 1100.49,
        description: "This is the eighth product.",
        image: "https://lp2.hm.com/hmgoepprod?set=source[/01/e2/01e21ec02e51cbc1cf63887b8f369cc44baca717.jpg],origin[dam],category[men_hoodiessweatshirts_hoodies],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]"
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
