
export class HomePageController {
  static $inject = ['$rootScope', '$state', '$timeout', 'AlertMessageService', 'AuthService', 'Catalog', 'Constants',
    'GuidedTourService', 'NotificationsService'];

  public ctrl: any = this;
  private $rootScope: any;
  private $state: any;
  private $timeout: any;
  private AlertMessageService: any;
  private authService: any;
  private Catalog: any;
  private GuidedTourService: any;
  private constants: any;
  private tourConfig: any;
  private NotificationsService: any;

  constructor($rootScope: any, $state: any, $timeout: any, AlertMessageService: any, AuthService: any, Catalog: any,
              Constants: any, GuidedTourService: any, NotificationsService: any) {
    this.$rootScope = $rootScope;
    this.$state = $state;
    this.$timeout = $timeout;
    this.AlertMessageService = AlertMessageService;
    this.authService = AuthService;
    this.Catalog = Catalog;
    this.GuidedTourService = GuidedTourService;
    this.constants = Constants;
    this.NotificationsService = NotificationsService;
  };

  public $onInit() {
    this.tourConfig = _.get(this.constants, 'GUIDED_TOURS.landing_page_tour');

    // Assume a development environment for the console. Remove the trailing slash if set.
    let consoleBaseUrl = _.get(window, 'OPENSHIFT_CONSOLE_BASE_URL', 'https://localhost:9000/dev-console').replace(/\/$/, '');
    this.ctrl.baseProjectUrl = consoleBaseUrl + "/project";
    this.ctrl.projectsUrl = consoleBaseUrl + "/projects";
    this.authService.withUser().then(() => {
      this.update();
    });
  };

  public update() {
    this.Catalog.getCatalogItems(false).then( _.spread((catalogServiceItems: any, errorMessage: any) => {
      this.ctrl.catalogItems = catalogServiceItems;

      if (errorMessage) {
        let alert = {
          name: 'error-loading-catalog-items',
          data: {
            type: "warning",
            message: errorMessage
          }
        };
        this.AlertMessageService.addAlert(alert);
        this.NotificationsService.addNotification(alert.data);
      }

      if (_.get(this, 'tourConfig.auto_launch')) {
        // Check if this is the first time this user has visited the home page, if so launch the tour
        var viewedHomePageKey: string = "openshift/viewedHomePage/" + this.$rootScope.user.metadata.name;
        if (localStorage.getItem(viewedHomePageKey) !== 'true') {
          this.$timeout(() => {
            localStorage.setItem(viewedHomePageKey, 'true');
            this.startGuidedTour();
          }, 500);
        }
      }
    }), () => {
      this.ctrl.catalogItems = {};
    });

    this.ctrl.saasOfferings = this.constants.SAAS_OFFERINGS;
  };

  public startGuidedTour = () => {
    if (this.tourConfig && this.tourConfig.enabled && this.tourConfig.steps) {
      this.GuidedTourService.startTour(this.tourConfig.steps);
    }
  };
}
