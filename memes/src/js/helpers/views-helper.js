class ViewsHelper {
    constructor() {

    }

    static setDataAttributes($elem, func, ...arrFuncArgs) {
        const lastIndex = arrFuncArgs.length - 1;

        $elem.data('func', func);

        arrFuncArgs.forEach((item, index) => {
        if (index === lastIndex) {
          $elem.data('number', item);
        }
        $elem.data(`id-${index}`, item);
        });
        // number: dark === 1 : light === 0
    }

    static addSvgImage(darkImage, lightImage, parent) {
      parent.html( darkImage + lightImage );
    }

    static appendInput(name, type, checked, parent, id) {
      return $('<input>', {
        name,
        id,
        type,
        checked,
      }).appendTo(parent);
    }

    static appendTextElement(tag, className, id, text, parent) {
      $(`<${tag}>`, {
        class: className,
        id,
        text,
      }).appendTo(parent);
    }

    static createContainer(tag, className, id) {
      return $(`<${tag}>`, {
        class: className || null,
        id: id || null,
      });
    }

    static appendButton(className, id, text, parent) {
      return $('<button>', {
        class: className || null,
        id,
        type: 'button',
        text,
      }).appendTo(parent);
    }
}

export default ViewsHelper;
