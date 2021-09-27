type FriendsType = {
    name: string,
    avatar: string
}

const initialState = {
    friends: [
        { name: 'Serega', avatar: 'https://tattoo-stickers.ru/34939-thickbox_default/nichosi.jpg' },
        { name: 'Semen', avatar: 'https://tattoo-stickers.ru/34939-thickbox_default/nichosi.jpg' },
        { name: 'Masha', avatar: 'https://tattoo-stickers.ru/34939-thickbox_default/nichosi.jpg' }
    ] as Array<FriendsType>
}
type initialStateType = typeof initialState;

const sidebarReducer = (state = initialState, action: any): initialStateType => {

    let stateCopy = { ...state }
    return stateCopy;
}
export default sidebarReducer;