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
        <h3 onclick=handleLoadTree(${category.id}) class="lg:text-xl font-medium hover:bg-green-200 py-2 my-4 px-3 rounded-sm cursor-pointer">${category.category_name}</h3>
        
        `

        categorieContainer.append(categoryCard)
    }

    )
}

const handleDetailsModal = (id) => {
    const url = `https://openapi.programming-hero.com/api/plant/${id}`
    console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displayDetails(data))
}
const defaultAllTrees = () => {
    console.log('default');
    fetch("https://openapi.programming-hero.com/api/plants")
        .then(res => res.json())
        .then(data => displayTree(data.plants))
}

const displayTree = (trees) => {
    // console.log(trees);
    const treeContainer = document.getElementById("tree_container")
    treeContainer.innerHTML = ''
    trees.map(tree => {
        const treeCard = document.createElement('div')
        treeCard.innerHTML = `
            <div onclick="handleDetailsModal(${tree.id})" class="max-w-sm bg-white rounded-lg shadow-md overflow-hidden p-4">
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

const displayDetails = (tree) => {
    const detailsModal = document.getElementById("display-details")
    console.log(tree);
    detailsModal.innerHTML = `
     <!-- Image Container -->
     <h1 class="text-xl font-semibold  pb-0">${tree.plants.name}</h1>
        <div class=" pt-3">
            <img 
                src="${tree.plants.image}" 
                alt="A majestic Banyan tree canopy with sunlight filtering through."
                class="w-full h-48 object-cover rounded-md"
                onerror="this.onerror=null; this.src='https://placehold.co/400x300/4F46E5/FFFFFF?text=Image+Unavailable';"
            >
        </div>
        
        <!-- Details and Description Section -->
        <div class="p-4 pt-1 space-y-3">
            
            <!-- Category & Price -->
            <div class="mt-5">
                <p class="text-sm">
                    <span class="font-bold text-gray-700">Category:</span> ${tree.plants.category}
                </p>
                <p class="text-sm">
                    <span class="font-bold text-gray-700">Price:</span> ${tree.plants.price}
                </p>
            </div>

            <!-- Description -->
            <p class="text-sm text-gray-600 leading-relaxed">
                <span class="font-bold text-gray-700">Description:</span> 
                ${tree.plants.description}
            </p>

            <!-- Close Button (positioned to the bottom right) -->
            <div class="text-right pt-2">
                <button class="text-sm text-gray-500 hover:text-gray-700 font-medium px-3 py-1 transition-colors duration-150">
                    Close
                </button>
            </div>
`
document.getElementById(my_modal_3.showModal())


}

loadCategoryData()
defaultAllTrees()

