import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-img-flowly',
  template: `<svg
    [attr.width]="width"
    [attr.height]="height"
    viewBox="0 0 65 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M59.0569 7.7791V15.0653C59.0569 15.598 58.9291 16.088 58.6947 16.4928C58.4604 16.8976 58.1408 17.2384 57.736 17.4728C57.3525 17.6858 56.6495 17.7924 56.2234 17.7924C55.4351 17.7924 54.8386 17.4941 54.3485 17.0467C53.3685 16.1519 52.6016 6.61991 52.3672 5.66119C52.0689 4.48943 51.5789 3.61593 50.8972 3.0407C50.2154 2.44416 49.3632 2.1459 48.298 2.1459C47.2327 2.1459 46.4019 2.44416 45.6988 3.0407C44.9957 3.63723 44.5057 4.53203 44.1862 5.7251L42.2687 17.6219L40.5217 10.8257C40.2235 9.65392 39.7335 8.78042 39.0517 8.20519C38.3699 7.60866 37.5178 7.31039 36.4525 7.31039C35.3873 7.31039 34.5564 7.60866 33.8533 8.20519C33.1503 8.80173 32.6603 9.69653 32.3407 10.8896L30.6363 17.4515L29.7628 13.574C29.5924 12.7431 29.2941 11.9761 28.8467 11.2518C28.1223 10.0587 27.1423 9.1 25.8853 8.39694C24.6497 7.67258 23.2648 7.3317 21.7096 7.3317C20.5804 7.3317 19.5365 7.52344 18.5565 7.90693C18.6417 4.13598 16.1703 1.02548 12.3355 0.215897C8.52192 -0.593686 5.28359 0.89765 3.43007 4.28511C2.87615 5.32905 2.57788 6.54342 2.53527 7.8004H0V12.2744H2.53527V22.7138H7.90408V12.2744H11.3128V7.8004H7.92539C7.92539 6.99082 8.26626 6.4369 8.73497 5.9895C9.22498 5.52079 10.418 4.86034 11.6963 5.41427C13.5712 6.22385 13.5925 7.7578 13.5925 11.2518C13.5925 11.2518 13.5925 15.1293 13.5925 15.2145C13.5925 16.6632 13.9546 18.0054 14.6577 19.2198C15.4034 20.4128 16.3834 21.3716 17.6191 22.0746C18.0452 22.3303 18.4926 22.5007 18.9613 22.6712C19.8348 22.9694 20.7722 23.1399 21.7735 23.1399C23.3288 23.1399 24.7136 22.7777 25.9492 22.0746C26.354 21.8403 26.6949 21.542 27.0358 21.265C27.121 21.3929 27.1849 21.5207 27.2701 21.6272C27.7389 22.1385 28.2928 22.522 28.9106 22.799C29.5285 23.0546 30.125 23.1825 30.7215 23.1825C31.6589 23.1825 32.4898 22.8842 33.2355 22.2877C33.9812 21.6911 34.4925 20.7963 34.7907 19.6033L36.4738 12.9775L38.1782 19.6033C38.4765 20.7963 38.9878 21.6911 39.6908 22.2877C40.4365 22.8842 41.2674 23.1825 42.2048 23.1825C42.8013 23.1825 43.3979 23.0546 44.0157 22.799C44.6336 22.5433 45.1875 22.1598 45.6562 21.6272C46.0823 21.1585 46.3592 20.562 46.551 19.8802L48.3193 7.81297C48.3193 7.81297 49.4271 17.835 50.045 19.2198C50.5563 20.3702 51.2593 21.2011 52.3033 21.8616C53.3472 22.522 54.1568 22.8416 55.8399 22.8416C56.6069 22.8416 57.2886 22.7351 57.8425 22.5433C58.3538 22.3729 58.7799 22.0746 59.1421 21.6911C59.0995 22.309 58.993 22.8842 58.7586 23.3316C58.4817 23.9068 58.0982 24.3542 57.5869 24.6525C57.0969 24.9721 56.5003 25.1212 55.7973 25.1212C54.8812 25.1212 54.1568 24.9082 53.6242 24.4608C53.1129 24.0134 52.7294 23.566 52.495 23.0546L48.0423 25.4408C48.7454 26.8895 49.7254 28.0187 51.025 28.8069C52.3459 29.5952 53.9651 30 55.8825 30C57.523 30 59.0143 29.6378 60.2926 28.9348C61.6135 28.2104 62.6361 27.2091 63.4031 25.8882C64.1488 24.5673 64.5322 23.0333 64.5322 21.2437V7.7791H59.0782H59.0569ZM24.2236 16.7058C23.9892 17.1532 23.6483 17.4941 23.2435 17.7497C22.8387 18.0054 22.3274 18.1332 21.7522 18.1332C21.177 18.1332 20.7083 18.0054 20.2609 17.7497C19.8348 17.4941 19.5152 17.1532 19.2808 16.7058C19.0678 16.301 18.9613 15.8749 18.94 15.4062V15.1506C18.94 14.6605 19.0678 14.2131 19.2808 13.8297C19.5152 13.3823 19.8561 13.0414 20.2609 12.7857C20.7083 12.5301 21.1983 12.4022 21.7522 12.4022C22.3061 12.4022 22.8174 12.5301 23.2435 12.7857C23.6696 13.0414 23.9892 13.3823 24.2236 13.8297C24.4579 14.2771 24.5857 14.7458 24.5857 15.2997C24.5857 15.8536 24.4579 16.301 24.2236 16.7271V16.7058Z"
      [attr.fill]="fill"
    />
  </svg>`,
})
export class ImgFlowlyComponent {
  @Input()
  fill = '#B1CC29';

  @Input()
  width = '65';

  @Input()
  height = '30';
}
