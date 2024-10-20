interface HelixLogoProps {
    width: number;
    height: number;
    viewBoxLeft?: number;
    viewBoxRight?: number;
    viewBoxUp?: number;
    viewBoxDown?: number;
}

// Pretty nice, eh @Stefan ?
// Yup, @Michael
export const HelixLogo = ({
    width,
    height,
    viewBoxLeft = 0,
    viewBoxRight = 0,
    viewBoxUp = 0,
    viewBoxDown = 0,
}: HelixLogoProps) => {
    // Original dimensions of the SVG
    // const originalWidth = 1400;
    // const originalHeight = 388;

    // Calculate the aspect ratio of the original SVG
    // const aspectRatio = originalWidth / originalHeight;

    // Calculate the viewBox dimensions to cover the entire SVG while maintaining the aspect ratio
    // const viewBoxWidth = width;
    // const viewBoxHeight = width / aspectRatio;
    // Original dimensions of the SVG
    const originalWidth = 1400;
    const originalHeight = 388;

    // Calculate the adjusted viewBox dimensions
    const viewBoxWidth = originalWidth + viewBoxLeft + viewBoxRight;
    const viewBoxHeight = originalHeight + viewBoxUp + viewBoxDown;

    return (
        <svg
            id="Helix_LOGO"
            data-name="Helix LOGO"
            className="mx-auto"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width={width}
            height={height}
            viewBox={`${viewBoxLeft} ${viewBoxUp} ${viewBoxWidth} ${viewBoxHeight}`}
        >
            <defs>
                <style>
                    {`
            .cls-1 {
              font-size: 300px;
              font-family: "Amaranth";
              font-weight: 700;
            }
            .cls-1, .cls-3 {
              fill: #e1e7ef;
            }
            .cls-2 {
              fill: #f471b5;
            }
            .cls-3 {
              stroke: #e1e7ef;
            }
            .cls-3, .cls-4 {
              stroke-width: 1px;
              fill-rule: evenodd;
            }
            .cls-4 {
              fill: #18181b;
              stroke: #000;
            }
          `}
                </style>
                <filter
                    id="filter"
                    x="141.5"
                    y="39.5"
                    width="328.031"
                    height="309"
                    filterUnits="userSpaceOnUse"
                >
                    <feFlood result="flood" floodColor="#f471b5" />
                    <feComposite result="composite" operator="in" in2="SourceGraphic" />
                    <feBlend result="blend" in2="SourceGraphic" />
                </filter>
            </defs>
            <text id="Helix." className="cls-1" x="502.501" y="293.5">
                Helix<tspan className="cls-2">.</tspan>
            </text>
            <path
                id="Bottom"
                className="cls-3"
                d="M690,293l31-1s-23.826-9.46-31-34v35Z"
            />
            <path
                id="Bottom_copy"
                data-name="Bottom copy"
                className="cls-3"
                d="M1035,145h49s-41.1-6.528-61-23Z"
            />
            <path className="cls-3" d="M1033,141l54,5,4,16-45-1Z" />
            <path
                className="cls-3"
                d="M521,91.531l-31,1s23.826,9.46,31,34v-35Zm0.487,1.031h29.026v37.876H521.487V92.562Z"
            />
            <g style={{ fill: '#18181b', filter: 'url(#filter)' }}>
                <path
                    id="DNA_copy"
                    data-name="DNA copy"
                    className="cls-4"
                    d="M292.879,95.54s-28.817-15.709-29.26-55.526H221.737s-44.88,5.471-49.34,48.657l0.574,64.685s-5.007,26.079-30.981,28.05v25.759s19.089-3.4,29.26,24.615V299.9s5.033,38.386,47.619,46.367l44.177,0.572S258.9,306.8,307.222,283.872c0,0,48.923-16.855,61.388-61.823,0,0,20.811-54.063-26.964-97.314,0,0-8.45,7.188-23.523,13.738,0,0,13.639,10.909,21.8,24.615h-67.7s11.344-28.017,44.75-36.636c0,0,45.194-23.258,51.635-60.106l19.507,0.572s20.237,1.07,25.817,22.325v66.4s0.731,23.4,21.228,38.353c0,0-17.629,9.943-20.654,34.346v65.83s-1.851,21.106-24.67,27.477h-20.08s-10.744-29.841-27.539-42.36c0,0-19.924,12.519-24.1,12.594,0,0,32.572,24.254,28.686,55.526l41.308,0.572s44.046-4.081,51.635-50.374V229.49s6.252-20.968,29.26-22.325l-0.574-26.332S444,181.9,440.326,152.212L439.752,88.1s-7.517-42.721-52.782-47.512l-40.161-.572s6.539,47.724-57.372,70.41c0,0-45.67,21.391-51.062,72.7,0,0-9.238,40,30.408,80.713,0,0,15.718-11.809,24.1-14.311,0,0-18.418-14.1-21.228-25.187l68.273,1.145s-9.812,24.9-51.061,38.926c0,0-38.211,20.318-47.619,57.816H221.737s-24.155-6.3-24.67-27.477l-0.573-64.685s-1.493-20.9-20.654-36.636c0,0,16-8.59,20.654-36.064l0.573-67.547s5.966-19.466,22.376-22.9h21.8s5.679,21.463,27.539,42.933C268.783,109.851,282.839,98.116,292.879,95.54Zm-28.112,84.721s-3.765,15.038,0,25.759l80.895,0.573s3.442-14.752-.574-26.332H264.767Z"
                    style={{ stroke: 'inherit', fill: 'inherit' }}
                />
            </g>
            <use xlinkHref="#DNA_copy" style={{ stroke: '#000', fill: 'none' }} />
        </svg>
    );
};