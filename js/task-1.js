const allItems = [...document.querySelectorAll('li.item')];
console.log(`В списке ${allItems.length} категории`);

allItems
    .map(item => {
        const titleEl = item.querySelector('h2');
        const listEl = item.querySelectorAll('ul li');
        return {
            titleEl: titleEl.textContent,
            result: listEl.length,
        };
    })
    .forEach(entry => {
        console.log(
            'Категория: ',
            entry.titleEl,
            '\r\nКоличество элементов:',
            entry.result
        );
    });