webpackJsonp([0,1],[function(e,t){e.exports=_},function(e,t){e.exports=angular},function(e,t){},function(e,t){e.exports=$},function(e,t,n){"use strict";t.__esModule=!0;var r=n(23);t.landingPage={bindings:{searchPlaceholder:"@",doSearchFn:"<"},controller:r.LandingPageController,template:n(13),transclude:{landingheader:"landingheader",landingbody:"landingbody",landingside:"landingside"}}},function(e,t,n){"use strict";t.__esModule=!0;var r=n(24);t.orderService={bindings:{serviceClass:"<",handleClose:"<"},controller:r.OrderServiceController,template:n(18)}},function(e,t,n){"use strict";t.__esModule=!0;var r=n(25);t.overlayPanel={bindings:{showClose:"<",showPanel:"<",handleClose:"<"},controller:r.OverlayPanelController,template:n(19),transclude:!0}},function(e,t,n){"use strict";t.__esModule=!0;var r=n(26);t.projectsSummary={bindings:{projectSelect:"&",showProjects:"&"},controller:r.ProjectsSummaryController,template:n(20)}},function(e,t,n){"use strict";t.__esModule=!0;var r=n(27);t.saasList={bindings:{saasTitle:"<?",saasOfferings:"<"},controller:r.SaasListController,template:n(21)}},function(e,t,n){"use strict";t.__esModule=!0;var r=n(28);t.servicesView={bindings:{serviceClasses:"<",imageStreams:"<"},controller:r.ServicesViewController,template:n(22)}},function(e,t,n){"use strict";t.__esModule=!0;var r=n(0),i=[{id:1,title:"Microservices Application",icon:"fa fa-cubes",url:"https://www.redhat.com/en/technologies/virtualization",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt."},{id:2,title:"Mobile Application",icon:"fa fa-mobile",url:"https://www.redhat.com/en/technologies/mobile",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt."},{id:3,title:"Integration Application",icon:"fa fa-plug",url:"https://www.redhat.com/en/technologies/cloud-computing",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt."},{id:4,title:"Business Process Application",icon:"fa fa-cubes",url:"https://www.redhat.com/en/technologies/management",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt."}],s=[{id:"languages",label:"Languages",iconClassDefault:"fa fa-code",subCategories:[{id:"java",label:"Java",icon:"font-icon icon-openjdk"},{id:"javascript",categoryAliases:["nodejs","js"],label:"Javascript",icon:"font-icon icon-js"},{id:"perl",label:"Perl",icon:"font-icon icon-perl"},{id:"ruby",label:"Ruby",icon:"font-icon icon-ruby"},{id:"php",label:"PHP",icon:"font-icon icon-php"},{id:"python",label:"Python",icon:"font-icon icon-python"}]},{id:"databases",label:"Databases",subCategories:[{id:"mongodb",label:"Mongo",icon:"font-icon icon-mongodb"},{id:"mysql",label:"mySQL",icon:"font-icon icon-mysql-database"},{id:"postgresql",label:"Postgres",icon:"font-icon icon-postgresql"},{id:"mariadb",label:"MariaDB",icon:"font-icon icon-mariadb"}]},{id:"middleware",label:"Middleware",subCategories:[{id:"jboss",label:"JBoss",icon:"font-icon icon-openjdk"},{id:"fuse",label:"Fuse",icon:"font-icon icon-openjdk"},{id:"amq",label:"A-MQ",icon:"font-icon icon-openjdk"},{id:"bpm",label:"BPM",icon:"font-icon icon-openjdk"}]},{id:"cicd",label:"CI/CD",subCategories:[{id:"jenkins",label:"Jenkins",icon:"font-icon icon-jenkins"},{id:"pipelines",label:"Pipelines",icon:"fa fa-clone"}]},{id:"other",label:"Other",subCategories:[{id:"other",label:"Other"}]}];t.allCategories=s,t.allSaasOfferings=i,r.set(window,"OPENSHIFT_CONSTANTS.SERVICE_CATALOG_CATEGORIES",s),r.set(window,"OPENSHIFT_CONSTANTS.SAAS_OFFERINGS",i)},function(e,t,n){"use strict";t.__esModule=!0;var r=n(1),i=n(0),s=function(){function CatalogService(e,t){this.constants=e,this.$filter=t,this.categories=this.constants.SERVICE_CATALOG_CATEGORIES}return CatalogService.prototype.getServiceItem=function(e){return new o(e,this)},CatalogService.prototype.getImageItem=function(e){var t=new a(e,this);return t.isBuilder&&!t.isHidden?t:null},CatalogService.prototype.getCategoriesBySubCategories=function(e){var t=this,n={},r="other";return i.each(e,function(e){i.each(t.categories,function(t){var r=i.find(t.subCategories,function(t){return t.id===e||i.includes(t.categoryAliases,e)});if(r)return n[r.id]=t.id,!1})}),i.isEmpty(n)&&(n[r]=r),n},CatalogService.prototype.hasCategory=function(e,t){return i.includes(e.catsBySubCats,t)},CatalogService.prototype.hasSubCategory=function(e,t){return i.has(e,["catsBySubCats",t])},CatalogService.prototype.removeEmptyCategories=function(e){var t=this,n=r.copy(this.categories),s=[];return i.each(n,function(n){var o=i.filter(n.subCategories,function(n){return i.some(e,function(e){return t.hasSubCategory(e,n.id)})});if(!i.isEmpty(o)){var a=r.copy(n);a.subCategories=o,s.push(a)}}),s},CatalogService}();s.$inject=["Constants","$filter"],t.CatalogService=s;var o=function(){function ServiceItem(e,t){this.resource=e,this.catalogSrv=t,this.imageUrl=this.getImage(),this.iconClass=this.getIcon(),this.name=this.getName(),this.description=this.getDescription(),this.longDescription=this.getLongDescription(),this.catsBySubCats=this.getCategoriesBySubCategories()}return ServiceItem.prototype.getImage=function(){return i.get(this.resource,"osbMetadata.imageUrl","")},ServiceItem.prototype.getIcon=function(){return i.get(this.resource,["osbMetadata","console.openshift.io/iconClass"],"fa fa-cubes")},ServiceItem.prototype.getName=function(){return i.get(this.resource,"osbMetadata.displayName",this.resource.metadata.name)},ServiceItem.prototype.getDescription=function(){return i.get(this.resource,"osbMetadata.description","")},ServiceItem.prototype.getLongDescription=function(){return i.get(this.resource,"osbMetadata.longDescription","")},ServiceItem.prototype.getCategoriesBySubCategories=function(){return this.catalogSrv.getCategoriesBySubCategories(this.resource.osbTags)},ServiceItem}();t.ServiceItem=o;var a=function(){function ImageItem(e,t){this.resource=e,this.catalogSrv=t,this.tags=this.catalogSrv.$filter("imageStreamTagTags")(this.resource),this.iconClass=this.getIcon(),this.name=this.getName(),this.description=this.getDescription(),this.longDescription=this.getLongDescription(),this.catsBySubCats=this.getCategoriesBySubCategories(),this.isBuilder=i.includes(this.tags,"builder"),this.isHidden=i.includes(this.tags,"hidden")}return ImageItem.prototype.getIcon=function(){var e=this.catalogSrv.$filter("imageStreamTagIconClass")(this.resource,this.resource.spec.tags[0].name);return e=e.indexOf("icon-")!==-1?"font-icon "+e:e},ImageItem.prototype.getName=function(){var e=this.catalogSrv.$filter("displayName")(this.resource);return e||(e=this.resource.metadata.name),e},ImageItem.prototype.getDescription=function(){return null},ImageItem.prototype.getLongDescription=function(){return null},ImageItem.prototype.getCategoriesBySubCategories=function(){return this.catalogSrv.getCategoriesBySubCategories(this.tags)},ImageItem}();t.ImageItem=a},function(e,t,n){"use strict";function animateScrollTo(e){var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],n={speed:500,minDuration:250,maxDuration:3e3,cancelOnUserAction:!0},r={};Object.keys(n).forEach(function(e){r[e]=t[e]?t[e]:n[e]});var i=window.scrollY||document.documentElement.scrollTop,s=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)-window.innerHeight;e>s&&(e=s);var o=e-i;if(0!==o){var a=Math.abs(Math.round(o/1e3*r.speed));a<r.minDuration?a=r.minDuration:a>r.maxDuration&&(a=r.maxDuration);var l=Date.now(),c=null,d=null;r.cancelOnUserAction?(d=function(e){cancelAnimationFrame(c)},window.addEventListener("keydown",d)):(d=function(e){e.preventDefault()},window.addEventListener("scroll",d)),window.addEventListener("wheel",d),window.addEventListener("touchstart",d);var p=function step(){var t=Date.now()-l,n=t/a-1,s=n*n*n+1,p=Math.round(i+o*s);t<a&&p!==e?(window.scrollTo(0,p),c=requestAnimationFrame(step)):(window.scrollTo(0,e),cancelAnimationFrame(c),window.removeEventListener("wheel",d),window.removeEventListener("touchstart",d),r.cancelOnUserAction?window.removeEventListener("keydown",d):window.removeEventListener("scroll",d))};c=requestAnimationFrame(p)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=animateScrollTo},function(e,t){e.exports='<div class="landing-page">\n  <div class="landing-page-container" ng-class="{\'snap-up-shown\': $ctrl.showSnapDown}">\n    <div class="landing-main-area">\n      <div class="landing-search-area">\n        <form role="form" class="landing-search-form search-pf has-button">\n          <div class="form-group has-clear">\n            <div class="search-pf-input-group">\n              <label for="search1" class="sr-only">{{$ctrl.searchPlaceholder}}</label>\n              <input id="search1" type="search" class="form-control" placeholder="{{$ctrl.searchPlaceholder}}" ng-model="$ctrl.searchText" ng-keypress="($event.charCode==13)? $ctrl.onSearchButtonClick() : return">\n              <button type="button" ng-if="$ctrl.searchText" class="clear" aria-hidden="true">\n            <span class="pficon pficon-close">\n            </span>\n              </button>\n            </div>\n          </div>\n          <div class="form-group">\n            <button class="btn btn-default" type="button">\n          <span class="fa fa-search"  ng-click="$ctrl.onSearchButtonClick()">\n          </span>\n            </button>\n          </div>\n        </form>\n      </div>\n      <div class="landing-header-area" ng-transclude="landingheader">\n      </div>\n      <div class="snap-container snap-down">\n        <a href="#" class="fa fa-arrow-circle-o-down fa-3x" ng-click="$ctrl.snapDown($event)"></a>\n      </div>\n      <div class="landing-body-area">\n        <div ng-transclude="landingbody"></div>\n      </div>\n      <div class="snap-container snap-up" ng-class="{\'scrolled-down\': $ctrl.showSnapDown}">\n        <a href="#" class="fa fa-arrow-circle-o-up fa-3x" ng-click="$ctrl.snapUp($event)"></a>\n      </div>\n    </div>\n    <div class="landing-side-bar" ng-transclude="landingside">\n    </div>\n  </div>\n</div>\n'},function(e,t){e.exports='<div class="config-top">\n  <form class="form-horizontal config-form">\n    <div class="form-group">\n      <label class="col-sm-4 control-label" for="project">Add to Project</label>\n      <div class="col-sm-8">\n        <!-- TODO: handle duplicate display names -->\n        <!-- TODO: let users create projects -->\n        <select\n            id="project"\n            ng-model="$ctrl.selectedProject"\n            ng-options="project as (project | displayName) for project in $ctrl.projects track by (project | uid)"\n            class="form-control">\n        </select>\n      </div>\n    </div>\n\n    <!-- TODO: add parameters -->\n    <!-- <div class="form-group"> -->\n    <!--   <label class="col-sm-4 control-label" for="field1">Field 1</label> -->\n    <!--   <div class="col-sm-8"> -->\n    <!--     <input class="form-control" type="text" id="field1"> -->\n    <!--   </div> -->\n    <!-- </div> -->\n  </form>\n</div>\n'},function(e,t){e.exports='<div ng-if="$ctrl.versions" uib-dropdown class="input-group-btn version-dropdown">\n  <button uib-dropdown-toggle type="button" class="btn btn-default" uib-tooltip="Select Version" tooltip-placement="top">\n    {{$ctrl.selectedVersion}}\n    <span class="caret"></span>\n  </button>\n  <ul uib-dropdown-menu>\n    <li ng-repeat="version in $ctrl.versions">\n      <a role="menuitem" tabindex="-1" ng-click="$ctrl.selectedVersion = version">\n        {{version}}\n      </a>\n    </li>\n  </ul>\n</div>\n<div ng-bind-html="$ctrl.description | linky : \'_blank\'"></div>\n<!-- TODO: truncate long text -->\n<p class="description">\n  <div ng-bind-html="$ctrl.longDescription | linky : \'_blank\'"></div>\n  <!-- TODO: add documentation link -->\n  <!-- <a href="">Learn More...</a> -->\n</p>\n'},function(e,t){e.exports='<div class="config-top">\n  <div class="select-plans">\n    <h3>Select a Plan</h3>\n    <div ng-repeat="plan in $ctrl.serviceClass.resource.plans" class="radio">\n      <label>\n        <input\n          type="radio"\n          ng-model="$ctrl.planIndex"\n          ng-change="$ctrl.selectPlan(plan)"\n          value="{{$index}}">\n        <span class="plan-name">{{plan.osbMetadata.displayName || plan.name}}</span>\n        <!-- TODO: truncate long text -->\n        <div ng-if="plan.description">{{plan.description}}</div>\n        <!-- TODO: show plan bullets -->\n        <div ng-if="plan.osbFree">Free</div>\n        <div ng-if="!plan.osbFree">Paid</div>\n      </label>\n    </div>\n  </div>\n</div>\n'},function(e,t){e.exports='<div class="col-md-12 center">\n  <div ng-if="!$ctrl.error">\n    <div class="title">\n      Your Order is Complete <span class="fa fa-check success-check"></span>\n    </div>\n    <div class="sub-title center">\n      Continue to your project to bind the service to your application.\n    </div>\n    <div class="launch-service">\n      <!-- FIXME: Only works in the console -->\n      <!-- TODO: Provide direct link to bind action? -->\n      <a ng-href="project/{{$ctrl.selectedProject.metadata.name}}/overview" class="btn btn-primary order-btn">\n        View Project\n      </a>\n    </div>\n  </div>\n  <div ng-if="$ctrl.error">\n    <div class="title">Order Failed <span class="fa fa-times text-danger"></span></div>\n    <div class="sub-title center">\n      <span ng-if="$ctrl.error.data.message">\n        {{$ctrl.error.data.message | upperFirst}}\n      </span>\n      <span ng-if="!$ctrl.error.data.message">\n        An error occurred ordering the service.\n      </span>\n    </div>\n  </div>\n  <div>\n    <a class="close-href" href="" ng-click="$ctrl.closePanel()">Close</a> this panel to browse other services.\n  </div>\n  <!-- <div class="related-services-container"> -->\n  <!--   <span class="related-services-label">Related Services</span> -->\n  <!--   <span class="related-services-row"> -->\n  <!--     <div class="card"> -->\n  <!--       <div class="card-icon font-icon icon-jenkins"></div> -->\n  <!--       <div class="card-name">Jenkins</div> -->\n  <!--     </div> -->\n  <!--     <div class="card"> -->\n  <!--       <div class="card-icon font-icon icon-mysql-database"></div> -->\n  <!--       <div class="card-name">mySQL</div> -->\n  <!--     </div> -->\n  <!--   </span> -->\n  <!-- </div> -->\n</div>\n'},function(e,t){e.exports='<div class="order-service wizard-pf-body">\n  <div class="wizard-pf-steps">\n    <ul class="wizard-pf-steps-indicator" ng-if="$ctrl.wizardReady">\n      <li class="wizard-pf-step" ng-class="{\n        active: step.selected,\n        visited: step.visited && !step.selected\n      }" ng-repeat="step in $ctrl.getSteps()" data-tabgroup="{{$index}}">\n        <a ng-click="$ctrl.stepClick(step)"><span class="wizard-pf-step-number">{{$index + 1}}</span><span class="wizard-pf-step-title">{{step.label}}</span></a>\n      </li>\n    </ul>\n  </div>\n  <div class="container-fluid wizard-pf-main">\n    <div class="col-sm-6 order-service-details">\n      <div class="order-service-deails-top">\n        <div class="service-title">\n          <span ng-if="!$ctrl.imageUrl" class="icon {{$ctrl.iconClass}}"></span>\n          <!-- TODO: Need to size the image -->\n          <span ng-if="$ctrl.imageUrl"><img src="{{$ctrl.imageUrl}}"></span>\n          <span class="name">{{$ctrl.serviceName}}</span>\n          <span class="version" ng-if="$ctrl.currentStep.id != 1">{{$ctrl.selectedVersion}}</span>\n        </div>\n        <div ng-if="$ctrl.currentStep.id === \'plans\'">\n          <div ng-include="\'components/order-service/order-service-details.html\'"></div>\n        </div>\n        <div ng-if="$ctrl.currentStep.id !== \'plans\'">\n          <div ng-if="$ctrl.selectedPlan" class="h3">\n            Plan {{$ctrl.selectedPlan.osbMetadata.displayName || $ctrl.selectedPlan.name}}\n          </div>\n          <div ng-include="\'components/order-service/order-service-details.html\'"></div>\n        </div>\n      </div>\n    </div>\n    <div class="col-sm-6 order-service-config">\n      <div ng-include="$ctrl.currentStep.view" class="wizard-pf-contents"></div>\n    </div>\n  </div>\n  <div class="config-bottom modal-footer wizard-pf-footer">\n    <button\n        type="button"\n        class="btn btn-default btn-cancel wizard-pf-cancel wizard-pf-dismiss"\n        ng-disabled="$ctrl.currentStep.id === \'results\'"\n        ng-click="$ctrl.closePanel()">\n      Cancel\n    </button>\n    <!-- Hide the button when only one plan. It will never be enabled. -->\n    <button\n        type="button"\n        class="btn btn-default wizard-pf-back"\n        ng-if="$ctrl.plans.length > 1"\n        ng-disabled="$ctrl.currentStep.id !== \'configure\'"\n        ng-click="$ctrl.previousStep()">\n      <span class="fa fa-angle-left" aria-hidden="true"></span>\n      Back\n    </button>\n    <button\n        type="button"\n        class="btn btn-primary wizard-pf-next"\n        ng-if="$ctrl.currentStep.id !== \'configure\' && $ctrl.currentStep.id !== \'results\'"\n        ng-click="$ctrl.nextStep()">\n      Next\n      <span class="fa fa-angle-right" aria-hidden="true"></span>\n    </button>\n    <button\n        type="button"\n        class="btn btn-primary wizard-pf-next"\n        ng-if="$ctrl.currentStep.id === \'configure\'"\n        ng-disabled="!$ctrl.selectedProject || $ctrl.currentStep.id === \'results\'"\n        ng-click="$ctrl.provisionService()">\n      Create\n      <span class="fa fa-angle-right" aria-hidden="true"></span>\n    </button>\n    <button\n        type="button"\n        class="btn btn-primary wizard-pf-close wizard-pf-dismiss"\n        ng-if="$ctrl.currentStep.id === \'results\'"\n        ng-click="$ctrl.closePanel()">\n      Close\n    </button>\n  </div>\n</div>\n'},function(e,t){e.exports='<div class="catalogs-overlay-modal ng-class="{\'modal-open modal fade in\': $ctrl.showOverlayPanel" role="dialog">\n  <div ng-if="$ctrl.showBackdrop" class="modal-backdrop fade in"></div>\n  <div ng-if="$ctrl.shown" class="catalogs-overlay-panel">\n    <a ng-if="$ctrl.showClose" ng-click="$ctrl.closePanel()">\n      <span class="catalogs-overlay-panel-close pficon pficon-close"></span>\n    </a>\n    <div class="catalogs-overlay-panel-body" ng-transclude>\n    </div>\n  </div>\n</div>\n'},function(e,t){e.exports='<div class="catalog-projects-summary-panel">\n  <button ng-if="$ctrl.canCreate" class="create-button btn btn-primary" ng-click="$ctrl.openNewProjectPanel()">\n    <span class="fa fa-plus"></span>\n    <span class="create-button-text">Create Project</span>\n  </button>\n  <div class="catalog-create-project-panel" ng-if="$ctrl.showNewProjectPanel">\n    <div class="arrow"></div>\n    <div class="catalog-create-project-title">\n      <span>Create Project</span>\n      <a href="" class="pull-right" ng-click="$ctrl.closeNewProjectPanel()">\n        <span class="catalog-create-project-close pficon pficon-close"></span>\n      </a>\n    </div>\n    <create-project alerts="$ctrl.alerts" is-dialog="true" redirect-action="$ctrl.onNewProject" on-cancel="$ctrl.closeNewProjectPanel"></create-project>\n  </div>\n\n  <div ng-if="$ctrl.showGetStarted">\n    <h2>Getting Started</h2>\n    <div class="getting-started-panel">\n      {{$ctrl.gettingStartedText}}\n    </div>\n  </div>\n  <div ng-if="!$ctrl.showGetStarted" class="catalog-project-summary-list">\n    <div ng-if="$ctrl.totalProjects > $ctrl.maxDisplayProjects" class="projects-count-area">\n      <span class="counter-text">{{$ctrl.maxDisplayProjects}}</span>\n      <span>of</span>\n      <span class="counter-text">{{$ctrl.totalProjects}}</span>\n      <span>Projects</span>\n      <a href="" class="projects-view-all" ng-click="$ctrl.showAllProjects()">View All</a>\n    </div>\n    <div id="catalog-projects-summary-list">\n      <div ng-repeat="project in $ctrl.projects track by (project | uid)" class="project-tile">\n        <div class="dropdown  dropdown-kebab-pf" uib-dropdown="">\n          <button class="btn btn-link uib-dropdown-toggle" type="button" id="dropdownKebab" aria-haspopup="true" aria-expanded="true" uib-dropdown-toggle>\n            <span class="fa fa-ellipsis-v"></span>\n          </button>\n          <ul class="uib-dropdown-menu dropdown-menu-right" aria-labelledby="dropdownKebab">\n            <li><a href="" ng-click="$ctrl.editProject(project)">Edit</a></li>\n            <li>\n              <delete-link\n                  kind="Project"\n                  resource-name="{{project.metadata.name}}"\n                  project-name="{{project.metadata.name}}"\n                  display-name="{{(project | displayName)}}"\n                  type-name-to-confirm="true"\n                  stay-on-current-page="true"\n                  alerts="$ctrl.alerts">\n              </delete-link>\n            </li>\n          </ul>\n        </div>\n        <div class="project-tile-header">\n          <span ng-if="project.statusIconClass" class="project-status {{project.statusIconClass}}"></span>\n          <a href="" ng-click="$ctrl.handleProjectClick(project)" class="project-title">{{project | displayName}}</a>\n          <span class="project-date">{{project.metadata.creationTimestamp | date: \'mediumDate\'}}</span>\n        </div>\n        <div class="project-description">\n          {{project | description}}\n        </div>\n        <div class="catalog-edit-project-panel" ng-if="$ctrl.showEditProjectPanel && $ctrl.edittingProject === project">\n          <div class="arrow"></div>\n          <div class="catalog-create-project-title">\n            Edit Project &ndash; {{$ctrl.edittingProject | displayName}}\n            <a href="" class="pull-right" ng-click="$ctrl.closeEditProjectPanel()">\n              <span class="catalog-create-project-close pficon pficon-close"></span>\n            </a>\n          </div>\n          <edit-project project="$ctrl.edittingProject" is-dialog="true" alerts="$ctrl.alerts" redirect-action="$ctrl.onEditProject" on-cancel="$ctrl.closeEditProjectPanel"></edit-project>\n        </div>\n      </div>\n    </div>\n  </div>\n  <h3>Resources</h3>\n  <span>\n    {{$ctrl.resourcesText}}\n  </span>\n  <div class="resources-panel">\n    <ul>\n      <li ng-repeat="resource in $ctrl.resources">\n        {{resource.text}}\n      </li>\n    </ul>\n  </div>\n</div>\n'},function(e,t){e.exports='<span ng-if="$ctrl.hasSaasOfferings()" class="saas-offerings-container">\n  <h1 ng-if="$ctrl.saasTitle">{{$ctrl.saasTitle}}</h1>\n  <div pf-card-view config="$ctrl.cardViewConfig" items="$ctrl.saasOfferings">\n    <div class="card-container">\n      <div class="card-header">\n        <span class="card-icon {{item.icon}}"></span>\n        <span class="card-title">{{item.title}}</span>\n      </div>\n      <div class="card-footer hidden-xs">\n        <div class="card-description">{{item.description}}</div>\n      </div>\n    </div>\n  </div>\n</span>\n'},function(e,t){e.exports='\n<div class="services-view">\n\n  <overlay-panel show-panel="$ctrl.orderingPanelvisible" show-close="true" handle-close="$ctrl.closeOrderingPanel">\n    <order-service service-class="$ctrl.serviceToOrder" handle-close="$ctrl.closeOrderingPanel"></order-service>\n  </overlay-panel>\n\n  <div ng-if="$ctrl.loading" class="spinner-container">\n    <div ng-class="{\'spinner spinner-xl\': $ctrl.loading}"></div>\n  </div>\n  <div ng-if="!$ctrl.loading" class="services-view-container">\n    <h1>Catalog</h1>\n\n    <div class="services-categories">\n      <a id="category-all" ng-class="{\'current-filter\': $ctrl.currentFilter === \'all\'}" ng-click="$ctrl.filterByCategory(\'all\', \'all\', true)">All</a> |\n      <span ng-repeat="category in $ctrl.categories">\n        <a id="{{\'category-\'+category.id}}" ng-class="{\'current-filter\': $ctrl.currentFilter === category.id}"\n           ng-click="$ctrl.filterByCategory(category.id, \'all\', true)">{{category.label}}</a>\n           {{$ctrl.categories.length !== ($index+1) ? \' | \' : \'\'}}\n      </span>\n    </div>\n\n    <div class="services-sub-categories">\n      <div ng-repeat="subCategory in $ctrl.subCategories"\n           id="{{\'sub-category-\'+subCategory.id}}"\n           class="sub-cat-card" ng-class="{\'active\': $ctrl.currentSubFilter === subCategory.id}">\n        <div class="inner-content" ng-click="$ctrl.toggleExpand(subCategory.id)">\n          <div class="sub-cat-icon {{subCategory.icon}}" ng-if="subCategory.icon"></div>\n          <div class="sub-cat-label">{{subCategory.label}}</div>\n        </div>\n        <div ng-if="$ctrl.currentSubFilter === subCategory.id || $ctrl.currentFilter === \'other\'"\n           class="card-expansion" ng-class="{\'other\': $ctrl.currentFilter === \'other\'}"\n           pf-card-view config="$ctrl.cardViewConfig" items="$ctrl.filteredItems">\n          <div class="card-container">\n            <div ng-if="!item.imageUrl" class="card-icon {{item.iconClass}}"></div>\n            <div ng-if="item.imageUrl" class="card-img"><img src="{{item.imageUrl}}"></div>\n            <div class="card-name">{{item.name}}</div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n'},function(e,t,n){"use strict";t.__esModule=!0;var r=n(1),i=n(12),s=n(3),o=n(0),a=function(){function LandingPageController(e,t,n,i){var a=this;this.ctrl=this,this.useScrollElement=!1,this.onScrollChange=function(e){a.useScrollElement?a.ctrl.showSnapDown=a.scrollElement.scrollTop>=a.snapElement.offsetTop:a.ctrl.showSnapDown=a.$window.pageYOffset>=a.snapElement.offsetTop,a.$scope.$apply()},this.setupScrolling=function(){a.scrollElement=a.getScrollParent(a.snapElement,null),a.useScrollElement=a.scrollElement&&null!==a.scrollElement.parentElement,a.debounceScroll=o.debounce(a.onScrollChange,250),a.debounceResize=o.debounce(a.onWindowResize,250),a.useScrollElement?r.element(a.scrollElement).scroll(a.debounceScroll):r.element(a.$window).bind("scroll",a.debounceScroll),r.element(a.$window).bind("resize",a.debounceResize),a.onWindowResize()},this.onWindowResize=function(){a.$window.innerWidth>s(window)[0].patternfly.pfBreakpoints.tablet?r.element(a.snapElement).css("min-height",a.$window.innerHeight+"px"):r.element(a.snapElement).css("min-height","0")},this.$scope=e,this.$element=t,this.$window=n,this.$timeout=i}return LandingPageController.prototype.$onInit=function(){this.ctrl.searchText="",this.scrollOptions={speed:1e3,minDuration:250,maxDuration:3e3,cancelOnUserAction:!0},this.ctrl.showSnapDown=!1},LandingPageController.prototype.$postLink=function(){this.snapElement=this.$element[0].querySelector(".landing-body-area"),r.element(this.snapElement).css("min-height",this.$window.innerHeight+"px"),this.$timeout(this.setupScrolling,100)},LandingPageController.prototype.$onDestroy=function(){this.useScrollElement||r.element(this.$window).unbind("scroll",this.debounceScroll),r.element(this.$window).unbind("resize",this.debounceResize)},LandingPageController.prototype.snapDown=function(e){this.useScrollElement?this.scrollElementTo(this.snapElement.offsetTop):i.default(this.snapElement.offsetTop,this.scrollOptions)},LandingPageController.prototype.snapUp=function(e){this.useScrollElement?this.scrollElementTo(0):i.default(0,this.scrollOptions)},LandingPageController.prototype.onSearchButtonClick=function(){r.isFunction(this.ctrl.doSearchFn)&&this.ctrl.doSearchFn(this.ctrl.searchText)},LandingPageController.prototype.$onChanges=function(e){},LandingPageController.prototype.$doCheck=function(){},LandingPageController.prototype.getScrollParent=function(e,t){return null===e?t:e.scrollHeight>e.clientHeight?this.getScrollParent(e.parentNode,e):this.getScrollParent(e.parentNode,t)},LandingPageController.prototype.scrollElementTo=function(e){var t=this,n=this.scrollElement.scrollTop,r=Math.abs(n-e)/2,i=0,s=performance.now(),o=e<n,a=function(n){var l,c;i+=Math.PI/(500/(n-s)),i>=Math.PI&&(t.scrollElement.scrollTop=e),t.scrollElement.scrollTop!==e&&(l=Math.round(r+r*Math.cos(i)),c=o?l:e-l,t.scrollElement.scrollTop=c,s=n,t.$window.requestAnimationFrame(a))};this.$window.requestAnimationFrame(a)},LandingPageController}();a.$inject=["$scope","$element","$window","$timeout"],t.LandingPageController=a},function(e,t,n){"use strict";t.__esModule=!0;var r=n(1),i=n(0);n(15),n(16),n(14),n(17);var s=function(){function OrderServiceController(e,t,n,r){this.ctrl=this,this.$scope=e,this.$filter=t,this.DataService=n,this.Logger=r}return OrderServiceController.prototype.$onInit=function(){this.ctrl.iconClass=this.ctrl.serviceClass.iconClass||"fa fa-cubes",this.ctrl.imageUrl=this.ctrl.serviceClass.imageUrl,this.ctrl.serviceName=this.ctrl.serviceClass.name,this.ctrl.description=this.ctrl.serviceClass.description,this.ctrl.longDescription=this.ctrl.serviceClass.longDescription,this.ctrl.plans=i.get(this,"ctrl.serviceClass.resource.plans",[]),this.ctrl.selectedPlan=i.first(this.ctrl.plans),this.ctrl.planIndex=0,this.ctrl.steps=[{id:"plans",label:"Plans",view:"components/order-service/order-service-plans.html"},{label:"Configuration",id:"configure",view:"components/order-service/order-service-configure.html"},{label:"Results",id:"results",view:"components/order-service/order-service-review.html"}],this.ctrl.plans.length<2&&this.ctrl.steps.shift(),this.gotoStep(this.ctrl.steps[0]),this.listProjects(),this.ctrl.wizardReady=!0},OrderServiceController.prototype.getSteps=function(){return this.ctrl.steps},OrderServiceController.prototype.stepClick=function(e){this.ctrl.orderComplete||e.visited&&this.gotoStep(e)},OrderServiceController.prototype.gotoStep=function(e){this.ctrl.steps.forEach(function(e){return e.selected=!1}),this.ctrl.currentStep&&(this.ctrl.currentStep.visited=!0),this.ctrl.currentStep=e,this.ctrl.currentStep.selected=!0,this.currentStepIndex=i.findIndex(this.ctrl.steps,"selected")},OrderServiceController.prototype.previousStep=function(){var e=this.ctrl.steps[this.currentStepIndex-1];this.gotoStep(e)},OrderServiceController.prototype.nextStep=function(){var e=this.ctrl.steps[this.currentStepIndex+1];this.gotoStep(e)},OrderServiceController.prototype.selectPlan=function(e){this.ctrl.selectedPlan=e},OrderServiceController.prototype.provisionService=function(){var e=this,t=this.makeServiceInstance();this.DataService.create({group:"servicecatalog.k8s.io",resource:"instances"},null,t,{namespace:this.ctrl.selectedProject.metadata.name}).then(function(){e.ctrl.orderComplete=!0,e.ctrl.error=null,e.gotoStepID("results")},function(t){e.ctrl.error=t})},OrderServiceController.prototype.$onChanges=function(e){},OrderServiceController.prototype.$doCheck=function(){},OrderServiceController.prototype.closePanel=function(){r.isFunction(this.ctrl.handleClose)&&this.ctrl.handleClose()},OrderServiceController.prototype.listProjects=function(){var e=this;this.DataService.list("projects",this.$scope).then(function(t){e.ctrl.projects=i.sortBy(t.by("metadata.name"),e.$filter("displayName")),e.ctrl.selectedProject=i.first(e.ctrl.projects)})},OrderServiceController.prototype.makeServiceInstance=function(){var e=i.get(this,"ctrl.serviceClass.resource.metadata.name");return{kind:"Instance",apiVersion:"servicecatalog.k8s.io/v1alpha1",metadata:{namespace:this.ctrl.selectedProject.metadata.name,generateName:e+"-"},spec:{serviceClassName:e,planName:this.ctrl.selectedPlan.name}}},OrderServiceController.prototype.gotoStepID=function(e){var t=i.find(this.ctrl.steps,{id:e});this.gotoStep(t)},OrderServiceController}();s.$inject=["$scope","$filter","DataService","Logger"],t.OrderServiceController=s},function(e,t,n){"use strict";t.__esModule=!0;var r=n(1),i=function(){function OverlayPanelController(e,t){var n=this;this.ctrl=this,this.closePanel=function(){r.isFunction(n.ctrl.handleClose)&&n.ctrl.handleClose()},this.showDialog=function(){n.ctrl.shown=!0,n.ctrl.showBackdrop=!0,n.$timeout(function(){n.ctrl.showOverlayPanel=!0},500)},this.hideDialog=function(){n.ctrl.shown=!1,n.$timeout(function(){n.ctrl.showBackdrop=!1,n.ctrl.showOverlayPanel=!1},500)},this.$element=e,this.$timeout=t,this.ctrl.showOverlayPanel=!1,this.ctrl.showBackdrop=!1,this.ctrl.shown=!1}return OverlayPanelController.prototype.$postLink=function(){this.ctrl.showPanel&&this.showDialog()},OverlayPanelController.prototype.$onChanges=function(e){e.showPanel&&(this.ctrl.showPanel?this.showDialog():this.hideDialog())},OverlayPanelController}();i.$inject=["$element","$timeout"],t.OverlayPanelController=i},function(e,t,n){"use strict";t.__esModule=!0;var r=n(0),i=function(){function ProjectsSummaryController(e,t,n,i,s,o,a,l){var c=this;this.ctrl=this,this.showNewProjectPanel=!1,this.showEditwProjectPanel=!1,this.alerts=[],this.projects=[],this.watches=[],this.maxDisplayProjects=5,this.onVerifyUser=function(){c.ctrl.loading=!0,c.watches.push(c.DataService.watch("projects",c.$scope,c.onProjectsUpdate)),c.AlertMessageService.getAlerts().forEach(function(e){this.ctrl.alerts[e.name]=e.data})},this.onProjectsUpdate=function(e){var t=r.toArray(e.by("metadata.creationTimestamp")),n=c.$filter("orderObjectsByDate");c.ctrl.projects=n(t,!0),c.ctrl.totalProjects=c.ctrl.projects.length,c.ctrl.projects=r.take(c.ctrl.projects,c.maxDisplayProjects),c.ctrl.loading=!1,c.ctrl.showGetStarted=r.isEmpty(c.ctrl.projects)},this.closeNewProjectPanel=function(){c.ctrl.showNewProjectPanel=!1},this.onNewProject=function(e){c.ctrl.showNewProjectPanel=!1},this.editProject=function(e){c.ctrl.edittingProject=e,c.ctrl.showEditProjectPanel=!0},this.closeEditProjectPanel=function(){c.ctrl.showEditProjectPanel=!1},this.onEditProject=function(e){c.ctrl.showEditProjectPanel=!1},this.$element=e,this.$scope=t,this.$filter=n,this.ProjectsService=i,this.Logger=s,this.AuthService=o,this.DataService=a,this.AlertMessageService=l}return ProjectsSummaryController.prototype.$onInit=function(){var e=this;this.ProjectsService.canCreate().then(function(){e.ctrl.canCreate=!0},function(t){e.ctrl.canCreate=!1;var n=t.data||{};if(403!==t.status){var i="Failed to determine create project permission";return 0!==t.status&&(i+=" ("+t.status+")"),void e.Logger.warn(i)}if(n.details){var s=[];r.forEach(n.details.causes||[],function(e){e.message&&s.push(e.message)}),s.length>0&&(e.ctrl.newProjectMessage=s.join("\n"))}}),this.AuthService.withUser().then(this.onVerifyUser)},ProjectsSummaryController.prototype.openNewProjectPanel=function(){this.ctrl.showNewProjectPanel=!0},ProjectsSummaryController.prototype.handleProjectClick=function(e){var t=this.ctrl.projectSelect();t&&t(e)},ProjectsSummaryController.prototype.showAllProjects=function(){var e=this.ctrl.showProjects();e&&e()},ProjectsSummaryController}();i.$inject=["$element","$scope","$filter","ProjectsService","Logger","AuthService","DataService","AlertMessageService"],t.ProjectsSummaryController=i},function(e,t,n){"use strict";t.__esModule=!0;var r=n(0),i=function(){function SaasListController(){this.ctrl=this,this.cardViewConfig={selectItems:!1,showSelectBox:!1,onClick:this.handleClick}}return SaasListController.prototype.hasSaasOfferings=function(){return!r.isEmpty(this.ctrl.saasOfferings)},SaasListController.prototype.handleClick=function(e,t){window.open(e.url,"_blank")},SaasListController.prototype.$onChanges=function(e){e.saasOfferings&&!e.saasOfferings.isFirstChange()&&(this.ctrl.saasOfferings=e.saasOfferings.currentValue)},SaasListController}();t.SaasListController=i},function(e,t,n){"use strict";t.__esModule=!0;var r=n(1),i=n(0),s=n(3),o=function(){function ServicesViewController(e,t,n,r,s){var o=this;this.ctrl=this,this.serviceClassesLoaded=!1,this.imageStreamsLoaded=!1,this.handleClick=function(e,t){o.ctrl.serviceToOrder=e,o.ctrl.openOrderingPanel()},this.closeOrderingPanel=function(){o.ctrl.orderingPanelvisible=!1},this.normalizeData=function(e,t){var n,r=[];return i.each(t,function(t){"service"===e?n=o.catalog.getServiceItem(t):"image"===e&&(n=o.catalog.getImageItem(t)),n&&r.push(n)}),r},this.cardViewConfig={selectItems:!1,showSelectBox:!1,onClick:this.handleClick},this.constants=e,this.catalog=t,this.$filter=n,this.$scope=r,this.$timeout=s,this.ctrl.loading=!0}return ServicesViewController.prototype.$onInit=function(){var e=this;this.ctrl.allItems=[],this.ctrl.currentFilter="all",this.ctrl.currentSubFilter=null,this.ctrl.orderingPanelvisible=!1,this.updateAll(),this.$scope.$on("cancelOrder",function(){e.ctrl.closeOrderingPanel()}),this.debounceResize=i.debounce(this.resizeExpansion,50,{maxWait:250}),r.element(window).bind("resize",this.debounceResize),s(window).on("resize.services",this.debounceResize)},ServicesViewController.prototype.$onChanges=function(e){e.serviceClasses&&!e.serviceClasses.isFirstChange()&&(this.ctrl.serviceClasses=e.serviceClasses.currentValue,this.serviceClassesLoaded=!0,this.updateServiceClasses()),e.imageStreams&&!e.imageStreams.isFirstChange()&&(this.ctrl.imageStreams=e.imageStreams.currentValue,this.imageStreamsLoaded=!0,this.updateImageStreams())},ServicesViewController.prototype.$onDestroy=function(){s(window).off("resize.services")},ServicesViewController.prototype.filterByCategory=function(e,t,n){var r=this;this.ctrl.filteredItems="all"===e&&"all"===t?this.ctrl.allItems:i.filter(this.ctrl.allItems,function(n){return"all"!==e&&"all"===t?r.catalog.hasCategory(n,e):"all"===e&&"all"!==t?r.catalog.hasSubCategory(n,t):r.catalog.hasCategory(n,e)&&r.catalog.hasSubCategory(n,t)}),n&&(this.ctrl.subCategories=this.getSubCategories(e)),this.ctrl.currentFilter=e,this.ctrl.currentSubFilter=t||"all",this.updateActiveCardStyles()},ServicesViewController.prototype.toggleExpand=function(e){this.ctrl.currentSubFilter===e?(this.ctrl.currentSubFilter=null,this.updateActiveCardStyles()):this.filterByCategory(this.ctrl.currentFilter,e,!1)},ServicesViewController.prototype.getSubCategories=function(e){var t="other"!==e?[{id:"all",label:"All"}]:[];return this.ctrl.categories.map(function(n){"all"!==e&&e!==n.id||(t=t.concat(n.subCategories))}),t},ServicesViewController.prototype.openOrderingPanel=function(){this.ctrl.orderingPanelvisible=!0},ServicesViewController.prototype.updateAll=function(){this.updateServiceClasses(),this.updateImageStreams()},ServicesViewController.prototype.updateState=function(){this.ctrl.loading=i.isEmpty(this.ctrl.serviceClasses)&&!this.serviceClassesLoaded||i.isEmpty(this.ctrl.imageStreams)&&!this.imageStreamsLoaded,this.ctrl.loading||(this.ctrl.filteredItems=this.ctrl.allItems,this.ctrl.categories=this.catalog.removeEmptyCategories(this.ctrl.filteredItems),this.ctrl.subCategories=this.getSubCategories("all"))},ServicesViewController.prototype.updateServiceClasses=function(){this.ctrl.allItems=this.ctrl.allItems.concat(this.normalizeData("service",this.ctrl.serviceClasses)),this.updateState()},ServicesViewController.prototype.updateImageStreams=function(){this.ctrl.allItems=this.ctrl.allItems.concat(this.normalizeData("image",this.ctrl.imageStreams)),this.updateState()},ServicesViewController.prototype.resizeExpansion=function(){var e=s(".sub-cat-card.active"),t=e.find(".card-view-pf").outerHeight();e.css("margin-bottom",t+"px")},ServicesViewController.prototype.updateActiveCardStyles=function(){s(".sub-cat-card").css("margin-bottom",""),this.$timeout(this.resizeExpansion,50)},ServicesViewController}();o.$inject=["Constants","Catalog","$filter","$scope","$timeout"],t.ServicesViewController=o},function(e,t,n){"use strict";t.__esModule=!0;var r=n(1);n(2),n(10);var i=n(4),s=n(5),o=n(6),a=n(7),l=n(8),c=n(9),d=n(11);n(2),t.webCatalog="webCatalog",r.module(t.webCatalog,["patternfly","ngAnimate","ui.bootstrap"]).service("Catalog",d.CatalogService).component("landingPage",i.landingPage).component("orderService",s.orderService).component("overlayPanel",o.overlayPanel).component("projectsSummary",a.projectsSummary).component("saasList",l.saasList).component("servicesView",c.servicesView)}],[29]);