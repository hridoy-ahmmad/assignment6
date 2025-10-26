const loadCategoryData =()=>{
    fetch("https://openapi.programming-hero.com/api/categories")
    .then(res => res.json())
    .then(data => displayCaterogyData(data.categories)
    )
}

const displayCaterogyData = (categories)=>{
    const categorieContainer = document.getElementById("category")
    categorieContainer.innerHTML='';
    // for(const category of categories){
    //     console.log(category);
        
    // }
    categories.map(category => {
        const categoryCard = document.createElement('div')
        categoryCard.innerHTML = `
        <h3 class="lg:text-xl font-medium hover:bg-green-200 py-2 my-4 px-3 rounded-sm cursor-pointer">${category.category_name}</h3>`
        categorieContainer.append(categoryCard)
    }
       
    )
    

}

loadCategoryData()