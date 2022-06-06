class MenuItemModel {
    constructor(id, name, courseType, price) {
        this.id = id || Math.random().toString();
        this.name = name;
        this.courseType = courseType;
        this.price = price;
    }
    formattedPrice() {
        return `${this.price?.toFixed(2)} €`
    }
}

export default MenuItemModel;