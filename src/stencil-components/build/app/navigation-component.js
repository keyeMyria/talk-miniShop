/*! Built with http://stenciljs.com */
const{h:t}=window.App;class e{render(){return t("ul",null,this.menus.map(e=>t("stencil-route-link",{url:e.url,activeClass:"category-sidebar-active"},t("li",null,e.name))))}static get is(){return"navigation-component"}static get properties(){return{menus:{type:"Any",attr:"menus"}}}static get style(){return"app-categories-sidebar {\n  ul {\n    width: 300px;\n  }\n  .category-sidebar-active {\n    li {\n      background: #039be5;\n      color: white;\n    }\n  }\n}"}}class n{componentWillLoad(){this.featuresList=this.features.split(",")}render(){return t("section",null,t("img",{src:this.imageName,alt:this.productName}),t("h2",null,this.productName),t("div",null,t("span",null,"Plan includes:"),t("ul",null,this.featuresList.map(e=>t("li",null,e)))),t("div",null,t("div",null,t("span",null,t("strong",null,"£",this.price," a month"))),t("p",null,"for ",this.contractLength," months, includes line rental")))}static get is(){return"product-card"}static get properties(){return{contractLength:{type:String,attr:"contract-length"},features:{type:String,attr:"features"},imageName:{type:String,attr:"image-name"},price:{type:String,attr:"price"},productName:{type:String,attr:"product-name"}}}static get style(){return""}}export{e as NavigationComponent,n as ProductCard};