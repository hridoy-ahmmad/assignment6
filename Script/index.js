const loadCategoryData = () => {
    fetch("https://openapi.programming-hero.com/api/categories")
        .then(res => res.json())
        .then(data => displayCaterogyData(data.categories)
        )
}

const handleLoadTree = (id) => {
    // console.log('lasdiksjdsdd', id);
    const url = `https://openapi.programming-hero.com/api/category/${id}`
    // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displayTree(data.plants))



}
const displayCaterogyData = (categories) => {
    const categorieContainer = document.getElementById("category")
    categorieContainer.innerHTML = '';

    categories.map(category => {
        const categoryCard = document.createElement('div')
        categoryCard.innerHTML = `
        <h3 onclick=handleLoadTree(${category.id}) class="lg:text-xl font-medium hover:bg-green-200 py-2 my-4 px-3 rounded-sm cursor-pointer">${category.category_name}</h3>`
        categorieContainer.append(categoryCard)
    }

    )
}



const displayTree = (trees) => {
    console.log(trees);
    const treeContainer = document.getElementById("tree_container")
    treeContainer.innerHTML = ''
    trees.map(tree => {
        const treeCard = document.createElement('div')
        treeCard.innerHTML = `
            <div class="max-w-sm bg-white rounded-lg shadow-md overflow-hidden p-4">
                        <img src=${tree.image} alt=${tree.name}
                            class="w-full h-48 object-cover rounded-md mb-4">
                        <h2 class="text-lg font-semibold text-gray-800 mb-2">
                        ${tree.name}
                        </h2>
                        <p class="text-gray-600 text-sm mb-4">
                            ${tree.description}
                        </p>
                        <div class="flex items-center justify-between mb-4">
                            <span class="text-green-600 bg-green-100 text-xs font-medium px-2 py-1 rounded-full">
                            ${tree.category}
                            </span>
                            <span class="text-gray-800 font-semibold text-sm">
                            ${tree.price} tk
                            </span>
                        </div>
                        <button
                            class="w-full bg-green-700 text-white py-2 rounded-lg hover:bg-green-800 transition duration-200">
                            Add to Cart
                        </button>
                    </div>
        `
        treeContainer.append(treeCard)
    }
    )

}

loadCategoryData()

