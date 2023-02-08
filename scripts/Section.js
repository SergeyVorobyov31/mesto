class Section {
    constructor({renderer}, containerSelector) {
      
      this._container = containerSelector;
      this._renderer = renderer;
    }
  
    addItemPrepend(element) {
      this._container.prepend(element);
    }

    addItemAppend(element) {
      this._container.append(element);
    }
  
    renderItems(items) {
      items.forEach(item => {
        this._renderer(item);
      });
    }
  }

  export default Section;