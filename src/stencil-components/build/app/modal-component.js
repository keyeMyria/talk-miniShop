/*! Built with http://stenciljs.com */
const { h } = window.App;

class ModalComponent {
    render() {
        return (h("div", { role: "dialog", "aria-labelledby": "title", class: "modal" },
            h("div", { class: "modal__overlay" }),
            h("div", { class: "modal__window" },
                h("div", { class: "modal__window__content" },
                    h("a", { href: "", class: "modal__window__close-button", title: "Close the dialog", role: "button" },
                        h("span", { class: "sr-only" }, "Modal Close")),
                    h("h1", null, this.modalTitle)))));
    }
    static get is() { return "modal-component"; }
    static get properties() { return {
        "closeButton": {
            "type": String,
            "attr": "close-button"
        },
        "modalTitle": {
            "type": String,
            "attr": "modal-title"
        },
        "width": {
            "type": String,
            "attr": "width"
        }
    }; }
    static get style() { return "$modal-border-purple:  #b1a1b4;\n$modal-background-white: #ffffff;\n$modal-background-dark-grey: #5f5c5c;\n\n.modal {\n    background: transparent;\n    height: 100%;\n    left: 0;\n    position: fixed;\n    top: 0;\n    width: 100%;\n    z-index: 997;\n\n    &__overlay {\n        bottom: 0;\n        position: absolute;\n        top: 0;\n        width: 100%;\n        left: 0;\n        right: 0;\n    }\n\n    &__window {\n        height: 100%;\n        width: 100%;\n        position: fixed;\n        left: 0;\n        top: 0;\n        z-index: $zindex-modal;\n        -webkit-transition: all ease .25s;\n        transition: all ease .25s;\n        opacity: 1;\n\n        \@media (min-width: $screen-md-min){\n            max-width: 708px;\n        }\n\n        \@media (min-width: $screen-lg-min){\n            max-width: 960px;\n        }\n\n\n        &__content {\n            background-color: $modal-background-white;\n            border-top: 5px solid $modal-border-purple;\n            position: absolute;\n            left: 0;\n            bottom: 0;\n            right: 0;\n            overflow-y: scroll;\n            overflow-x: hidden;\n            padding: 30px;\n\n            > *:first-child {\n                margin-right: 20px;\n            }\n        }\n\n        &__close-button {\n            \@extend .tt_icon-x;\n            \@include removeUnderline;\n\n            font-size: 40px;\n            right: -15px;\n            top: 5px;\n            outline: none;\n            position: absolute;\n            z-index: 99;\n\n            \@media (min-width: $screen-md-min) {\n                top: 5px;\n            }\n\n            &:hover {\n                text-decoration: none;\n            }\n        }\n\n        & &__close-button {\n            color: $gray;\n        }\n    }\n\n    \@media (min-width: $screen-md-min) {\n        background-color: rgba($modal-background-dark-grey, .7);\n        overflow-x: hidden;\n        overflow-y: auto;\n\n        &__window {\n            \@include transform(translate(-50%, 0));\n\n            margin-bottom: 20px;\n            height: auto;\n            width: 100%;\n            position: absolute;\n            overflow: auto;\n            top: 50px;\n            left: 50%;\n            background-color: $modal-background-white;\n            border: 0;\n            border-radius: 5px;\n\n            &__content {\n                height: 100%;\n                width: 100%;\n                position: relative;\n                overflow: visible;\n                border: 0;\n            }\n        }\n    }\n}\n\n// Add 'has-modal' class to body tag, when modal is visible\nbody.has-modal {\n    overflow: hidden;\n\n    .header__nav button {\n        display: none;\n    }\n}\n\n.ie10,\n.ie11 {\n\n    .modal__window__close-button {\n        position: absolute;\n    }\n}"; }
}

class ProductCard {
    componentWillLoad() {
        this.featuresList = this.features.split(",");
    }
    render() {
        return (h("section", null,
            h("img", { src: this.imageName, alt: this.productName }),
            h("h2", null, this.productName),
            h("div", null,
                h("span", null, "Plan includes:"),
                h("ul", null, this.featuresList.map(feature => h("li", null, feature)))),
            h("div", null,
                h("div", null,
                    h("span", null,
                        h("strong", null,
                        "£", this.price,
                            " a month"))),
                h("p", null,
                    "for ",
                    this.contractLength,
                    " months, includes line rental"))));
    }
    static get is() { return "product-card"; }
    static get properties() { return {
        "contractLength": {
            "type": String,
            "attr": "contract-length"
        },
        "features": {
            "type": String,
            "attr": "features"
        },
        "imageName": {
            "type": String,
            "attr": "image-name"
        },
        "price": {
            "type": String,
            "attr": "price"
        },
        "productName": {
            "type": String,
            "attr": "product-name"
        }
    }; }
    static get style() { return ""; }
}

export { ModalComponent, ProductCard };
