import { useTheme } from "utils/hooks/use-theme.hook";

const GenevaMap = () => {
  const { theme } = useTheme();
  const mapBackgroundColor = theme === "dark" ? "#7D6D89" : "#E9CEFD";
  const mapTextColor = theme === "dark" ? "#FFF" : "#544360";

  return (
    <svg
      width="280"
      viewBox="0 0 782 502"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_5_362)">
        <path
          d="M640.105 207.48C648.325 210.14 700.285 240.04 695.725 214.44C697.585 214.8 700.325 213.72 702.165 214.1C702.305 210.02 701.145 206.18 699.085 203.16C701.965 203.64 710.685 209.66 713.725 207.32C717.785 204.2 712.885 198.9 710.425 197.58C712.445 197.46 715.265 195.9 718.005 196C717.785 194.1 718.725 191.42 718.345 189.56C721.905 190 732.865 200.12 735.185 202.96C742.545 211.98 736.645 211.46 734.245 221.04C733.125 225.54 734.605 230.22 733.165 234.68C731.845 238.74 727.625 241.34 726.345 245.12C724.965 249.2 728.265 251.2 726.985 254.8C725.865 257.96 720.625 260.06 720.145 263.8C718.605 275.98 730.045 268.22 736.265 273.36C743.065 278.96 740.545 291.58 734.285 294.92C729.265 297.6 716.165 296.38 711.625 294.36C713.805 295.34 702.905 285.3 704.525 287.9C702.225 284.2 700.285 282.02 701.005 276.7C686.445 274.8 675.365 289.52 670.625 301.36C668.385 306.92 663.145 318.6 668.345 322.7C672.105 325.66 688.125 322.84 693.105 323.1C693.685 324.98 693.665 328.78 693.085 330.66C680.025 334.62 675.725 344.16 683.105 354.62C686.105 358.88 693.305 361.04 690.805 367.98C688.965 373.04 678.565 374.7 674.225 373.7C674.105 369.74 673.985 365.56 673.885 361.58C653.285 361 666.825 341.56 654.825 337.62C643.205 333.8 637.445 352.32 625.565 353.34C625.565 352 625.245 350.48 625.205 349.16C622.465 347.68 618.565 347.2 615.405 348.02C612.605 352.62 614.005 357.24 619.525 358.2C619.525 358.2 619.685 361.44 619.545 361.24C593.285 365.58 577.405 344.96 575.585 322.92C574.765 313.02 577.645 311.74 568.985 312.74C567.365 312.92 568.345 318.92 564.265 318.44C560.325 317.98 561.645 313.9 558.865 312.48C553.145 309.56 553.905 306.38 545.885 313.58C541.565 317.46 538.305 322.72 538.405 328.4C548.105 327.38 546.905 350.72 545.045 358C542.465 368.12 532.805 376.16 530.145 387.26C510.825 388.2 509.025 381.14 511.065 363.66C512.665 350.04 513.985 336.52 513.125 321.98C510.745 321.64 509.105 319.66 506.725 319.32C506.825 313.8 504.585 309.82 504.325 304.74C504.105 300.46 506.345 295.14 505.385 290.08C503.585 280.56 491.345 277.26 482.945 276.7C476.085 290.34 480.785 292.7 463.565 290.02C450.485 287.98 442.325 291.38 429.565 290.08C411.705 288.26 415.685 295.96 404.445 306.78C397.405 313.56 397.845 311.06 394.485 319.52C391.865 326.1 393.105 332.88 383.345 334.4C384.545 337.22 385.265 341.6 384.385 344.24C384.065 345.22 379.805 343.68 378.825 345.46C377.945 347.06 379.825 351.18 378.425 352.36C372.105 357.74 365.345 357.42 358.005 362.46C356.745 363.32 351.485 368.28 350.385 369.34C347.185 372.44 341.725 366.84 344.645 375.02C347.065 381.82 362.725 378.54 359.445 391.96C357.985 397.92 348.105 401.04 344.705 406.64C340.685 413.3 342.865 422.38 334.585 427.32C326.265 432.28 319.385 424.32 312.985 432.7C307.225 440.28 313.945 448.2 312.845 456.26C298.005 458.58 286.565 443.94 274.565 439.14C261.185 433.8 240.505 441.36 235.865 455.1C227.345 456.38 204.845 445.92 205.325 463.04C190.205 466.34 182.425 456.88 178.085 445.1C174.145 434.38 160.105 424.54 160.065 413.58C156.205 415.1 154.525 417.2 150.225 417.76C149.205 411.82 155.305 400.6 151.525 396.1C145.465 388.88 135.045 399.22 134.165 385.12C133.705 377.58 141.205 371.2 139.865 362.48C138.665 354.62 131.345 349.62 133.245 341.14C140.425 340.82 154.625 345.06 160.545 341.28C168.445 336.24 166.865 327.44 161.125 321.98C156.105 317.22 144.185 315.18 137.605 313.78C127.525 311.64 119.865 310.2 110.505 304.5C101.625 299.1 97.8853 294.48 88.0653 300.54C80.0053 305.5 81.0453 310.12 70.8453 312.94C53.3253 317.76 48.9453 330.6 40.2853 346.66C37.3253 352.16 36.3253 355.62 34.6253 361.34C33.1453 366.36 29.2453 374.06 30.2653 379.28C44.0653 383.04 40.0653 363.34 44.8053 357.78C44.9253 359.68 46.4653 363.82 46.1053 366.82C68.3653 362.86 48.8653 388.84 40.2253 392.8C33.0453 396.08 29.1853 391.46 22.4653 390.48C15.6453 389.48 11.2053 392.78 3.12527 391.72C3.80527 389.14 7.86527 384.42 7.58527 381.72C7.20527 378.38 0.905273 376.4 0.905273 372.46C0.945273 362.4 14.1853 366.14 21.9653 365.76C23.1453 359.4 25.6853 353.7 26.6853 347.76C28.1453 339.04 25.3453 339.08 22.4453 331.7C15.2853 313.5 32.8653 313.22 35.7453 299.16C37.7853 289.16 30.3053 288.12 39.2053 278.46C43.4853 273.8 48.7053 270.28 53.5853 266.06C62.0653 258.72 95.1453 249.4 77.5253 234.64C83.2653 226.94 81.8853 222.2 83.0453 213.4C84.3853 203.2 84.5053 205.04 94.6053 201.88C101.985 199.58 109.225 197.78 114.705 191.42C120.505 184.68 119.185 179.52 129.525 179.02C130.585 174.72 129.325 170.08 127.565 166.94C132.085 165.42 133.465 162.02 137.605 159.96C143.765 156.9 145.385 160.38 150.045 154.3C152.845 150.64 151.905 145.84 155.405 141.56C158.965 137.2 165.265 135.24 168.125 131.62C170.845 128.18 172.225 124.08 175.205 120.58C177.545 117.84 185.845 116.48 182.925 108.96C177.965 96.12 161.645 108.58 153.625 106.58C152.345 99.14 160.085 96.26 165.045 92.32C167.245 90.58 171.485 87.68 172.925 85.54C175.405 81.82 174.025 78.94 176.065 75.06C181.705 64.42 179.245 70.48 188.745 73.64C195.305 75.82 206.045 72.32 210.165 78.48C203.045 80.92 203.405 85.78 208.905 88.88C214.825 92.22 221.065 87.4 226.765 87.72C232.605 88.06 235.385 94.14 241.445 88.34C245.725 84.24 243.865 76.2 244.165 70.66C253.665 75.04 261.645 80.26 260.805 62.76C250.445 62.38 258.005 55.88 263.245 53.78C269.125 51.42 275.565 56.04 278.165 49.2C283.665 49.2 285.705 55.76 280.425 58.24C279.785 60.42 279.765 64.74 280.425 66.9C297.385 75.04 300.345 50.74 314.185 51.26C320.425 51.5 325.885 56.82 334.565 56.92C341.165 56.98 352.205 59.06 358.385 56.98C363.825 55.14 366.385 47.28 371.885 46.7C378.585 46 382.045 54.88 386.905 58.9C401.785 71.24 414.705 63.24 415.085 45.78C423.465 43.84 426.905 50.54 433.965 51.06C437.645 44.22 438.205 35.38 429.885 32.9C421.205 30.32 420.865 40.88 410.405 37.68C399.185 34.26 404.265 24.26 411.305 17.26C417.705 10.9 422.805 10.54 431.725 10.36C431.205 7.36001 432.585 3.52001 432.065 0.520012C443.165 -2.47999 438.605 8.06001 437.725 13.76C443.205 15.46 447.685 13.22 448.025 7.22001C450.825 12.28 454.725 18.96 452.445 25.06C456.065 26.5 461.525 35.78 465.905 34.36C472.325 32.28 467.865 22.94 465.985 19.78C468.465 20.58 473.625 23.36 474.925 26.4C476.785 30.76 471.745 34.36 473.745 37.74C479.345 47.28 488.985 35.1 496.405 33.12C504.825 30.88 514.225 35.38 520.985 39.12C528.885 43.48 539.465 46.88 546.445 51.04C554.485 55.82 553.785 64.94 562.045 69.7C570.165 74.38 581.065 69.28 588.885 73.1C595.845 76.5 600.765 84.72 601.645 92.02C603.185 104.78 594.285 107.36 587.185 114.96C580.165 122.48 580.365 133.12 578.725 144.08C577.625 151.56 583.045 169.98 575.805 172.58C575.425 174.32 575.545 176.12 575.785 177.88C587.105 178.46 599.445 176.4 610.705 178.06C616.945 178.98 621.445 183.16 626.865 185.9C630.745 187.86 632.665 188.6 636.625 186.72C642.025 184.16 642.045 190.18 641.485 194.14C640.925 198.1 639.525 202.24 636.745 205.22"
          fill={mapBackgroundColor}
        />
        <path
          d="M32.9053 326C27.0726 326.007 21.4809 328.327 17.3565 332.451C13.2322 336.576 10.9122 342.167 10.9053 348C10.8983 352.766 12.4553 357.404 15.3373 361.2C15.3373 361.2 15.9373 361.99 16.0353 362.104L32.9053 382L49.7833 362.094C49.8713 361.988 50.4733 361.2 50.4733 361.2L50.4753 361.194C53.3559 357.399 54.9121 352.764 54.9053 348C54.8984 342.167 52.5784 336.576 48.454 332.451C44.3297 328.327 38.7379 326.007 32.9053 326ZM32.9053 356C31.323 356 29.7763 355.531 28.4607 354.652C27.1451 353.773 26.1198 352.523 25.5143 351.061C24.9088 349.6 24.7503 347.991 25.059 346.439C25.3677 344.887 26.1296 343.462 27.2484 342.343C28.3673 341.224 29.7927 340.462 31.3446 340.154C32.8964 339.845 34.505 340.003 35.9668 340.609C37.4286 341.214 38.678 342.24 39.5571 343.555C40.4361 344.871 40.9053 346.418 40.9053 348C40.9026 350.121 40.0589 352.154 38.5592 353.654C37.0595 355.154 35.0262 355.997 32.9053 356Z"
          fill={mapTextColor}
        />
        <path
          d="M91.5933 365.512V355.672H98.6973V369.304C95.0013 372.088 89.9133 373.576 85.1133 373.576C74.5533 373.576 66.7773 366.328 66.7773 356.2C66.7773 346.072 74.5533 338.824 85.2573 338.824C91.1613 338.824 96.0573 340.84 99.3213 344.632L94.3293 349.24C91.8813 346.648 89.0493 345.448 85.6413 345.448C79.1133 345.448 74.6493 349.816 74.6493 356.2C74.6493 362.488 79.1133 366.952 85.5453 366.952C87.6573 366.952 89.6253 366.568 91.5933 365.512ZM130.689 360.184C130.689 360.76 130.593 361.576 130.545 362.2H111.009C111.729 365.416 114.465 367.384 118.401 367.384C121.137 367.384 123.105 366.568 124.881 364.888L128.865 369.208C126.465 371.944 122.865 373.384 118.209 373.384C109.281 373.384 103.473 367.768 103.473 360.088C103.473 352.36 109.377 346.792 117.249 346.792C124.833 346.792 130.689 351.88 130.689 360.184ZM117.297 352.456C113.889 352.456 111.441 354.52 110.913 357.832H123.633C123.105 354.568 120.657 352.456 117.297 352.456ZM151.37 346.792C157.466 346.792 162.074 350.344 162.074 358.216V373H154.586V359.368C154.586 355.192 152.666 353.272 149.354 353.272C145.754 353.272 143.162 355.48 143.162 360.232V373H135.674V347.176H142.826V350.2C144.842 347.992 147.866 346.792 151.37 346.792ZM194.439 360.184C194.439 360.76 194.343 361.576 194.295 362.2H174.759C175.479 365.416 178.215 367.384 182.151 367.384C184.887 367.384 186.855 366.568 188.631 364.888L192.615 369.208C190.215 371.944 186.615 373.384 181.959 373.384C173.031 373.384 167.223 367.768 167.223 360.088C167.223 352.36 173.127 346.792 180.999 346.792C188.583 346.792 194.439 351.88 194.439 360.184ZM181.047 352.456C177.639 352.456 175.191 354.52 174.663 357.832H187.383C186.855 354.568 184.407 352.456 181.047 352.456ZM217.387 347.176H224.587L213.691 373H205.963L195.115 347.176H202.843L209.995 364.744L217.387 347.176ZM237.215 346.792C245.087 346.792 249.647 350.44 249.647 358.264V373H242.639V369.784C241.247 372.136 238.559 373.384 234.767 373.384C228.719 373.384 225.119 370.024 225.119 365.56C225.119 361 228.335 357.832 236.207 357.832H242.159C242.159 354.616 240.239 352.744 236.207 352.744C233.471 352.744 230.639 353.656 228.767 355.144L226.079 349.912C228.911 347.896 233.087 346.792 237.215 346.792ZM236.639 368.344C239.135 368.344 241.295 367.192 242.159 364.84V362.2H237.023C233.519 362.2 232.415 363.496 232.415 365.224C232.415 367.096 233.999 368.344 236.639 368.344Z"
          fill={mapTextColor}
        />
        <path
          d="M72.2133 401.304H80.6413V405H65.8293V402.06L73.3893 394.92C75.1253 393.268 75.4333 392.26 75.4333 391.308C75.4333 389.768 74.3693 388.872 72.2973 388.872C70.6173 388.872 69.1893 389.516 68.2373 390.832L64.9333 388.704C66.4453 386.492 69.1893 385.064 72.7173 385.064C77.0853 385.064 79.9973 387.304 79.9973 390.86C79.9973 392.764 79.4653 394.5 76.7213 397.048L72.2133 401.304ZM90.8582 405.336C86.0422 405.336 82.4582 401.668 82.4582 395.2C82.4582 388.732 86.0422 385.064 90.8582 385.064C95.7022 385.064 99.2582 388.732 99.2582 395.2C99.2582 401.668 95.7022 405.336 90.8582 405.336ZM90.8582 401.5C93.1262 401.5 94.6942 399.652 94.6942 395.2C94.6942 390.748 93.1262 388.9 90.8582 388.9C88.6182 388.9 87.0502 390.748 87.0502 395.2C87.0502 399.652 88.6182 401.5 90.8582 401.5ZM100.402 385.4H108.858V405H104.322V389.04H100.402V385.4ZM111.899 385.4H127.607V388.34L120.327 405H115.399L122.427 389.096H115.931V392.288H111.899V385.4ZM137.92 398.868V395.368H145.844V398.868H137.92ZM162.502 401.304H170.93V405H156.118V402.06L163.678 394.92C165.414 393.268 165.722 392.26 165.722 391.308C165.722 389.768 164.658 388.872 162.586 388.872C160.906 388.872 159.478 389.516 158.526 390.832L155.222 388.704C156.734 386.492 159.478 385.064 163.006 385.064C167.374 385.064 170.286 387.304 170.286 390.86C170.286 392.764 169.754 394.5 167.01 397.048L162.502 401.304ZM181.147 405.336C176.331 405.336 172.747 401.668 172.747 395.2C172.747 388.732 176.331 385.064 181.147 385.064C185.991 385.064 189.547 388.732 189.547 395.2C189.547 401.668 185.991 405.336 181.147 405.336ZM181.147 401.5C183.415 401.5 184.983 399.652 184.983 395.2C184.983 390.748 183.415 388.9 181.147 388.9C178.907 388.9 177.339 390.748 177.339 395.2C177.339 399.652 178.907 401.5 181.147 401.5ZM197.803 401.304H206.231V405H191.419V402.06L198.979 394.92C200.715 393.268 201.023 392.26 201.023 391.308C201.023 389.768 199.959 388.872 197.887 388.872C196.207 388.872 194.779 389.516 193.827 390.832L190.523 388.704C192.035 386.492 194.779 385.064 198.307 385.064C202.675 385.064 205.587 387.304 205.587 390.86C205.587 392.764 205.055 394.5 202.311 397.048L197.803 401.304ZM207.207 385.4H215.663V405H211.127V389.04H207.207V385.4Z"
          fill={mapTextColor}
        />
      </g>
      <defs>
        <clipPath id="clip0_5_362">
          <rect
            width="780.46"
            height="501.36"
            fill={mapTextColor}
            transform="translate(0.905273)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default GenevaMap;
