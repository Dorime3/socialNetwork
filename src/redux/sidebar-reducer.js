const initialState = {
    friends: [
        { name: 'Serega', avatar: 'https://tattoo-stickers.ru/34939-thickbox_default/nichosi.jpg' },
        { name: 'Semen', avatar: 'https://tattoo-stickers.ru/34939-thickbox_default/nichosi.jpg' },
        { name: 'Masha', avatar: 'https://tattoo-stickers.ru/34939-thickbox_default/nichosi.jpg' }
    ]
}

const sidebarReducer = (state = initialState, action) => {

    let stateCopy = { ...state }
    return stateCopy;
}
export default sidebarReducer;