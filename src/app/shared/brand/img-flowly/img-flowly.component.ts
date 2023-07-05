import { Component, Input } from '@angular/core';
import { LogoType } from './img-flowly';

@Component({
  selector: 'app-img-flowly',
  template: `<svg
    [attr.width]="logoType === 'ICON'? height: width"
    [attr.height]="height"
    [attr.viewBox]="logoType === 'ICON'? '0 0 30 30': '0 0 84 30'"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    [ngSwitch]="logoType"
  >
    <g *ngSwitchCase="'DEFAULT'" >
      <path 
        d="M27.7928 6.25C23.2382 6.25 19.7647 9.92148 19.7647 14.3585C19.7647 18.7956 23.2382 22.5 27.7928 22.5C32.3474 22.5 35.8235 18.8285 35.8235 14.3585C35.8235 9.88855 32.35 6.25 27.7928 6.25ZM27.7928 17.3276C26.1306 17.3276 25.0208 15.983 25.0208 14.3915C25.0208 12.7999 26.1306 11.4225 27.7928 11.4225C29.455 11.4225 30.5674 12.767 30.5674 14.3915C30.5674 16.0159 29.4576 17.3276 27.7928 17.3276Z" 
        [attr.fill]="fill"
      />
      <path 
        d="M78.5579 7.5V14.8745C78.5579 16.5352 77.606 17.6541 76.2968 17.6541C74.721 17.6541 74.3024 16.5352 74.3024 14.8745V7.5H69.039V14.9937C69.039 19.5262 70.5561 22.761 75.5822 22.761C77.0408 22.761 77.8753 22.398 78.6459 21.5825C78.4993 23.7878 76.5075 25.3943 74.5744 25.3943C73.2438 25.3943 72.3079 25.2535 71.3907 24.8688L66.7059 27.9247C68.7803 29.1927 71.5427 30 74.3077 30C79.2432 30 84 26.5999 84 21.1598V7.5H78.5579Z" 
        [attr.fill]="fill"
      />
      <path 
        d="M18.539 16.6629L18.4945 6.2639C18.4945 1.6421 13.4291 0.364306 13.4291 0.364306C12.1464 0.0598115 10.8899 0 9.89777 0C5.37165 0 2.59682 3.39566 2.48164 7.33778H0V11.8862H2.48164V22.5H7.73549V11.8862H11.0653V7.33778H7.73549C7.73549 5.67122 8.58365 4.66802 10.8323 4.66802H10.8349C11.0313 4.66802 11.2302 4.68977 11.4213 4.74142C12.2538 4.96707 13.2852 5.61956 13.2852 7.471V17.6498C13.403 19.001 13.9396 21.4778 16.2249 22.5H22.2353C18.6149 20.2054 18.539 17.1632 18.539 16.6629Z" 
        [attr.fill]="fill"
      />
      <path 
        d="M67.3 17.9814L67.2791 7.26827C67.2791 3.94332 64.7047 1.25 61.5267 1.25C59.645 1.25 58.1474 2.3574 57.1543 3.97066C57.0994 4.06089 57.0445 4.15386 56.9922 4.24956V4.25503C56.7962 4.60229 56.6577 4.97963 56.5767 5.37064L54.1749 17.1337L52.5153 10.3936C51.9325 7.98193 50.5917 6.79249 48.5506 6.79249C46.5094 6.79249 45.1399 8.01474 44.5284 10.4538L42.8662 17.1638L41.3764 10.2487C41.1804 9.48034 40.4304 7.28194 38.2324 7.28194H33.3529C33.3529 7.28194 33.4993 7.3503 33.7345 7.49248C35.3418 8.4577 36.4787 10.0956 36.9047 11.9823L38.5774 19.3595C39.1314 21.8614 41.1726 23.018 42.921 23.018C44.7583 23.018 46.3029 21.7985 46.8858 19.3595L48.5192 12.5893L50.1788 19.3595C50.7642 21.7985 52.2774 23.018 54.1147 23.018C55.9521 23.018 57.9331 21.8614 58.4584 19.3595L61.0589 7.0003C61.1373 6.85812 61.2941 6.71866 61.5241 6.71866C61.8168 6.71866 62.052 6.96475 62.0598 7.26827L62.0494 17.7079C62.0494 19.622 62.3578 21.2134 62.7995 22.5176C63.0451 23.2395 63.33 23.8739 63.628 24.4235C64.0487 25.2 64.493 25.8016 64.8746 26.25L69.1765 23.3625C67.7782 21.8942 67.3888 19.5646 67.2973 17.9814H67.3Z" 
        [attr.fill]="fill"
      />
    </g>
    <path 
      *ngSwitchCase="'ICON'"
      fill-rule="evenodd" 
      clip-rule="evenodd" 
      d="M5 0C2.23858 0 0 2.23858 0 5V25C0 27.7614 2.23858 30 5 30H25C27.7614 30 30 27.7614 30 25V5C30 2.23858 27.7614 0 25 0H5ZM12.1504 8.46805C12.0915 7.7029 11.9001 6.95037 11.5823 6.23963C11.1943 5.37188 10.6256 4.58342 9.90862 3.91928C9.19168 3.25513 8.34055 2.7283 7.40382 2.36886C6.75542 2.12006 5.589 1.95484 4.93238 1.87671C4.67307 1.84585 4.44922 2.0497 4.44922 2.31083V5.25985C4.44922 5.88361 4.94739 6.33664 5.52976 6.56011C5.87233 6.69156 6.1836 6.88423 6.4458 7.12711C6.70799 7.37 6.91597 7.65835 7.05787 7.9757C7.18654 8.26347 7.25859 8.56997 7.2709 8.88072V15.0252C7.27092 18.8984 10.6604 22.0382 14.8414 22.0382C15.7886 22.0382 16.6952 21.8771 17.531 21.5828C17.5943 22.3304 17.7842 23.0654 18.095 23.7604C18.483 24.6281 19.0517 25.4166 19.7687 26.0807C20.4856 26.7449 21.3367 27.2717 22.2735 27.6311C22.9219 27.8799 24.0883 28.0452 24.7449 28.1233C25.0042 28.1542 25.2281 27.9503 25.2281 27.6892V24.7402C25.2281 24.1164 24.7299 23.6634 24.1475 23.4399C23.8049 23.3085 23.4937 23.1158 23.2315 22.8729C22.9693 22.63 22.7613 22.3417 22.6194 22.0243C22.4909 21.7369 22.4189 21.4309 22.4064 21.1205V15.2962C22.4101 15.2063 22.412 15.1159 22.412 15.0252C22.412 11.1519 19.0225 8.01207 14.8414 8.01207C13.8937 8.01207 12.9866 8.17341 12.1504 8.46805ZM14.8414 17.5041C13.3635 17.5041 12.1654 16.3943 12.1654 15.0252C12.1654 13.656 13.3635 12.5462 14.8414 12.5462C16.3194 12.5462 17.5175 13.656 17.5175 15.0252C17.5175 16.3943 16.3194 17.5041 14.8414 17.5041Z" 
      [attr.fill]="fill"
    />

  </svg>`,
})
export class ImgFlowlyComponent {
  @Input()
  logoType: LogoType = "DEFAULT";

  @Input()
  fill = '#B1CC29';

  @Input()
  width = '84';

  @Input()
  height = '30';
}