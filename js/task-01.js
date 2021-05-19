const listCategories = document.querySelectorAll('.item');

const countCategories = categories => console.log(`В списке ${listCategories.length} категории.`);

const categoryItems = () => {
    listCategories.forEach(item => console.log(`Категория: ${item.querySelectorAll('h2').textContent},
Количество элементов: ${item.querySelectorAll('ul li').length}`)
    )
};



countCategories();
categoryItems();